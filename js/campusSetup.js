const groupTypes = require("../models/getGroupTypes")

module.exports = (campuses) => {
    return new Promise((resolve, reject) => {
        const campusReturn = {};
        let count = 1;
        // const campusStorage = {};
        // todo find a way to not run an api for every one, but store them somewhere to refer to again later
        const campusSplit = campuses.split(',');
        campusSplit.forEach(async campus => {
            const campusId = await groupTypes('campuses', campus, 'id');
            campusReturn[campusId] = true;
            if (count === campusSplit.length) {
                resolve(campusReturn);
            } else {
                count++;
            }
        });
    })
}