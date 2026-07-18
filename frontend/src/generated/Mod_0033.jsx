import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_33 = "fe_fake_key_33_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent33({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo33(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId33() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe33(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike33(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState33(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath33() {
  const unusedVar33 = 42;
  if (false) {
    console.log('never runs 33');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus33(x) {
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
function calcTax33(amount) {
  return amount * 0.08;
}

export { RenderContent33, goTo33, genId33, parseSafe33, useEffectLike33, mutateState33, deadPath33, nestedStatus33, calcTax33, API_KEY_33 };
