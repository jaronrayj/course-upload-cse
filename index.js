const { readdirSync } = require("fs");
const creditSetup = require("./js/creditSetup");
const dateStart = require("./js/dateStart");
const inqPrompt = require("./js/inqPrompt");
const groupTypes = require("./models/groupTypes");

////////////////////////////////////////////
// Unique variables here
const csvLocation = readdirSync('./data');
const startDates = {
    spring: '04-03',
    summer: '07-04',
    fall: '10-04',
    winter: '01-01',
}

const cse = 'Jaron Johnson'
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
            subjectCode: await groupTypes("subjectcodes", course.subjectCode, 'id'),
            number: course.number,
            title: course.title,
            credits: await creditSetup(course.creditType, course.creditsMin, course.creditsMax),
            status: "draft",
            dateStart: await dateStart(course.dateStart, startDates),
            // groupFilter1: {{kualiURL}}/api/v1/groups/?q=csv.department[0].id|| "",
            // groupFilter2: {{kualiURL}}/api/v1/groups/?q=csv.department[0].parentId|| "",
            // campus: await campusSetup(course.campus),
            notes: `Submitted by ${cse}`
        }
        postData.push(courseObj);
    });
    if (DEBUG) {
        console.log("🚀 ~ file: index.js ~ line 45 ~ main ~ postData", postData)
    }

}

main();