import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_18 = "fe_fake_key_18_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent18({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo18(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId18() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe18(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike18(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState18(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath18() {
  const unusedVar18 = 42;
  if (false) {
    console.log('never runs 18');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus18(x) {
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
function calcTax18(amount) {
  return amount * 0.08;
}

export { RenderContent18, goTo18, genId18, parseSafe18, useEffectLike18, mutateState18, deadPath18, nestedStatus18, calcTax18, API_KEY_18 };
