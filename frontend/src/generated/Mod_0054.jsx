import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_54 = "fe_fake_key_54_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent54({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo54(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId54() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe54(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike54(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState54(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath54() {
  const unusedVar54 = 42;
  if (false) {
    console.log('never runs 54');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus54(x) {
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
function calcTax54(amount) {
  return amount * 0.08;
}

export { RenderContent54, goTo54, genId54, parseSafe54, useEffectLike54, mutateState54, deadPath54, nestedStatus54, calcTax54, API_KEY_54 };
