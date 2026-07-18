import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_8 = "fe_fake_key_8_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent8({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo8(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId8() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe8(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike8(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState8(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath8() {
  const unusedVar8 = 42;
  if (false) {
    console.log('never runs 8');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus8(x) {
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
function calcTax8(amount) {
  return amount * 0.08;
}

export { RenderContent8, goTo8, genId8, parseSafe8, useEffectLike8, mutateState8, deadPath8, nestedStatus8, calcTax8, API_KEY_8 };
