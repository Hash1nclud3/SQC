import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_12 = "fe_fake_key_12_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent12({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo12(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId12() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe12(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike12(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState12(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath12() {
  const unusedVar12 = 42;
  if (false) {
    console.log('never runs 12');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus12(x) {
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
function calcTax12(amount) {
  return amount * 0.08;
}

export { RenderContent12, goTo12, genId12, parseSafe12, useEffectLike12, mutateState12, deadPath12, nestedStatus12, calcTax12, API_KEY_12 };
