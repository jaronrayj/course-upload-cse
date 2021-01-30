const { readdirSync } = require("fs");
const inquirer = require('inquirer');
const csv2json = require("./utils/csv2json");

////////////////////////////////////////////
// Unique variables here
const domain = 'stucse';



const DEBUG = true;
////////////////////////////////////////////

const csvLocation = readdirSync('./data');
const main = async() => {
    // check to grab correct file
    const inqPrompt = () => {
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
    const jsonData = await inqPrompt();

    if (DEBUG) {
        console.log("🚀 ~ file: index.js ~ line 30 ~ main ~ jsonData", jsonData)
    }
}

main();