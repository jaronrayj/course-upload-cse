const csv2json = require('csvtojson');
const logJSON = require('./logJSON');

module.exports = {
    csv2json: fileLocation => {
        csv2json()
            .fromFile(`${fileLocation}`)
            .then(fileJSON => {
                const splitFileLocation = fileLocation.split('.');
                logJSON(splitFileLocation[1], fileJSON);
                return fileJSON;
            })
    }
}