import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_14 = "fe_fake_key_14_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent14({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo14(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId14() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe14(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike14(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState14(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath14() {
  const unusedVar14 = 42;
  if (false) {
    console.log('never runs 14');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus14(x) {
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
function calcTax14(amount) {
  return amount * 0.08;
}

export { RenderContent14, goTo14, genId14, parseSafe14, useEffectLike14, mutateState14, deadPath14, nestedStatus14, calcTax14, API_KEY_14 };
