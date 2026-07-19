const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');
// Placeholders for prospective SDK imports
// const { OpenAI } = require('openai');
// const { BedrockRuntimeClient, InvokeModelCommand } = require('@aws-sdk/client-bedrock-runtime');

// Dynamically load the prompt from the external text file
const promptPath = path.join(__dirname, 'system-instruction.txt');
let systemInstruction = "";

try {
  systemInstruction = fs.readFileSync(promptPath, 'utf8');
} catch (error) {
  console.error("❌ Fatal Error: Could not load the system-instruction.txt file. Ensure it exists in the .github/scripts/ directory.");
  process.exit(1);
}

async function run() {
  if (!fs.existsSync('pr_changes.diff') || fs.statSync('pr_changes.diff').size === 0) {
    console.log("⚠️ No diff payload found. Skipping AI scan.");
    return;
  }
  
  const diffData = fs.readFileSync('pr_changes.diff', 'utf8');
  const provider = process.env.AI_PROVIDER || 'gemini';
  let rawJsonResult = '';

  console.log(`🚀 Route matched. Running architectural scan using provider: ${provider}`);

  // ROUTING ENGINE
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

// ============================================================================
// PROVIDER ENGINES & PLACEHOLDERS
// ============================================================================

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
  
  // TODO: Wire up official OpenAI package connection details:
  // const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  // const response = await openai.chat.completions.create({ ... });
  
  return JSON.stringify({
    status: "APPROVED",
    summary: "Mock review executed successfully via OpenAI placeholder pathway.",
    findings: []
  });
}

async function callBedrockClaude(diffData) {
  console.log("🛰️ AWS Bedrock Claude Routing Engaged (PLACEHOLDER)");
  
  // TODO: Wire up AWS Client Bedrock connection logic:
  // const client = new BedrockRuntimeClient({ region: process.env.AWS_REGION });
  
  return JSON.stringify({
    status: "APPROVED",
    summary: "Mock review executed successfully via AWS Bedrock Claude placeholder pathway.",
    findings: []
  });
}

// ============================================================================
// SARIF GENERATION & OUTPUT GATEKEEPER
// ============================================================================

function generateSarif(result) {
  // 1. Define the base SARIF structure
  const sarif = {
    $schema: "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
    version: "2.1.0",
    runs: [{
      tool: {
        driver: {
          name: `AI Architect Review (${process.env.AI_PROVIDER.toUpperCase()})`,
          rules: []
        }
      },
      results: []
    }]
  };

  if (result.findings && result.findings.length > 0) {
    result.findings.forEach((finding, index) => {
      const ruleId = `AI-ARCH-${finding.severity}-${index}`;
      
      // Map JSON severity to official SARIF levels
      const sarifLevel = finding.severity === 'CRITICAL' ? 'error' : 'warning';

      // 2. Define the rule metadata
      sarif.runs[0].tool.driver.rules.push({
        id: ruleId,
        shortDescription: { text: finding.issue },
        fullDescription: { text: finding.remediation },
        defaultConfiguration: { level: sarifLevel }
      });

      // 3. Map the finding to the exact file and line
      sarif.runs[0].results.push({
        ruleId: ruleId,
        message: { text: `**Issue:** ${finding.issue}\n\n**Fix:** ${finding.remediation}` },
        locations: [{
          physicalLocation: {
            artifactLocation: { uri: finding.file },
            // Fallback to line 1 if the LLM fails to output a specific line_number
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
  
  // Convert JSON to SARIF and write to disk locally on the runner
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
  process.exit(1);
});
