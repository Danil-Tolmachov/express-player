const path = require('path');
const fs = require('fs');

const BASEDIR = path.join(__dirname, '..');
const videoPath = path.join(BASEDIR, 'videos');
const availableFormats = [
  'mp4', 'webm', 'mkv', 'avi'
];

/*
* Create unique name
* @param {string} videoName
*/
function generateFileName(videoName) {
  return Date.now() + '_' + videoName;
}

/*
* Save file to the storage
* @param {string} videoName
*/
function saveFile(fileName, binaryData) {
  let fileExtension = fileName.split('.').slice(-1)[0];
  
  // check if file extension in allowed list
  if (!availableFormats.includes(fileExtension)) {
    return false;
  }

  // save file
  fs.writeFile(path.join(videoPath, generateFileName(fileName)), binaryData, handler);

  // error handler
  function handler(err) {
    if (err) {
      throw Error('Error while uploading file');
    } else {
      return true;
    }
  }
}

/*
* Get object with all videos data
* Example: 
* {
*  "1": {
*       "name": "example.mp4",
*       "src": "\\videos\\141241241235_example.mp4"
*   },
*   "2": {
*       "name": "example2.mp4",
*       "src": "\\videos\\1691429425261_example2.mp4"
*   },
* }
*
* @returns {object} - video objects
*/
function getVideosSrc() {
  let increment = 0;
  let files = fs.readdirSync(videoPath);
  let result = {};

  files.forEach(file => {
    result[++increment] = {
      name: file.split('_').slice(1).join('_'),
      src: path.join(videoPath.replace(BASEDIR, ''), file),
    };
  });

  return result;
}


module.exports = {
    generateFileName, 
    saveFile, 
    getVideosSrc,
  };
