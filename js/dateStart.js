module.exports = (dateStart, dates) => {
    return new Promise((resolve, reject) => {
        const splitDate = dateStart.split(" ");
        let year;
        let season;
        if (Number.isInteger(splitDate[0])) {
            year = splitDate[0];
            season = splitDate[1];
        } else {
            year = splitDate[1]
            season = splitDate[0];
        }

        switch (season) {
            case "Spring":
                resolve(`${year}-${dates.spring}`)
                break;

            case "Summer":
                resolve(`${year}-${dates.summer}`)
                break;

            case "Fall":
                resolve(`${year}-${dates.fall}`)
                break;

            case "Winter":
                resolve(`${year}-${dates.winter}`)
                break;

            default:
                break;
        }
    })
}