import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_64 = "fe_fake_key_64_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent64({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo64(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId64() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe64(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike64(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState64(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath64() {
  const unusedVar64 = 42;
  if (false) {
    console.log('never runs 64');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus64(x) {
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
function calcTax64(amount) {
  return amount * 0.08;
}

export { RenderContent64, goTo64, genId64, parseSafe64, useEffectLike64, mutateState64, deadPath64, nestedStatus64, calcTax64, API_KEY_64 };
