const instance = require('../config');

module.exports = (department) => {
    return new Promise((resolve, reject) => {
        instance.get(`/api/v1/groups?q=${department}`)
            .then(res => {
                if (res) {
                    resolve(res.data[0]);
                } else {
                    resolve("");
                }
            })
    })
}