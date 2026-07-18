import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_59 = "fe_fake_key_59_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent59({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo59(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId59() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe59(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike59(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState59(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath59() {
  const unusedVar59 = 42;
  if (false) {
    console.log('never runs 59');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus59(x) {
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
function calcTax59(amount) {
  return amount * 0.08;
}

export { RenderContent59, goTo59, genId59, parseSafe59, useEffectLike59, mutateState59, deadPath59, nestedStatus59, calcTax59, API_KEY_59 };
