import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_1 = "fe_fake_key_1_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent1({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo1(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId1() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe1(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike1(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState1(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath1() {
  const unusedVar1 = 42;
  if (false) {
    console.log('never runs 1');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus1(x) {
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
function calcTax1(amount) {
  return amount * 0.08;
}

export { RenderContent1, goTo1, genId1, parseSafe1, useEffectLike1, mutateState1, deadPath1, nestedStatus1, calcTax1, API_KEY_1 };
