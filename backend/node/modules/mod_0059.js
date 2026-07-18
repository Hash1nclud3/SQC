// Module 59: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_59 = "sk_live_FAKEKEY59EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_59(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_59(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_59(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_59(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_59(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_59() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_59(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_59(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_59(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_59() {
  var unusedVar_59 = 42;
  if (false) {
    console.log('never runs 59');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_59(x) {
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
function calcTax_59(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_59, pingHost_59, readUserFile_59, hashPassword_59,
  fetchUrl_59, genToken_59, parseJsonSafe_59, readWithoutClose_59,
  fireAndForget_59, deadPath_59, nestedCalc_59, calcTax_59, API_KEY_59
};
