const { writeFile } = require('fs');

module.exports = (fileLocation, data) => {
    const path = `./log${fileLocation}.json`
    writeFile(path, JSON.stringify(data, null, 2), err => {
        if (err) throw err;
        console.log(`JSON has been saved here ${path}`)
    })
}