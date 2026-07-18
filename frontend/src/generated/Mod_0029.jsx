import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_29 = "fe_fake_key_29_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent29({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo29(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId29() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe29(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike29(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState29(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath29() {
  const unusedVar29 = 42;
  if (false) {
    console.log('never runs 29');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus29(x) {
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
function calcTax29(amount) {
  return amount * 0.08;
}

export { RenderContent29, goTo29, genId29, parseSafe29, useEffectLike29, mutateState29, deadPath29, nestedStatus29, calcTax29, API_KEY_29 };
