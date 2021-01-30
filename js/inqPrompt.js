const csv2json = require("../utils/csv2json");
const inquirer = require('inquirer');

module.exports = (csvLocation) => {
    return new Promise((resolve, reject) => {
        inquirer.prompt({
                type: "list",
                name: "csv",
                choices: csvLocation,
                message: "Which file do you want to run?"
            })
            .then(async inqRes => {
                resolve(csv2json(`./data/${inqRes.csv}`));
            })
    })
}