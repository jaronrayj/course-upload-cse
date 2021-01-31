const instance = require('../config');

module.exports = (groupType, name, dataReturn) => {
    return new Promise((resolve, reject) => {
        instance.get(`/api/cm/options/types/${groupType}?name=${name}`)
            .then(res => {
                if (res.data) {
                    res.data.forEach(groupTypeReturn => {
                        if (groupTypeReturn.name === name) {
                            resolve(groupTypeReturn[dataReturn]);
                        } else {
                            resolve();
                        }
                    });
                } else {
                    resolve();
                }
            })
    })
}