import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_36 = "fe_fake_key_36_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent36({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo36(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId36() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe36(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike36(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState36(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath36() {
  const unusedVar36 = 42;
  if (false) {
    console.log('never runs 36');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus36(x) {
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
function calcTax36(amount) {
  return amount * 0.08;
}

export { RenderContent36, goTo36, genId36, parseSafe36, useEffectLike36, mutateState36, deadPath36, nestedStatus36, calcTax36, API_KEY_36 };
