import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_65 = "fe_fake_key_65_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent65({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo65(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId65() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe65(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike65(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState65(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath65() {
  const unusedVar65 = 42;
  if (false) {
    console.log('never runs 65');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus65(x) {
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
function calcTax65(amount) {
  return amount * 0.08;
}

export { RenderContent65, goTo65, genId65, parseSafe65, useEffectLike65, mutateState65, deadPath65, nestedStatus65, calcTax65, API_KEY_65 };
