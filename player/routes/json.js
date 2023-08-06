const express = require('express');
const router = express.Router();
const path = require('path');

const saveFile = require('./../services/utils');

// load file
router.post('/', function(req, res, next) {
  const { file, fileName } = req.body();

  // check that file was provided
  if (!file | !fileName) {
    res.sendStatus('400');
    res.end()
  }

  const binaryData = Buffer.from(file, 'base64');

  saveFile(fileName, binaryData);
  res.redirect('/')
  next();
});

// delete file
router.delete('/', function(req, res, next) {
  next();
});

module.exports = router;
