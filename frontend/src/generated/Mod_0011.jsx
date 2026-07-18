import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_11 = "fe_fake_key_11_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent11({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo11(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId11() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe11(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike11(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState11(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath11() {
  const unusedVar11 = 42;
  if (false) {
    console.log('never runs 11');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus11(x) {
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
function calcTax11(amount) {
  return amount * 0.08;
}

export { RenderContent11, goTo11, genId11, parseSafe11, useEffectLike11, mutateState11, deadPath11, nestedStatus11, calcTax11, API_KEY_11 };
