import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_31 = "fe_fake_key_31_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent31({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo31(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId31() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe31(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike31(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState31(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath31() {
  const unusedVar31 = 42;
  if (false) {
    console.log('never runs 31');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus31(x) {
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
function calcTax31(amount) {
  return amount * 0.08;
}

export { RenderContent31, goTo31, genId31, parseSafe31, useEffectLike31, mutateState31, deadPath31, nestedStatus31, calcTax31, API_KEY_31 };
