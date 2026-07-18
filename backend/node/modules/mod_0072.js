// Module 72: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_72 = "sk_live_FAKEKEY72EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_72(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_72(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_72(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_72(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_72(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_72() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_72(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_72(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_72(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_72() {
  var unusedVar_72 = 42;
  if (false) {
    console.log('never runs 72');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_72(x) {
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
function calcTax_72(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_72, pingHost_72, readUserFile_72, hashPassword_72,
  fetchUrl_72, genToken_72, parseJsonSafe_72, readWithoutClose_72,
  fireAndForget_72, deadPath_72, nestedCalc_72, calcTax_72, API_KEY_72
};
