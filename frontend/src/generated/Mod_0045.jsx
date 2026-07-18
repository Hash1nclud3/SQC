import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_45 = "fe_fake_key_45_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent45({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo45(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId45() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe45(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike45(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState45(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath45() {
  const unusedVar45 = 42;
  if (false) {
    console.log('never runs 45');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus45(x) {
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
function calcTax45(amount) {
  return amount * 0.08;
}

export { RenderContent45, goTo45, genId45, parseSafe45, useEffectLike45, mutateState45, deadPath45, nestedStatus45, calcTax45, API_KEY_45 };
