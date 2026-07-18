// Module 98: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_98 = "sk_live_FAKEKEY98EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_98(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_98(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_98(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_98(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_98(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_98() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_98(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_98(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_98(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_98() {
  var unusedVar_98 = 42;
  if (false) {
    console.log('never runs 98');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_98(x) {
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
function calcTax_98(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_98, pingHost_98, readUserFile_98, hashPassword_98,
  fetchUrl_98, genToken_98, parseJsonSafe_98, readWithoutClose_98,
  fireAndForget_98, deadPath_98, nestedCalc_98, calcTax_98, API_KEY_98
};
