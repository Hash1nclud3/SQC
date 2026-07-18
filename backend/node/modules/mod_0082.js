// Module 82: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_82 = "sk_live_FAKEKEY82EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_82(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_82(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_82(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_82(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_82(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_82() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_82(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_82(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_82(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_82() {
  var unusedVar_82 = 42;
  if (false) {
    console.log('never runs 82');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_82(x) {
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
function calcTax_82(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_82, pingHost_82, readUserFile_82, hashPassword_82,
  fetchUrl_82, genToken_82, parseJsonSafe_82, readWithoutClose_82,
  fireAndForget_82, deadPath_82, nestedCalc_82, calcTax_82, API_KEY_82
};
