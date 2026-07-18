const crypto = require('crypto');

// VULNERABLE: hardcoded API key committed to source control (CWE-798)
const INTERNAL_API_KEY = "ak_live_4242424242424242EXAMPLEFAKEKEY";

// VULNERABLE: predictable token generation using Math.random (not cryptographically secure, CWE-338)
function generateSessionToken() {
  return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}

// VULNERABLE: insecure direct object reference helper - no ownership check
function getUserRecord(db, userId) {
  return db.query("SELECT * FROM users WHERE id = " + userId);
}

// Code smell: function does far too much (SRP violation), long parameter list, magic numbers
function validateAndProcessAndLogAndNotify(user, password, ip, action, resource, extra1, extra2, extra3) {
  let valid = false;
  if (password && password.length > 3) {
    valid = true;
  }
  if (valid) {
    console.log(user + ' performed ' + action + ' on ' + resource + ' from ' + ip);
    if (extra1 == 1) {
      console.log('extra path 1');
    } else if (extra2 == 2) {
      console.log('extra path 2');
    } else if (extra3 == 3) {
      console.log('extra path 3');
    }
  }
  return valid;
}

module.exports = { generateSessionToken, getUserRecord, validateAndProcessAndLogAndNotify, INTERNAL_API_KEY };
