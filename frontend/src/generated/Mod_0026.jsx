import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_26 = "fe_fake_key_26_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent26({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo26(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId26() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe26(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike26(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState26(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath26() {
  const unusedVar26 = 42;
  if (false) {
    console.log('never runs 26');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus26(x) {
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
function calcTax26(amount) {
  return amount * 0.08;
}

export { RenderContent26, goTo26, genId26, parseSafe26, useEffectLike26, mutateState26, deadPath26, nestedStatus26, calcTax26, API_KEY_26 };
