const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
const OpenAI = require('openai');
const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

const promptPath = path.join(__dirname, 'system-instruction.txt');
let systemInstruction = "";

try {
  systemInstruction = fs.readFileSync(promptPath, 'utf8');
} catch (error) {
  console.error("❌ Fatal Error: Could not load system-instruction.txt file.");
  process.exit(1);
}

// ----------------------------------------------------------------------------
// GLOBAL METRICS TRACKER
// ----------------------------------------------------------------------------
const scanMetrics = {
  linesOfCode: 0,
  fileTypes: {},
  tokensConsumed: 0
};

// ----------------------------------------------------------------------------
// UTILITY: RECURSIVE FILE SEARCH (FULL REPO SCAN)
// ----------------------------------------------------------------------------
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      if (!filepath.includes('node_modules') && !filepath.includes('.git') && !filepath.includes('.github')) {
        getAllFiles(filepath, fileList);
      }
    } else {
      const ext = path.extname(file);
      if (['.js', '.ts', '.py', '.java', '.cs', '.go', '.html', '.json', '.yml'].includes(ext)) {
        fileList.push(filepath);
      }
    }
  }
  return fileList;
}

// ----------------------------------------------------------------------------
// MULTI-PROVIDER AI ROUTER
// ----------------------------------------------------------------------------
async function dispatchAI(systemMsg, userMsg, provider) {
  console.log(`🧠 Initiating AI request via ${provider.toUpperCase()}...`);

  if (provider === 'openai') {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.1,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemMsg },
        { role: "user", content: userMsg }
      ]
    });
    return {
      text: response.choices[0].message.content,
      tokens: response.usage?.total_tokens || 0
    };

  } else if (provider === 'bedrock') {
    const client = new BedrockRuntimeClient({ region: process.env.AWS_REGION || 'us-east-1' });
    
    // Dynamically grab the model ID from the environment
    const bedrockModel = process.env.BEDROCK_MODEL_ID || "anthropic.claude-3-5-sonnet-20240620-v1:0";
    
    const payload = {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 8192,
      system: systemMsg,
      messages: [
        { role: "user", content: userMsg }
      ],
      temperature: 0.1
    };
    
    const command = new InvokeModelCommand({
      modelId: bedrockModel,
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify(payload)
    });

    const response = await client.send(command);
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const totalTokens = (responseBody.usage?.input_tokens || 0) + (responseBody.usage?.output_tokens || 0);
    
    return {
      text: responseBody.content[0].text,
      tokens: totalTokens
    };

  } else {
    // Default to Gemini
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [{ role: 'user', parts: [{ text: userMsg }] }],
      config: {
        systemInstruction: systemMsg,
        temperature: 0.1,
        responseMimeType: "application/json"
      }
    });
    return {
      text: response.text,
      tokens: response.usageMetadata?.totalTokenCount || 0
    };
  }
}

// ----------------------------------------------------------------------------
// AI SAST TRIAGE & DEDUPLICATION
// ----------------------------------------------------------------------------
async function clusterSastWithAI(sonarIssues, provider) {
  if (!sonarIssues || sonarIssues.length === 0) return [];

  console.log(`🧠 Sending ${sonarIssues.length} Sonar issues to AI for deduplication...`);
  
  const compactIssues = sonarIssues.map(i => ({
    issue: i.message,
    file: i.component.includes(':') ? i.component.split(':').pop() : i.component,
    line: i.textRange ? i.textRange.startLine : 1
  }));

  const triageSystemMsg = `You are an expert AppSec triage agent. 
I am providing you with raw SAST findings from deterministic tools. 
Your job is to reduce alert fatigue by clustering them by unique vulnerability type.

Return a strict JSON array of objects using this exact schema:
[
  {
    "finding_type": "string (e.g., Missing Null Checks, Resource Leaks)",
    "root_cause_summary": "string (1-2 sentences explaining why this happens and how to fix it broadly)",
    "instances": [
      { "file": "string", "line": number }
    ]
  }
]`;

  const userMsg = `RAW SAST FINDINGS:\n${JSON.stringify(compactIssues)}`;

  try {
    const aiResponse = await dispatchAI(triageSystemMsg, userMsg, provider);
    scanMetrics.tokensConsumed += aiResponse.tokens;
    return JSON.parse(aiResponse.text.trim());
  } catch (error) {
    console.error("⚠️ AI Triage failed. Skipping deduplication report.", error.message);
    return [];
  }
}

