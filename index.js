const { readdirSync } = require("fs");
const inquirer = require('inquirer');
const { csv2json } = require("./utils/csv2json");

////////////////////////////////////////////
// Unique variables here
const domain = 'stucse';



const DEBUG = true;
////////////////////////////////////////////

const csvLocation = readdirSync('./data');
const main = () => {
    inquirer.prompt({
            type: "list",
            name: "csv",
            choices: csvLocation,
            message: "Which file do you want to run?"
        })
        .then(async res => {
            console.log(`./data/${res.csv}`);
            const csvJson = await csv2json(`./data/${res.csv}`);
            if (DEBUG) {
                console.log("🚀 ~ file: index.js ~ line 24 ~ main ~ csvJson", csvJson);
            }
        })
}

main();