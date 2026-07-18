// Module 26: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_26 = "sk_live_FAKEKEY26EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_26(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_26(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_26(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_26(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_26(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_26() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_26(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_26(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_26(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_26() {
  var unusedVar_26 = 42;
  if (false) {
    console.log('never runs 26');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_26(x) {
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
function calcTax_26(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_26, pingHost_26, readUserFile_26, hashPassword_26,
  fetchUrl_26, genToken_26, parseJsonSafe_26, readWithoutClose_26,
  fireAndForget_26, deadPath_26, nestedCalc_26, calcTax_26, API_KEY_26
};
