import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_25 = "fe_fake_key_25_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent25({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo25(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId25() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe25(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike25(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState25(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath25() {
  const unusedVar25 = 42;
  if (false) {
    console.log('never runs 25');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus25(x) {
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
function calcTax25(amount) {
  return amount * 0.08;
}

export { RenderContent25, goTo25, genId25, parseSafe25, useEffectLike25, mutateState25, deadPath25, nestedStatus25, calcTax25, API_KEY_25 };
