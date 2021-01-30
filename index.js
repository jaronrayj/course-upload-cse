const { readdirSync } = require("fs");
const inqPrompt = require("./js/inqPrompt");
const groupTypes = require("./models/groupTypes");
const axios = require('axios');

////////////////////////////////////////////
// Unique variables here
const domain = 'stucse';
const csvLocation = readdirSync('./data');
const startDates = {
    spring: '04-03',
    summer: '07-04',
    fall: '10-04',
    winter: '01-01',
}


const DEBUG = true;
////////////////////////////////////////////

const main = async() => {
    // check to grab correct file, returns and logs data as json
    const jsonData = await inqPrompt(csvLocation);
    if (DEBUG) {
        console.log("🚀 ~ file: index.js ~ line 16 ~ main ~ jsonData", jsonData)
    }
    const postData = [];
    jsonData.forEach(async course => {
        const courseObj = {
            subjectCode: await groupTypes("subjectcodes", course.subjectCode)[0][id],
            number: course.number,
            title: course.title,
            credits: await creditSetup(course.creditType, course.creditsMin, course.creditsMax),
            status: "draft",
            dateStart: await dateStart(course.dateStart, startDates),
            groupFilter1: {
                { kualiURL }
            }
            /api/v
            1 / groups / ? q = csv.department[0].id || ,
            groupFilter2 : {
                { kualiURL }
            }
            /api/v
            1 / groups / ? q = csv.department[0].parentId || ,
            campus : {
                6012 de03baa3f800262b5dbf: true,
                6012 ddfbe43ec1002784e1c5: true
            },
            notes: Submitted by { full name }
        }
        if (DEBUG) {
            console.log("🚀 ~ file: index.js ~ line 45 ~ main ~ courseObj", courseObj)
        }
    });

}

main();