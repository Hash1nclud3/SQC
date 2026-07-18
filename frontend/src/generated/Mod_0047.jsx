import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_47 = "fe_fake_key_47_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent47({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo47(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId47() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe47(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike47(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState47(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath47() {
  const unusedVar47 = 42;
  if (false) {
    console.log('never runs 47');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus47(x) {
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
function calcTax47(amount) {
  return amount * 0.08;
}

export { RenderContent47, goTo47, genId47, parseSafe47, useEffectLike47, mutateState47, deadPath47, nestedStatus47, calcTax47, API_KEY_47 };
