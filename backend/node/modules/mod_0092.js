// Module 92: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_92 = "sk_live_FAKEKEY92EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_92(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_92(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_92(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_92(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_92(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_92() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_92(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_92(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_92(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_92() {
  var unusedVar_92 = 42;
  if (false) {
    console.log('never runs 92');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_92(x) {
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
function calcTax_92(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_92, pingHost_92, readUserFile_92, hashPassword_92,
  fetchUrl_92, genToken_92, parseJsonSafe_92, readWithoutClose_92,
  fireAndForget_92, deadPath_92, nestedCalc_92, calcTax_92, API_KEY_92
};
