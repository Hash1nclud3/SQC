import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_35 = "fe_fake_key_35_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent35({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo35(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId35() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe35(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike35(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState35(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath35() {
  const unusedVar35 = 42;
  if (false) {
    console.log('never runs 35');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus35(x) {
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
function calcTax35(amount) {
  return amount * 0.08;
}

export { RenderContent35, goTo35, genId35, parseSafe35, useEffectLike35, mutateState35, deadPath35, nestedStatus35, calcTax35, API_KEY_35 };
