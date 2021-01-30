const csv2json = require('csvtojson');
const logJSON = require('./logjson');

module.exports =
    fileLocation => {
        return new Promise((resolve, reject) => {
            csv2json()
                .fromFile(`${fileLocation}`)
                .then(fileJSON => {
                    const splitFileLocation = fileLocation.split('.');
                    logJSON(splitFileLocation[1], fileJSON);
                    resolve(fileJSON);
                })
        })
    }