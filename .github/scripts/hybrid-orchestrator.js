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
  console.error("❌ Fatal Error: Could not load the system-instruction.txt file.");
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
  
  // Return standard compliant mock fallback for testing the routing matrix safely
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
  
  // Return standard compliant mock fallback for testing the routing matrix safely
  return JSON.stringify({
    status: "APPROVED",
    summary: "Mock review executed successfully via AWS Bedrock Claude placeholder pathway.",
    findings: []
  });
}

// ============================================================================
// OUTPUT GATEKEEPER
// ============================================================================

async function postReportAndEvaluateGate(result) {
  let commentBody = `### 🤖 AI Architectural Quality Review (${process.env.AI_PROVIDER.toUpperCase()})\n\n`;
  commentBody += `**Verdict:** ${result.status === 'BLOCKED' ? '❌ Blocked' : '✅ Approved'}\n`;
  commentBody += `> ${result.summary}\n\n`;

  if (result.findings && result.findings.length > 0) {
    commentBody += `| File | Severity | Issue Detected | Suggested Fix |\n`;
    commentBody += `| :--- | :--- | :--- | :--- |\n`;
    for (const finding of result.findings) {
      const icon = finding.severity === 'CRITICAL' ? '🔴' : '🟡';
      commentBody += `| \`${finding.file}\` | ${icon} ${finding.severity} | ${finding.issue} | \`${finding.remediation}\` |\n`;
    }
  }

  if (!process.env.PR_NUMBER) {
    console.log("📝 No active PR number provided. Printing AI Review results directly to console logs:\n");
    console.log(commentBody);
  } else {
    console.log(`Posting Report to GitHub PR #${process.env.PR_NUMBER}...`);
    await fetch(`https://api.github.com/repos/${process.env.REPO_NAME}/issues/${process.env.PR_NUMBER}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: commentBody })
    });
  }

  if (result.status === "BLOCKED") {
    console.error("❌ Pipeline Gate Failed: AI identified critical flaws.");
    process.exit(1);
  }
}

run().catch(err => {
  console.error("Fatal Error:", err);
  process.exit(1);
});