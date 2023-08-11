const express = require('express');
const router = express.Router();
const path = require('path');

const saveFile = require('../services/utils')['saveFile'];
const getVideosSrc = require('../services/utils')['getVideosSrc'];

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

  // check save operation status
  if (!saveFile(file.name, file.data)) {
    return res.status(403).send('Bad file extension');
  }

  next();
});

// delete file
router.delete('/', function(req, res, next) { 
  next();
});

// get loaded videos
router.get('/video', function(req, res, next) {
  res.json(getVideosSrc());
  next();
})

module.exports = router;
