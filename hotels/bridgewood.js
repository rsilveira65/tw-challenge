const Hotel = require('./hotel');

class Bridgewood extends Hotel {
    constructor(days, clientType) {
        super(days, clientType);

        this.stars = 4; 
        this.WeekDay = [160, 110];
        this.WeekendDay = [60, 50];
    }

    calculeteRate() {
        return this.days.reduce((price, day) => (this.weekdays.includes(day)) ? price + this.WeekDay[this.clientType] : price + this.WeekendDay[this.clientType], 0);
    }

    getStars() {
        return this.stars;
    }
}

module.exports = Bridgewood;