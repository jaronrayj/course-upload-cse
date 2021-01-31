const instance = require('../config');

module.exports = (department) => {
    return new Promise((resolve, reject) => {
        instance.get(`/api/v1/groups?q=${department}`)
            .then(res => {
                if (res) {
                    // assumes only one correct response
                    resolve(res.data[0]);
                } else {
                    resolve("");
                }
            })
    })
}