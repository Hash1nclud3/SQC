import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_60 = "fe_fake_key_60_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent60({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo60(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId60() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe60(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike60(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState60(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath60() {
  const unusedVar60 = 42;
  if (false) {
    console.log('never runs 60');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus60(x) {
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
function calcTax60(amount) {
  return amount * 0.08;
}

export { RenderContent60, goTo60, genId60, parseSafe60, useEffectLike60, mutateState60, deadPath60, nestedStatus60, calcTax60, API_KEY_60 };