// ----------------------------------------------------------------------------
// TABLE-BASED MARKDOWN GENERATOR
// ----------------------------------------------------------------------------
function generateTriageMarkdown(clusteredIssues, aiFindings, provider) {
  let markdown = `## 🧠 Unified Security Triage Report\n\n`;
  markdown += `| Vulnerability | Source tool | count | Location(s) |\n`;
  markdown += `|---|---|---|---|\n`;

  let totalCount = 0;

  // Process AI Architect Findings
  if (aiFindings && aiFindings.length > 0) {
    const groupedAI = {};
    aiFindings.forEach(f => {
      const title = f.title || f.issue || "Architectural Flaw";
      if (!groupedAI[title]) groupedAI[title] = [];
      groupedAI[title].push(f);
    });

    for (const [title, instances] of Object.entries(groupedAI)) {
      totalCount += instances.length;
      const locations = instances.map(i => {
        let line = parseInt(i.line_number, 10);
        if (isNaN(line) || line < 1) line = 1;
        return `\`${i.file}\` (Line ${line})`;
      }).join("<br>");
      markdown += `| ${title} | AI Architect (${provider.toUpperCase()}) | ${instances.length} | ${locations} |\n`;
    }
  }

  // Process SonarCloud Findings
  if (clusteredIssues && clusteredIssues.length > 0) {
    clusteredIssues.forEach(cluster => {
      totalCount += cluster.instances.length;
      const locations = cluster.instances.map(i => `\`${i.file}\` (Line ${i.line})`).join("<br>");
      markdown += `| ${cluster.finding_type} | SonarCloud | ${cluster.instances.length} | ${locations} |\n`;
    });
  }

  markdown += `\n**Total vulnerabilities published to Security Tab (via custom SARIF):** ${totalCount}\n`;
  return markdown;
}

function generateMetricsMarkdown() {
  let markdown = `\n## 📊 Scan Execution Metrics\n\n`;
  markdown += `- **Lines of Code Scanned:** ${scanMetrics.linesOfCode}\n`;
  markdown += `- **AI Tokens Consumed:** ${scanMetrics.tokensConsumed}\n`;
  markdown += `- **Files Scanned by Type:**\n`;

  if (Object.keys(scanMetrics.fileTypes).length === 0) {
    markdown += `  - N/A\n`;
  } else {
    for (const [ext, count] of Object.entries(scanMetrics.fileTypes)) {
      markdown += `  - \`${ext || 'No Extension'}\`: ${count} file(s)\n`;
    }
  }
  return markdown;
}

// ----------------------------------------------------------------------------
// SONARCLOUD API INTEGRATION
// ----------------------------------------------------------------------------
async function fetchSonarIssues() {
  const projectKey = process.env.SONAR_PROJECT_KEY;
  const token = process.env.SONAR_TOKEN;
  const branch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME;

  if (!projectKey || !token) {
    console.log("⚠️ SONAR_PROJECT_KEY or SONAR_TOKEN missing. Skipping Sonar API fetch.");
    return [];
  }

  console.log("⏳ Waiting 45 seconds for SonarCloud background analysis processing...");
  await new Promise(r => setTimeout(r, 45000));

  const auth = Buffer.from(`${token}:`).toString('base64');
  const url = `https://sonarcloud.io/api/issues/search?componentKeys=${projectKey}&branch=${branch}&resolved=false`;

  try {
    console.log(`📡 Fetching SonarCloud issues from API for project: ${projectKey} (Branch: ${branch})`);
    const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    
    const data = await res.json();
    const issues = data.issues || [];
    console.log(`✅ Sonar API successfully returned ${issues.length} issues.`);
    
    return issues;
  } catch (e) {
    console.error("❌ Failed to fetch Sonar issues:", e.message);
    return [];
  }
}

