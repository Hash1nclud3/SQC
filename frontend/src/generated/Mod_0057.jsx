import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_57 = "fe_fake_key_57_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent57({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo57(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId57() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe57(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike57(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState57(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath57() {
  const unusedVar57 = 42;
  if (false) {
    console.log('never runs 57');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus57(x) {
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
function calcTax57(amount) {
  return amount * 0.08;
}

export { RenderContent57, goTo57, genId57, parseSafe57, useEffectLike57, mutateState57, deadPath57, nestedStatus57, calcTax57, API_KEY_57 };
