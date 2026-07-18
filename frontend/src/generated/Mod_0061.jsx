import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_61 = "fe_fake_key_61_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent61({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo61(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId61() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe61(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike61(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState61(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath61() {
  const unusedVar61 = 42;
  if (false) {
    console.log('never runs 61');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus61(x) {
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
function calcTax61(amount) {
  return amount * 0.08;
}

export { RenderContent61, goTo61, genId61, parseSafe61, useEffectLike61, mutateState61, deadPath61, nestedStatus61, calcTax61, API_KEY_61 };
