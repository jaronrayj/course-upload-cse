module.exports = (type, min, max) => {
    return new Promise((resolve, reject) => {
        switch (type) {
            case 'fixed':
                resolve({
                    chosen: 'fixed',
                    credits: {
                        min: min,
                        max: min
                    },
                    value: min
                })
                break;

            case 'multiple':
                resolve({
                    chosen: 'multiple',
                    credits: {
                        min: min,
                        max: max
                    },
                    value: [min, max]
                })
                break;

            case 'range':
                resolve({
                    chosen: 'range',
                    credits: {
                        min: min,
                        max: max
                    },
                    value: {
                        min: min,
                        max: max
                    }
                })
                break;

            default:
                resolve({})
                break;
        }
    });
}