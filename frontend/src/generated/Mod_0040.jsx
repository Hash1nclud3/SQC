import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_40 = "fe_fake_key_40_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent40({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo40(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId40() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe40(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike40(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState40(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath40() {
  const unusedVar40 = 42;
  if (false) {
    console.log('never runs 40');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus40(x) {
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
function calcTax40(amount) {
  return amount * 0.08;
}

export { RenderContent40, goTo40, genId40, parseSafe40, useEffectLike40, mutateState40, deadPath40, nestedStatus40, calcTax40, API_KEY_40 };
