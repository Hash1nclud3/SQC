import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_9 = "fe_fake_key_9_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent9({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo9(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId9() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe9(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike9(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState9(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath9() {
  const unusedVar9 = 42;
  if (false) {
    console.log('never runs 9');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus9(x) {
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
function calcTax9(amount) {
  return amount * 0.08;
}

export { RenderContent9, goTo9, genId9, parseSafe9, useEffectLike9, mutateState9, deadPath9, nestedStatus9, calcTax9, API_KEY_9 };