// ----------------------------------------------------------------------------
// CORE EXECUTION
// ----------------------------------------------------------------------------
async function run() {
  const scanMode = process.env.SCAN_MODE || 'diff';
  const provider = (process.env.AI_PROVIDER || 'gemini').toLowerCase();
  let payloadData = '';
  let aiPromptPrefix = '';

  if (scanMode === 'full') {
    console.log("📦 FULL REPO SCAN INITIATED. Gathering source files...");
    const files = getAllFiles('.');
    if (files.length === 0) {
      console.log("⚠️ No matching source files found. Skipping AI scan.");
      return await finalizeAndExit({ status: "APPROVED", summary: "No source files found to scan.", findings: [] }, provider);
    }

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      scanMetrics.linesOfCode += content.split('\n').length;
      const ext = path.extname(file) || 'no-extension';
      scanMetrics.fileTypes[ext] = (scanMetrics.fileTypes[ext] || 0) + 1;
      
      payloadData += `\n\n--- FILE: ${file} ---\n${content}`;
    }
    aiPromptPrefix = "Analyze this entire codebase for architectural flaws and vulnerabilities:\n\n";
  } else {
    if (!fs.existsSync('pr_changes.diff') || fs.statSync('pr_changes.diff').size === 0) {
      console.log("⚠️ No diff payload found. Skipping AI scan.");
      return await finalizeAndExit({ status: "APPROVED", summary: "No code changes detected in this run.", findings: [] }, provider);
    }
    
    payloadData = fs.readFileSync('pr_changes.diff', 'utf8');
    const diffLines = payloadData.split('\n');
    
    scanMetrics.linesOfCode = diffLines.length;
    for (const line of diffLines) {
      if (line.startsWith('+++ b/')) {
        const filepath = line.substring(6);
        const ext = path.extname(filepath) || 'no-extension';
        scanMetrics.fileTypes[ext] = (scanMetrics.fileTypes[ext] || 0) + 1;
      }
    }
    
    aiPromptPrefix = "Analyze this git diff for architectural flaws and vulnerabilities:\n\n";
  }

  console.log(`🚀 Running architectural scan using provider: ${provider} | Mode: ${scanMode}`);

  let rawJsonResult = '';
  try {
    const aiResponse = await dispatchAI(systemInstruction, `${aiPromptPrefix}${payloadData}`, provider);
    rawJsonResult = aiResponse.text;
    scanMetrics.tokensConsumed += aiResponse.tokens;
    console.log("✅ AI engine successfully returned a response payload.");
  } catch (error) {
    console.error(`❌ ${provider.toUpperCase()} Execution aborted due to an API error:`, error.message);
    return await finalizeAndExit({ status: "BLOCKED", summary: `AI Scan Failed: ${error.message}`, findings: [] }, provider);
  }

  let aiResult;
  try {
    aiResult = JSON.parse(rawJsonResult.trim());
    console.log(`✅ AI scan successfully completed and parsed valid JSON.`);
  } catch (error) {
    console.error("❌ AI Scan Failed: The AI did not return a valid JSON format.", error.message);
    console.log("Raw AI Output was:\n", rawJsonResult);
    return await finalizeAndExit({ status: "BLOCKED", summary: "AI failed to return valid JSON payload.", findings: [] }, provider);
  }

  await finalizeAndExit(aiResult, provider);
}

