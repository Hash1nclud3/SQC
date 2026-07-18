import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_24 = "fe_fake_key_24_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent24({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo24(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId24() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe24(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike24(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState24(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath24() {
  const unusedVar24 = 42;
  if (false) {
    console.log('never runs 24');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus24(x) {
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
function calcTax24(amount) {
  return amount * 0.08;
}

export { RenderContent24, goTo24, genId24, parseSafe24, useEffectLike24, mutateState24, deadPath24, nestedStatus24, calcTax24, API_KEY_24 };
