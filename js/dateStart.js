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
        // toLowerCase breaks if empty value
        if (season) {
            switch (season.trim().toLowerCase()) {
                case "spring":
                    resolve(`${year}-${dates.spring}`)
                    break;

                case "summer":
                    resolve(`${year}-${dates.summer}`)
                    break;

                case "fall":
                    resolve(`${year}-${dates.fall}`)
                    break;

                case "winter":
                    resolve(`${year}-${dates.winter}`)
                    break;

                default:
                    break;
            }
        } else {
            resolve("");
        }
    })
}