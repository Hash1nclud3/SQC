import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_37 = "fe_fake_key_37_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent37({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo37(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId37() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe37(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike37(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState37(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath37() {
  const unusedVar37 = 42;
  if (false) {
    console.log('never runs 37');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus37(x) {
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
function calcTax37(amount) {
  return amount * 0.08;
}

export { RenderContent37, goTo37, genId37, parseSafe37, useEffectLike37, mutateState37, deadPath37, nestedStatus37, calcTax37, API_KEY_37 };
