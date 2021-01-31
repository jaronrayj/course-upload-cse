const instance = require('../config');

module.exports = (groupType, name, dataReturn) => {
    return new Promise((resolve, reject) => {
        instance.get(`/api/cm/options/types/${groupType}?name=${name}`)
            .then(res => {
                if (res) {
                    resolve(res.data[0][dataReturn])
                } else {
                    resolve("");
                }
            })
    })
}