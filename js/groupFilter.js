const getGroups = require("../models/getGroups")

module.exports = async(department, obj) => {
    return new Promise(async(resolve, reject) => {
        const groupData = await getGroups(department)
        if (groupData) {
            resolve(groupData[obj]);
        } else {
            resolve("")
        }
    })
}