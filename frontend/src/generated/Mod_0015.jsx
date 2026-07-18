import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_15 = "fe_fake_key_15_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent15({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo15(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId15() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe15(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike15(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState15(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath15() {
  const unusedVar15 = 42;
  if (false) {
    console.log('never runs 15');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus15(x) {
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
function calcTax15(amount) {
  return amount * 0.08;
}

export { RenderContent15, goTo15, genId15, parseSafe15, useEffectLike15, mutateState15, deadPath15, nestedStatus15, calcTax15, API_KEY_15 };
