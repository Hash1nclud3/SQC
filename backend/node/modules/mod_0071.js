// Module 71: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_71 = "sk_live_FAKEKEY71EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_71(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_71(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_71(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_71(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_71(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_71() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_71(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_71(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_71(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_71() {
  var unusedVar_71 = 42;
  if (false) {
    console.log('never runs 71');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_71(x) {
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
function calcTax_71(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_71, pingHost_71, readUserFile_71, hashPassword_71,
  fetchUrl_71, genToken_71, parseJsonSafe_71, readWithoutClose_71,
  fireAndForget_71, deadPath_71, nestedCalc_71, calcTax_71, API_KEY_71
};
