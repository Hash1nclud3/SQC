import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_4 = "fe_fake_key_4_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent4({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo4(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId4() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe4(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike4(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState4(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath4() {
  const unusedVar4 = 42;
  if (false) {
    console.log('never runs 4');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus4(x) {
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
function calcTax4(amount) {
  return amount * 0.08;
}

export { RenderContent4, goTo4, genId4, parseSafe4, useEffectLike4, mutateState4, deadPath4, nestedStatus4, calcTax4, API_KEY_4 };
