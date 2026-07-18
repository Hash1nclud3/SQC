// Module 53: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_53 = "sk_live_FAKEKEY53EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_53(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_53(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_53(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_53(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_53(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_53() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_53(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_53(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_53(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_53() {
  var unusedVar_53 = 42;
  if (false) {
    console.log('never runs 53');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_53(x) {
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
function calcTax_53(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_53, pingHost_53, readUserFile_53, hashPassword_53,
  fetchUrl_53, genToken_53, parseJsonSafe_53, readWithoutClose_53,
  fireAndForget_53, deadPath_53, nestedCalc_53, calcTax_53, API_KEY_53
};
