import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_70 = "fe_fake_key_70_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent70({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo70(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId70() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe70(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike70(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState70(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath70() {
  const unusedVar70 = 42;
  if (false) {
    console.log('never runs 70');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus70(x) {
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
function calcTax70(amount) {
  return amount * 0.08;
}

export { RenderContent70, goTo70, genId70, parseSafe70, useEffectLike70, mutateState70, deadPath70, nestedStatus70, calcTax70, API_KEY_70 };
