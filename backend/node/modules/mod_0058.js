// Module 58: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_58 = "sk_live_FAKEKEY58EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_58(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_58(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_58(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_58(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_58(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_58() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_58(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_58(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_58(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_58() {
  var unusedVar_58 = 42;
  if (false) {
    console.log('never runs 58');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_58(x) {
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
function calcTax_58(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_58, pingHost_58, readUserFile_58, hashPassword_58,
  fetchUrl_58, genToken_58, parseJsonSafe_58, readWithoutClose_58,
  fireAndForget_58, deadPath_58, nestedCalc_58, calcTax_58, API_KEY_58
};
