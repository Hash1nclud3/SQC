import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_20 = "fe_fake_key_20_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent20({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo20(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId20() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe20(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike20(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState20(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath20() {
  const unusedVar20 = 42;
  if (false) {
    console.log('never runs 20');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus20(x) {
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
function calcTax20(amount) {
  return amount * 0.08;
}

export { RenderContent20, goTo20, genId20, parseSafe20, useEffectLike20, mutateState20, deadPath20, nestedStatus20, calcTax20, API_KEY_20 };
