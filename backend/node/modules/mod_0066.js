// Module 66: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_66 = "sk_live_FAKEKEY66EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_66(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_66(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_66(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_66(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_66(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_66() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_66(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_66(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_66(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_66() {
  var unusedVar_66 = 42;
  if (false) {
    console.log('never runs 66');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_66(x) {
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
function calcTax_66(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_66, pingHost_66, readUserFile_66, hashPassword_66,
  fetchUrl_66, genToken_66, parseJsonSafe_66, readWithoutClose_66,
  fireAndForget_66, deadPath_66, nestedCalc_66, calcTax_66, API_KEY_66
};
