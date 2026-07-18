import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_51 = "fe_fake_key_51_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent51({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo51(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId51() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe51(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike51(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState51(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath51() {
  const unusedVar51 = 42;
  if (false) {
    console.log('never runs 51');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus51(x) {
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
function calcTax51(amount) {
  return amount * 0.08;
}

export { RenderContent51, goTo51, genId51, parseSafe51, useEffectLike51, mutateState51, deadPath51, nestedStatus51, calcTax51, API_KEY_51 };
