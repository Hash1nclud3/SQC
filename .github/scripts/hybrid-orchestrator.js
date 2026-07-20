const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const promptPath = path.join(__dirname, 'system-instruction.txt');
let systemInstruction = "";

try {
  systemInstruction = fs.readFileSync(promptPath, 'utf8');
} catch (error) {
  console.error("❌ Fatal Error: Could not load system-instruction.txt file.");
  process.exit(1);
}

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

  console.log("⏳ Waiting 15 seconds for SonarCloud background analysis processing...");
  await new Promise(r => setTimeout(r, 15000));

  const auth = Buffer.from(`${token}:`).toString('base64');
  const url = `https://sonarcloud.io/api/issues/search?componentKeys=${projectKey}&branch=${branch}&resolved=false`;

  try {
    console.log(`📡 Fetching SonarCloud issues from API for project: ${projectKey} (Branch: ${branch})`);
    const res = await fetch(url, { headers: { Authorization: `Basic ${auth}` } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.issues || [];
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
  const provider = process.env.AI_PROVIDER || 'gemini';
  let payloadData = '';
  let aiPromptPrefix = '';

  if (scanMode === 'full') {
    console.log("📦 FULL REPO SCAN INITIATED. Gathering source files...");
    const files = getAllFiles('.');
    if (files.length === 0) {
      console.log("⚠️ No matching source files found.");
      return await finalizeAndExit({ status: "APPROVED", summary: "No source files found to scan.", findings: [] });
    }

    for (const file of files) {
      payloadData += `\n\n--- FILE: ${file} ---\n${fs.readFileSync(file, 'utf8')}`;
    }
    aiPromptPrefix = "Analyze this entire codebase for architectural flaws and vulnerabilities:\n\n";
  } else {
    // Diff Mode
    if (!fs.existsSync('pr_changes.diff') || fs.statSync('pr_changes.diff').size === 0) {
      console.log("⚠️ No diff payload found. Skipping AI scan.");
      return await finalizeAndExit({ status: "APPROVED", summary: "No code changes detected in this run.", findings: [] });
    }
    payloadData = fs.readFileSync('pr_changes.diff', 'utf8');
    aiPromptPrefix = "Analyze this git diff for architectural flaws and vulnerabilities:\n\n";
  }

  console.log(`🚀 Running architectural scan using provider: ${provider} | Mode: ${scanMode}`);

  let rawJsonResult = '';
  if (provider === 'gemini') {
    rawJsonResult = await callGemini(payloadData, aiPromptPrefix);
  } else if (provider === 'openai') {
    rawJsonResult = await callOpenAI(payloadData, aiPromptPrefix);
  } else if (provider === 'bedrock') {
    rawJsonResult = await callBedrockClaude(payloadData, aiPromptPrefix);
  } else {
    throw new Error(`Unsupported AI Engine routing provider: ${provider}`);
  }

  const aiResult = JSON.parse(rawJsonResult.trim());
  await finalizeAndExit(aiResult);
}

// ----------------------------------------------------------------------------
// AI PROVIDERS
// ----------------------------------------------------------------------------
async function callGemini(payloadData, prefix) {
  console.log("Processing via Gemini AI Studio...");
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash',
    contents: [{ role: 'user', parts: [{ text: `${prefix}${payloadData}` }] }],
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.1,
      responseMimeType: "application/json"
    }
  });
  return response.text;
}

async function callOpenAI(payloadData, prefix) {
  console.log("🛰️ OpenAI Routing Engaged (PLACEHOLDER)");
  return JSON.stringify({ status: "APPROVED", summary: "Mock OpenAI review completed.", findings: [] });
}

async function callBedrockClaude(payloadData, prefix) {
  console.log("🛰️ AWS Bedrock Claude Routing Engaged (PLACEHOLDER)");
  return JSON.stringify({ status: "APPROVED", summary: "Mock Bedrock review completed.", findings: [] });
}

// ----------------------------------------------------------------------------
// SARIF COMPILATION & OUTPUT
// ----------------------------------------------------------------------------
async function finalizeAndExit(aiResult) {
  console.log(`AI Verdict: ${aiResult.status} | ${aiResult.summary}`);
  
  // Fetch Sonar issues to merge into SARIF
  const sonarIssues = await fetchSonarIssues();
  
  const sarifData = generateCombinedSarif(aiResult, sonarIssues);
  fs.writeFileSync('ai-results.sarif', JSON.stringify(sarifData, null, 2));
  console.log("✅ Combined Multi-Tool SARIF report generated successfully as ai-results.sarif");

  if (aiResult.status === "BLOCKED") {
    console.error("❌ Pipeline Gate Failed: AI identified critical flaws.");
    process.exit(1);
  }
}

function generateCombinedSarif(aiResult, sonarIssues) {
  const providerName = process.env.AI_PROVIDER || 'gemini';
  
  const sarif = {
    $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
    version: "2.1.0",
    runs: []
  };

  // --- RUN 1: AI ARCHITECT ---
  const aiRun = {
    tool: { driver: { name: `AI Architect Review (${providerName.toUpperCase()})`, rules: [] } },
    results: []
  };

  if (aiResult.findings && aiResult.findings.length > 0) {
    aiResult.findings.forEach((finding, index) => {
      const ruleId = `AI-ARCH-${finding.severity}-${index}`;
      const sarifLevel = finding.severity === 'CRITICAL' ? 'error' : 'warning';

      aiRun.tool.driver.rules.push({
        id: ruleId,
        shortDescription: { text: finding.issue },
        fullDescription: { text: finding.remediation },
        defaultConfiguration: { level: sarifLevel }
      });

      aiRun.results.push({
        ruleId: ruleId,
        message: { text: `**[AI Scan] Issue:** ${finding.issue}\n\n**Fix:** ${finding.remediation}` },
        locations: [{
          physicalLocation: {
            artifactLocation: { uri: finding.file },
            region: { startLine: finding.line_number || 1 }
          }
        }]
      });
    });
  }
  sarif.runs.push(aiRun);

  // --- RUN 2: SONARCLOUD ---
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

// ----------------------------------------------------------------------------
// SAFE ERROR CATCHER
// ----------------------------------------------------------------------------
run().catch(err => {
  console.error("Fatal Error:", err);
  const errorSarif = generateCombinedSarif(
    { status: "BLOCKED", summary: "Pipeline failed to execute AI scan. Check Actions logs.", findings: [] },
    []
  );
  fs.writeFileSync('ai-results.sarif', JSON.stringify(errorSarif, null, 2));
  process.exit(1);
});
