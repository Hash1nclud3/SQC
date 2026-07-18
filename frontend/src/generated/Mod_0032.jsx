import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_32 = "fe_fake_key_32_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent32({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo32(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId32() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe32(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike32(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState32(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath32() {
  const unusedVar32 = 42;
  if (false) {
    console.log('never runs 32');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus32(x) {
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
function calcTax32(amount) {
  return amount * 0.08;
}

export { RenderContent32, goTo32, genId32, parseSafe32, useEffectLike32, mutateState32, deadPath32, nestedStatus32, calcTax32, API_KEY_32 };
