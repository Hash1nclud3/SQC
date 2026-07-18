import React from 'react';

// SECURITY:HARDCODED_SECRET
const API_KEY_53 = "fe_fake_key_53_EXAMPLE0000000000";

// SECURITY:XSS
function RenderContent53({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// SECURITY:OPEN_REDIRECT
function goTo53(url) {
  window.location.href = url;
}

// SECURITY:INSECURE_RANDOM
function genId53() {
  return Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseSafe53(str) {
  try {
    return JSON.parse(str);
  } catch (e) {}
}

// BUG:MISSING_DEPENDENCY_ARRAY
function useEffectLike53(effectFn) {
  effectFn();
}

// BUG:STATE_MUTATION
function mutateState53(state) {
  state.value = state.value + 1;
  return state;
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath53() {
  const unusedVar53 = 42;
  if (false) {
    console.log('never runs 53');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedStatus53(x) {
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
function calcTax53(amount) {
  return amount * 0.08;
}

export { RenderContent53, goTo53, genId53, parseSafe53, useEffectLike53, mutateState53, deadPath53, nestedStatus53, calcTax53, API_KEY_53 };
