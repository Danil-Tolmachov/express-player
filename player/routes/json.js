const express = require('express');
const router = express.Router();
const path = require('path');

const saveFile = require('./../services/utils')['saveFile'];

// load file
router.post('/', function(req, res, next) {
  
  // check that file was provided
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  if ( Object.keys(req.files).length === 0) {
    return res.status(400).send('More than one file were uploaded.');
  }

  let file = req.files.file;
  saveFile(file.name, file.data);
  next();
});

// delete file
router.delete('/', function(req, res, next) { 
  next();
});

module.exports = router;
