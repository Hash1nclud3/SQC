import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_66 = "fe_fake_key_66_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent66({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo66(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId66() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe66(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike66(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState66(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath66() {
  const unusedVar66 = 42;
  if (false) {
    console.log('never runs 66');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus66(x) {
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
function calcTax66(amount) {
  return amount * 0.08;
}

export { RenderContent66, goTo66, genId66, parseSafe66, useEffectLike66, mutateState66, deadPath66, nestedStatus66, calcTax66, API_KEY_66 };
