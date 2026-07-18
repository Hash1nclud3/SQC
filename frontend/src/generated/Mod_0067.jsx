import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_67 = "fe_fake_key_67_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent67({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo67(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId67() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe67(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike67(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState67(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath67() {
  const unusedVar67 = 42;
  if (false) {
    console.log('never runs 67');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus67(x) {
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
function calcTax67(amount) {
  return amount * 0.08;
}

export { RenderContent67, goTo67, genId67, parseSafe67, useEffectLike67, mutateState67, deadPath67, nestedStatus67, calcTax67, API_KEY_67 };
