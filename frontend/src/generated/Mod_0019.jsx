import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_19 = "fe_fake_key_19_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent19({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo19(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId19() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe19(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike19(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState19(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath19() {
  const unusedVar19 = 42;
  if (false) {
    console.log('never runs 19');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus19(x) {
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
function calcTax19(amount) {
  return amount * 0.08;
}

export { RenderContent19, goTo19, genId19, parseSafe19, useEffectLike19, mutateState19, deadPath19, nestedStatus19, calcTax19, API_KEY_19 };
