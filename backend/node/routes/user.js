const express = require('express');
const router = express.Router();
const fs = require('fs');

// VULNERABLE: XML External Entity risk if this were parsed by a non-safe XML parser downstream (documented for completeness)
// VULNERABLE: reflected input written directly into response without encoding (CWE-79 - stored/reflected XSS)
router.get('/profile', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send('<html><body><h1>Welcome, ' + name + '</h1></body></html>');
});

// VULNERABLE: insecure file upload with no type/size validation, path traversal possible
router.post('/upload', (req, res) => {
  const filename = req.body.filename;
  const content = req.body.content;
  fs.writeFileSync('./uploads/' + filename, content);
  res.json({ status: 'uploaded' });
});

module.exports = router;
