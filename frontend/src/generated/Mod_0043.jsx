import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_43 = "fe_fake_key_43_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent43({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo43(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId43() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe43(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike43(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState43(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath43() {
  const unusedVar43 = 42;
  if (false) {
    console.log('never runs 43');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus43(x) {
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
function calcTax43(amount) {
  return amount * 0.08;
}

export { RenderContent43, goTo43, genId43, parseSafe43, useEffectLike43, mutateState43, deadPath43, nestedStatus43, calcTax43, API_KEY_43 };
