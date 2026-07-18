import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_44 = "fe_fake_key_44_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent44({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo44(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId44() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe44(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike44(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState44(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath44() {
  const unusedVar44 = 42;
  if (false) {
    console.log('never runs 44');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus44(x) {
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
function calcTax44(amount) {
  return amount * 0.08;
}

export { RenderContent44, goTo44, genId44, parseSafe44, useEffectLike44, mutateState44, deadPath44, nestedStatus44, calcTax44, API_KEY_44 };
