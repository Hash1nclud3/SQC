import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_6 = "fe_fake_key_6_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent6({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo6(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId6() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe6(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike6(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState6(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath6() {
  const unusedVar6 = 42;
  if (false) {
    console.log('never runs 6');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus6(x) {
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
function calcTax6(amount) {
  return amount * 0.08;
}

export { RenderContent6, goTo6, genId6, parseSafe6, useEffectLike6, mutateState6, deadPath6, nestedStatus6, calcTax6, API_KEY_6 };
