import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_42 = "fe_fake_key_42_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent42({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo42(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId42() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe42(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike42(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState42(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath42() {
  const unusedVar42 = 42;
  if (false) {
    console.log('never runs 42');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus42(x) {
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
function calcTax42(amount) {
  return amount * 0.08;
}

export { RenderContent42, goTo42, genId42, parseSafe42, useEffectLike42, mutateState42, deadPath42, nestedStatus42, calcTax42, API_KEY_42 };
