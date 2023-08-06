const { error } = require('console');
const fs = require('fs');

const videoPath = path(path.join(__dirname, 'videos'));


function generateFileName(videoName) {
    return Date.now() + '_' + videoName;
}

function saveFile(fileName, binaryData) {
    fs.writeFile(path.join(videoPath, generateFileName(fileName), binaryData, handler));

    function handler(err) {
        if (err) {
            throw Error('Error while uploading file');
        } else {
            return true;
        }
    }
}

module.exports = {generateFileName, saveFile};
