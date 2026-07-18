// Module 17: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_17 = "sk_live_FAKEKEY17EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_17(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_17(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_17(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_17(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_17(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_17() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_17(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_17(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_17(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_17() {
  var unusedVar_17 = 42;
  if (false) {
    console.log('never runs 17');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_17(x) {
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
function calcTax_17(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_17, pingHost_17, readUserFile_17, hashPassword_17,
  fetchUrl_17, genToken_17, parseJsonSafe_17, readWithoutClose_17,
  fireAndForget_17, deadPath_17, nestedCalc_17, calcTax_17, API_KEY_17
};
