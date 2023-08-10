const path = require('path');
const fs = require('fs');

const BASEDIR = path.join(__dirname, '..');
const videoPath = path.join(BASEDIR, 'videos');
const availableFormats = [
  'mp4', 'webm', 'mkv', 'avi'
];


function generateFileName(videoName) {
  return Date.now() + '_' + videoName;
}

function saveFile(fileName, binaryData) {
  let fileExtension = fileName.split('.').slice(-1)[0]
  
  if (!availableFormats.includes(fileExtension)) {
    return false;
  }

  fs.writeFile(path.join(videoPath, generateFileName(fileName)), binaryData, handler);

  function handler(err) {
    if (err) {
      throw Error('Error while uploading file');
    } else {
      return true;
    }
  }
}

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
