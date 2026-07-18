import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_49 = "fe_fake_key_49_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent49({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo49(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId49() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe49(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike49(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState49(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath49() {
  const unusedVar49 = 42;
  if (false) {
    console.log('never runs 49');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus49(x) {
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
function calcTax49(amount) {
  return amount * 0.08;
}

export { RenderContent49, goTo49, genId49, parseSafe49, useEffectLike49, mutateState49, deadPath49, nestedStatus49, calcTax49, API_KEY_49 };
