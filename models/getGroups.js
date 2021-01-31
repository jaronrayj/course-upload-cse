const instance = require('../config');

module.exports = (department) => {
    return new Promise((resolve, reject) => {
        instance.get(`/api/v1/groups?q=${department}`)
            .then(res => {
                if (res.data) {
                    res.data.forEach(departmentReturn => {
                        if (departmentReturn.name === department) {
                            resolve(departmentReturn);
                        } else {
                            resolve();
                        }
                    });
                } else {
                    resolve("");
                }
            })
    })
}