// Module 107: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_107 = "sk_live_FAKEKEY107EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_107(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_107(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_107(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_107(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_107(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_107() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_107(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_107(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_107(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_107() {
  var unusedVar_107 = 42;
  if (false) {
    console.log('never runs 107');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_107(x) {
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
function calcTax_107(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_107, pingHost_107, readUserFile_107, hashPassword_107,
  fetchUrl_107, genToken_107, parseJsonSafe_107, readWithoutClose_107,
  fireAndForget_107, deadPath_107, nestedCalc_107, calcTax_107, API_KEY_107
};
