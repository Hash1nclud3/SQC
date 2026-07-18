import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_38 = "fe_fake_key_38_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent38({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo38(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId38() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe38(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike38(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState38(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath38() {
  const unusedVar38 = 42;
  if (false) {
    console.log('never runs 38');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus38(x) {
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
function calcTax38(amount) {
  return amount * 0.08;
}

export { RenderContent38, goTo38, genId38, parseSafe38, useEffectLike38, mutateState38, deadPath38, nestedStatus38, calcTax38, API_KEY_38 };
