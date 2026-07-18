import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_28 = "fe_fake_key_28_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent28({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo28(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId28() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe28(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike28(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState28(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath28() {
  const unusedVar28 = 42;
  if (false) {
    console.log('never runs 28');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus28(x) {
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
function calcTax28(amount) {
  return amount * 0.08;
}

export { RenderContent28, goTo28, genId28, parseSafe28, useEffectLike28, mutateState28, deadPath28, nestedStatus28, calcTax28, API_KEY_28 };
