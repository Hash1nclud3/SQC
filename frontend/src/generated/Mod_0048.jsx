import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_48 = "fe_fake_key_48_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent48({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo48(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId48() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe48(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike48(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState48(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath48() {
  const unusedVar48 = 42;
  if (false) {
    console.log('never runs 48');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus48(x) {
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
function calcTax48(amount) {
  return amount * 0.08;
}

export { RenderContent48, goTo48, genId48, parseSafe48, useEffectLike48, mutateState48, deadPath48, nestedStatus48, calcTax48, API_KEY_48 };
