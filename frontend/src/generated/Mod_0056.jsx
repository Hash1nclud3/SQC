import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_56 = "fe_fake_key_56_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent56({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo56(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId56() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe56(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike56(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState56(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath56() {
  const unusedVar56 = 42;
  if (false) {
    console.log('never runs 56');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus56(x) {
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
function calcTax56(amount) {
  return amount * 0.08;
}

export { RenderContent56, goTo56, genId56, parseSafe56, useEffectLike56, mutateState56, deadPath56, nestedStatus56, calcTax56, API_KEY_56 };
