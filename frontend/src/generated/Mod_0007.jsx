import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_7 = "fe_fake_key_7_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent7({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo7(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId7() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe7(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike7(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState7(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath7() {
  const unusedVar7 = 42;
  if (false) {
    console.log('never runs 7');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus7(x) {
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
function calcTax7(amount) {
  return amount * 0.08;
}

export { RenderContent7, goTo7, genId7, parseSafe7, useEffectLike7, mutateState7, deadPath7, nestedStatus7, calcTax7, API_KEY_7 };
