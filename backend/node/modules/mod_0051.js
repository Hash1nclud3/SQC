// Module 51: auto-generated for scanner volume/coverage testing
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

// SECURITY:HARDCODED_SECRET
const API_KEY_51 = "sk_live_FAKEKEY51EXAMPLE00000000000";

// SECURITY:SQLI
function searchUser_51(db, name) {
  const query = "SELECT * FROM users WHERE name = '" + name + "'";
  return db.query(query);
}

// SECURITY:CMDI
function pingHost_51(host) {
  return exec('ping -c 4 ' + host, () => {});
}

// SECURITY:PATH_TRAVERSAL
function readUserFile_51(name) {
  return fs.readFileSync('./uploads/' + name, 'utf8');
}

// SECURITY:WEAK_CRYPTO
function hashPassword_51(pw) {
  return crypto.createHash('md5').update(pw).digest('hex');
}

// SECURITY:SSRF
function fetchUrl_51(url) {
  return axios.get(url);
}

// SECURITY:INSECURE_RANDOM
function genToken_51() {
  return Math.random().toString(36) + Math.random().toString(36);
}

// BUG:EMPTY_CATCH
function parseJsonSafe_51(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
  }
}

// BUG:RESOURCE_LEAK
function readWithoutClose_51(path) {
  const fd = fs.openSync(path, 'r');
  const buf = Buffer.alloc(100);
  fs.readSync(fd, buf, 0, 100, 0);
  return buf;
}

// BUG:UNHANDLED_PROMISE
function fireAndForget_51(url) {
  axios.get(url).then(res => res.data);
}

// SMELL:DEAD_CODE
// SMELL:UNUSED_VAR
function deadPath_51() {
  var unusedVar_51 = 42;
  if (false) {
    console.log('never runs 51');
  }
  return true;
}

// SMELL:DEEP_NESTING
function nestedCalc_51(x) {
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
function calcTax_51(amount) {
  return amount * 0.08;
}

module.exports = {
  searchUser_51, pingHost_51, readUserFile_51, hashPassword_51,
  fetchUrl_51, genToken_51, parseJsonSafe_51, readWithoutClose_51,
  fireAndForget_51, deadPath_51, nestedCalc_51, calcTax_51, API_KEY_51
};
