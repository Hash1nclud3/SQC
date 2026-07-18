import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_30 = "fe_fake_key_30_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent30({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo30(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId30() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe30(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike30(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState30(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath30() {
  const unusedVar30 = 42;
  if (false) {
    console.log('never runs 30');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus30(x) {
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
function calcTax30(amount) {
  return amount * 0.08;
}

export { RenderContent30, goTo30, genId30, parseSafe30, useEffectLike30, mutateState30, deadPath30, nestedStatus30, calcTax30, API_KEY_30 };
