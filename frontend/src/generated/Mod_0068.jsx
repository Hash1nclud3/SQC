import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_68 = "fe_fake_key_68_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent68({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo68(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId68() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe68(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike68(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState68(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath68() {
  const unusedVar68 = 42;
  if (false) {
    console.log('never runs 68');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus68(x) {
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
function calcTax68(amount) {
  return amount * 0.08;
}

export { RenderContent68, goTo68, genId68, parseSafe68, useEffectLike68, mutateState68, deadPath68, nestedStatus68, calcTax68, API_KEY_68 };
