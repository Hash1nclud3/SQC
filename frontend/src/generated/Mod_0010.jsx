import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_10 = "fe_fake_key_10_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent10({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo10(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId10() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe10(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike10(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState10(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath10() {
  const unusedVar10 = 42;
  if (false) {
    console.log('never runs 10');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus10(x) {
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
function calcTax10(amount) {
  return amount * 0.08;
}

export { RenderContent10, goTo10, genId10, parseSafe10, useEffectLike10, mutateState10, deadPath10, nestedStatus10, calcTax10, API_KEY_10 };
