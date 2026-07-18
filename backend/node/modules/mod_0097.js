// Module 97: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_97 = "sk_live_FAKEKEY97EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_97(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_97(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_97(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_97(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_97(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_97() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_97(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_97(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_97(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_97() {
  var unusedVar_97 = 42;
  if (false) {
    console.log('never runs 97');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_97(x) {
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
function calcTax_97(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_97, pingHost_97, readUserFile_97, hashPassword_97,
  fetchUrl_97, genToken_97, parseJsonSafe_97, readWithoutClose_97,
  fireAndForget_97, deadPath_97, nestedCalc_97, calcTax_97, API_KEY_97
};
