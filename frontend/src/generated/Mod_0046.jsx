import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_46 = "fe_fake_key_46_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent46({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo46(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId46() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe46(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike46(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState46(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath46() {
  const unusedVar46 = 42;
  if (false) {
    console.log('never runs 46');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus46(x) {
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
function calcTax46(amount) {
  return amount * 0.08;
}

export { RenderContent46, goTo46, genId46, parseSafe46, useEffectLike46, mutateState46, deadPath46, nestedStatus46, calcTax46, API_KEY_46 };
