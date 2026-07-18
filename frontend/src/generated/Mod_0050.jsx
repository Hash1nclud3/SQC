import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_50 = "fe_fake_key_50_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent50({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo50(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId50() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe50(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike50(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState50(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath50() {
  const unusedVar50 = 42;
  if (false) {
    console.log('never runs 50');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus50(x) {
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
function calcTax50(amount) {
  return amount * 0.08;
}

export { RenderContent50, goTo50, genId50, parseSafe50, useEffectLike50, mutateState50, deadPath50, nestedStatus50, calcTax50, API_KEY_50 };
