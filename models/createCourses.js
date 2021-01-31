const { restoreDefaultPrompts } = require('inquirer');
const instance = require('../config');

module.exports = (postData) => {
    postData.forEach(courseObj => {
        let count = 1;
        instance.post(`api/cm/courses`, courseObj)
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                throw err
            })
        if (postData.length === count) {
            resolve();
        } else {
            count++
        }
    })
};


// Test run data
// postdata({
//     "subjectCode": "6012dd725a84800027c335e0",
//     "number": "555",
//     "title": "Test Course",
//     "credits": {
//         "chosen": "fixed",
//         "credits": {
//             "min": "3",
//             "max": "3"
//         },
//         "value": "3"
//     },
//     "status": "draft",
//     "dateStart": "2022-01-01",
//     "groupFilter1": "6012ea308fee97008efb8b70",
//     "groupFilter2": "6012e9548fee97008efb8b66",
//     "campus": {
//         "6012ddf7c0b5c3002674537d": true,
//         "6012ddf35a84800027c335e3": true
//     },
//     "notes": "Submitted by Jaron Johnson"
// })