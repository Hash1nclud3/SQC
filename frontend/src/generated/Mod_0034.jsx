import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_34 = "fe_fake_key_34_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent34({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo34(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId34() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe34(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike34(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState34(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath34() {
  const unusedVar34 = 42;
  if (false) {
    console.log('never runs 34');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus34(x) {
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
function calcTax34(amount) {
  return amount * 0.08;
}

export { RenderContent34, goTo34, genId34, parseSafe34, useEffectLike34, mutateState34, deadPath34, nestedStatus34, calcTax34, API_KEY_34 };
