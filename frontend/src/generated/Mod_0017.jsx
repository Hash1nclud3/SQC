import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_17 = "fe_fake_key_17_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent17({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo17(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId17() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe17(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike17(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState17(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath17() {
  const unusedVar17 = 42;
  if (false) {
    console.log('never runs 17');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus17(x) {
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
function calcTax17(amount) {
  return amount * 0.08;
}

export { RenderContent17, goTo17, genId17, parseSafe17, useEffectLike17, mutateState17, deadPath17, nestedStatus17, calcTax17, API_KEY_17 };
