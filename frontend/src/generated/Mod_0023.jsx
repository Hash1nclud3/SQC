import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_23 = "fe_fake_key_23_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent23({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo23(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId23() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe23(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike23(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState23(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath23() {
  const unusedVar23 = 42;
  if (false) {
    console.log('never runs 23');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus23(x) {
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
function calcTax23(amount) {
  return amount * 0.08;
}

export { RenderContent23, goTo23, genId23, parseSafe23, useEffectLike23, mutateState23, deadPath23, nestedStatus23, calcTax23, API_KEY_23 };
