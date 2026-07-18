import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_52 = "fe_fake_key_52_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent52({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo52(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId52() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe52(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike52(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState52(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath52() {
  const unusedVar52 = 42;
  if (false) {
    console.log('never runs 52');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus52(x) {
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
function calcTax52(amount) {
  return amount * 0.08;
}

export { RenderContent52, goTo52, genId52, parseSafe52, useEffectLike52, mutateState52, deadPath52, nestedStatus52, calcTax52, API_KEY_52 };
