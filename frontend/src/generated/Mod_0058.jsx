import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_58 = "fe_fake_key_58_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent58({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo58(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId58() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe58(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike58(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState58(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath58() {
  const unusedVar58 = 42;
  if (false) {
    console.log('never runs 58');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus58(x) {
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
function calcTax58(amount) {
  return amount * 0.08;
}

export { RenderContent58, goTo58, genId58, parseSafe58, useEffectLike58, mutateState58, deadPath58, nestedStatus58, calcTax58, API_KEY_58 };
