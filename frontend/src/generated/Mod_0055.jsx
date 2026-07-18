import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_55 = "fe_fake_key_55_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent55({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo55(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId55() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe55(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike55(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState55(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath55() {
  const unusedVar55 = 42;
  if (false) {
    console.log('never runs 55');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus55(x) {
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
function calcTax55(amount) {
  return amount * 0.08;
}

export { RenderContent55, goTo55, genId55, parseSafe55, useEffectLike55, mutateState55, deadPath55, nestedStatus55, calcTax55, API_KEY_55 };
