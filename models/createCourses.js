const instance = require('../config');

module.exports = (postData) => {
    return new Promise((resolve, reject) => {
        instance.post(`api/cm/courses`, postData)
            .then(res => {
                console.log(res);
            }).catch(err => {
                throw err
            })
        resolve()
    })
}