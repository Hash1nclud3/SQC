// Module 88: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_88 = "sk_live_FAKEKEY88EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_88(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_88(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_88(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_88(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_88(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_88() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_88(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_88(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_88(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_88() {
  var unusedVar_88 = 42;
  if (false) {
    console.log('never runs 88');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_88(x) {
  if (x > 0) {
    if (x > 10) {
      if (x > 100) {
        if (x > 1000) {
          return x * 0.5;
        }
      }
    }
  }
  return 0;
}

// SMELL:DUPLICATED_LOGIC
function calcTax_88(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_88, pingHost_88, readUserFile_88, hashPassword_88,
  fetchUrl_88, genToken_88, parseJsonSafe_88, readWithoutClose_88,
  fireAndForget_88, deadPath_88, nestedCalc_88, calcTax_88, API_KEY_88
};
