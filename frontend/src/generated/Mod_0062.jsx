import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_62 = "fe_fake_key_62_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent62({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo62(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId62() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe62(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike62(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState62(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath62() {
  const unusedVar62 = 42;
  if (false) {
    console.log('never runs 62');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus62(x) {
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
function calcTax62(amount) {
  return amount * 0.08;
}

export { RenderContent62, goTo62, genId62, parseSafe62, useEffectLike62, mutateState62, deadPath62, nestedStatus62, calcTax62, API_KEY_62 };
