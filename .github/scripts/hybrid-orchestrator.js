const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const promptPath = path.join(__dirname, 'system-instruction.txt');
let systemInstruction = "";

try {
  systemInstruction = fs.readFileSync(promptPath, 'utf8');
} catch (error) {
  console.error("❌ Fatal Error: Could not load the system-instruction.txt file.");
  process.exit(1);
}

async function run() {
  // 1. SAFE EARLY EXIT: If no diff, write an empty APPROVED Sarif so the upload doesn't fail
  if (!fs.existsSync('pr_changes.diff') || fs.statSync('pr_changes.diff').size === 0) {
    console.log("⚠️ No diff payload found. Skipping AI scan and generating empty SARIF.");
    const emptySarif = generateSarif({ status: "APPROVED", summary: "No code changes detected in this run.", findings: [] });
    fs.writeFileSync('ai-results.sarif', JSON.stringify(emptySarif, null, 2));
    return;
  }
  
  const diffData = fs.readFileSync('pr_changes.diff', 'utf8');
  const provider = process.env.AI_PROVIDER || 'gemini';
  let rawJsonResult = '';

  console.log(`🚀 Route matched. Running architectural scan using provider: ${provider}`);

  if (provider === 'gemini') {
    rawJsonResult = await callGemini(diffData);
  } else if (provider === 'openai') {
    rawJsonResult = await callOpenAI(diffData);
  } else if (provider === 'bedrock') {
    rawJsonResult = await callBedrockClaude(diffData);
  } else {
    throw new Error(`Unsupported AI Engine routing provider: ${provider}`);
  }

  const result = JSON.parse(rawJsonResult.trim());
  await postReportAndEvaluateGate(result);
}

async function callGemini(diffData) {
  console.log("Processing via Gemini AI Studio...");
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash', 
    contents: [{ role: 'user', parts: [{ text: `Analyze this git diff:\n\n${diffData}` }] }],
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.1,
      responseMimeType: "application/json"
    }
  });
  return response.text;
}

async function callOpenAI(diffData) {
  console.log("🛰️ OpenAI Routing Engaged (PLACEHOLDER)");
  return JSON.stringify({ status: "APPROVED", summary: "Mock review executed successfully via OpenAI placeholder.", findings: [] });
}

async function callBedrockClaude(diffData) {
  console.log("🛰️ AWS Bedrock Claude Routing Engaged (PLACEHOLDER)");
  return JSON.stringify({ status: "APPROVED", summary: "Mock review executed successfully via AWS Bedrock.", findings: [] });
}

function generateSarif(result) {
  const providerName = process.env.AI_PROVIDER || 'gemini';
  const sarif = {
    $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
    version: "2.1.0",
    runs: [{
      tool: {
        driver: {
          name: `AI Architect Review (${providerName.toUpperCase()})`,
          rules: []
        }
      },
      results: []
    }]
  };

  if (result.findings && result.findings.length > 0) {
    result.findings.forEach((finding, index) => {
      const ruleId = `AI-ARCH-${finding.severity}-${index}`;
      const sarifLevel = finding.severity === 'CRITICAL' ? 'error' : 'warning';

      sarif.runs[0].tool.driver.rules.push({
        id: ruleId,
        shortDescription: { text: finding.issue },
        fullDescription: { text: finding.remediation },
        defaultConfiguration: { level: sarifLevel }
      });

      sarif.runs[0].results.push({
        ruleId: ruleId,
        message: { text: `**Issue:** ${finding.issue}\n\n**Fix:** ${finding.remediation}` },
        locations: [{
          physicalLocation: {
            artifactLocation: { uri: finding.file },
            region: { startLine: finding.line_number || 1 }
          }
        }]
      });
    });
  }
  return sarif;
}

async function postReportAndEvaluateGate(result) {
  console.log(`AI Verdict: ${result.status} | ${result.summary}`);
  
  const sarifData = generateSarif(result);
  fs.writeFileSync('ai-results.sarif', JSON.stringify(sarifData, null, 2));
  console.log("✅ SARIF report generated successfully as ai-results.sarif");

  if (result.status === "BLOCKED") {
    console.error("❌ Pipeline Gate Failed: AI identified critical flaws.");
    process.exit(1);
  }
}

run().catch(err => {
  console.error("Fatal Error:", err);
  // 2. SAFE ERROR HANDLING: Write an error SARIF so the pipeline fails gracefully
  const errorSarif = generateSarif({ status: "BLOCKED", summary: "Pipeline failed to execute AI scan. Check Actions logs.", findings: [] });
  fs.writeFileSync('ai-results.sarif', JSON.stringify(errorSarif, null, 2));
  process.exit(1);
});
