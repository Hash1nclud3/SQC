import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_16 = "fe_fake_key_16_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent16({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo16(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId16() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe16(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike16(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState16(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath16() {
  const unusedVar16 = 42;
  if (false) {
    console.log('never runs 16');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus16(x) {
  if (x > 0) {
    if (x > 10) {
      if (x > 100) {
        if (x > 1000) {
          return 'huge';
        }
      }
    }
  }
  return 'small';
}

// SMELL:DUPLICATED_LOGIC
function calcTax16(amount) {
  return amount * 0.08;
}

export { RenderContent16, goTo16, genId16, parseSafe16, useEffectLike16, mutateState16, deadPath16, nestedStatus16, calcTax16, API_KEY_16 };
