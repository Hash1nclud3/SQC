// Module 73: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_73 = "sk_live_FAKEKEY73EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_73(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_73(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_73(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_73(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_73(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_73() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_73(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_73(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_73(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_73() {
  var unusedVar_73 = 42;
  if (false) {
    console.log('never runs 73');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_73(x) {
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
function calcTax_73(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_73, pingHost_73, readUserFile_73, hashPassword_73,
  fetchUrl_73, genToken_73, parseJsonSafe_73, readWithoutClose_73,
  fireAndForget_73, deadPath_73, nestedCalc_73, calcTax_73, API_KEY_73
};
