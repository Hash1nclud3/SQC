// Module 104: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_104 = "sk_live_FAKEKEY104EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_104(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_104(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_104(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_104(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_104(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_104() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_104(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_104(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_104(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_104() {
  var unusedVar_104 = 42;
  if (false) {
    console.log('never runs 104');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_104(x) {
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
function calcTax_104(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_104, pingHost_104, readUserFile_104, hashPassword_104,
  fetchUrl_104, genToken_104, parseJsonSafe_104, readWithoutClose_104,
  fireAndForget_104, deadPath_104, nestedCalc_104, calcTax_104, API_KEY_104
};
