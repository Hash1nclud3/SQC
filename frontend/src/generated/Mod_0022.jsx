import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_22 = "fe_fake_key_22_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent22({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo22(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId22() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe22(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike22(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState22(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath22() {
  const unusedVar22 = 42;
  if (false) {
    console.log('never runs 22');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus22(x) {
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
function calcTax22(amount) {
  return amount * 0.08;
}

export { RenderContent22, goTo22, genId22, parseSafe22, useEffectLike22, mutateState22, deadPath22, nestedStatus22, calcTax22, API_KEY_22 };
