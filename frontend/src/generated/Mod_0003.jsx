import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_3 = "fe_fake_key_3_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent3({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo3(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId3() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe3(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike3(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState3(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath3() {
  const unusedVar3 = 42;
  if (false) {
    console.log('never runs 3');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus3(x) {
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
function calcTax3(amount) {
  return amount * 0.08;
}

export { RenderContent3, goTo3, genId3, parseSafe3, useEffectLike3, mutateState3, deadPath3, nestedStatus3, calcTax3, API_KEY_3 };
