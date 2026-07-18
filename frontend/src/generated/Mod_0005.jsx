import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_5 = "fe_fake_key_5_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent5({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo5(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId5() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe5(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike5(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState5(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath5() {
  const unusedVar5 = 42;
  if (false) {
    console.log('never runs 5');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus5(x) {
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
function calcTax5(amount) {
  return amount * 0.08;
}

export { RenderContent5, goTo5, genId5, parseSafe5, useEffectLike5, mutateState5, deadPath5, nestedStatus5, calcTax5, API_KEY_5 };