// ----------------------------------------------------------------------------
// SARIF COMPILATION & OUTPUT
// ----------------------------------------------------------------------------
async function finalizeAndExit(aiResult, provider) {
  console.log(`AI Verdict: ${aiResult.status} | ${aiResult.summary}`);
  
  const sonarIssues = await fetchSonarIssues();
  
  let finalMarkdown = '';
  let clusteredIssues = [];
  if (sonarIssues.length > 0) {
    clusteredIssues = await clusterSastWithAI(sonarIssues, provider);
  }
  
  finalMarkdown += generateTriageMarkdown(clusteredIssues, aiResult.findings, provider);
  finalMarkdown += generateMetricsMarkdown();
  
  fs.writeFileSync('ai-triage-report.md', finalMarkdown);
  console.log("✅ Pipeline execution metrics and AI summary generated.");
  
  const sarifData = generateCombinedSarif(aiResult, sonarIssues, provider);
  fs.writeFileSync('ai-results.sarif', JSON.stringify(sarifData, null, 2));
  console.log("✅ Combined Multi-Tool SARIF report generated successfully as ai-results.sarif");

  if (aiResult.status === "BLOCKED") {
    console.error("❌ Pipeline Gate Failed: AI identified critical flaws or execution failed.");
    process.exit(1);
  }
}

function generateCombinedSarif(aiResult, sonarIssues, providerName) {
  const sarif = {
    $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
    version: "2.1.0",
    runs: []
  };

  const aiRun = {
    tool: { driver: { name: `AI Architect Review (${providerName.toUpperCase()})`, rules: [] } },
    results: []
  };

  if (aiResult.findings && aiResult.findings.length > 0) {
    aiResult.findings.forEach((finding, index) => {
      const ruleId = `AI-ARCH-${finding.severity}-${index}`;
      const sarifLevel = finding.severity === 'CRITICAL' ? 'error' : 'warning';

      let parsedLineNumber = parseInt(finding.line_number, 10);
      if (isNaN(parsedLineNumber) || parsedLineNumber < 1) {
        parsedLineNumber = 1;
      }

      const shortTitle = finding.title || "Architectural Flaw Detected";
      const detailedDesc = finding.description || finding.issue || "No detailed description provided.";

      aiRun.tool.driver.rules.push({
        id: ruleId,
        shortDescription: { text: shortTitle },
        fullDescription: { text: detailedDesc },
        defaultConfiguration: { level: sarifLevel }
      });

      aiRun.results.push({
        ruleId: ruleId,
        message: { text: `**[AI Scan] ${shortTitle}**\n\n**Details:**\n${detailedDesc}\n\n**Fix:**\n${finding.remediation}` },
        locations: [{
          physicalLocation: {
            artifactLocation: { uri: finding.file },
            region: { startLine: parsedLineNumber }
          }
        }]
      });
    });
  }
  sarif.runs.push(aiRun);

  if (sonarIssues && sonarIssues.length > 0) {
    const sonarRun = {
      tool: { driver: { name: `SonarCloud Extractor`, rules: [] } },
      results: []
    };

    sonarIssues.forEach((issue) => {
      const filePath = issue.component.includes(':') ? issue.component.split(':').pop() : issue.component;
      const ruleId = issue.rule;
      const sarifLevel = (issue.severity === 'BLOCKER' || issue.severity === 'CRITICAL') ? 'error' : 'warning';

      if (!sonarRun.tool.driver.rules.find(r => r.id === ruleId)) {
        sonarRun.tool.driver.rules.push({
          id: ruleId,
          shortDescription: { text: issue.message },
          defaultConfiguration: { level: sarifLevel }
        });
      }

      sonarRun.results.push({
        ruleId: ruleId,
        message: { text: `**[SonarCloud]** ${issue.message}` },
        locations: [{
          physicalLocation: {
            artifactLocation: { uri: filePath },
            region: { startLine: issue.textRange ? issue.textRange.startLine : 1 }
          }
        }]
      });
    });
    sarif.runs.push(sonarRun);
  }

  return sarif;
}

run().catch(err => {
  console.error("Fatal Error:", err);
  const errorSarif = generateCombinedSarif(
    { status: "BLOCKED", summary: "Pipeline crashed entirely. Check Actions logs.", findings: [] },
    [],
    process.env.AI_PROVIDER || 'unknown'
  );
  fs.writeFileSync('ai-results.sarif', JSON.stringify(errorSarif, null, 2));
  process.exit(1);
});
