// Module 75: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_75 = "sk_live_FAKEKEY75EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_75(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_75(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_75(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_75(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_75(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_75() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_75(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_75(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_75(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_75() {
  var unusedVar_75 = 42;
  if (false) {
    console.log('never runs 75');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_75(x) {
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
function calcTax_75(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_75, pingHost_75, readUserFile_75, hashPassword_75,
  fetchUrl_75, genToken_75, parseJsonSafe_75, readWithoutClose_75,
  fireAndForget_75, deadPath_75, nestedCalc_75, calcTax_75, API_KEY_75
};
