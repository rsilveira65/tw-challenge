const Hotel = require('./hotel');

class Ridgewood extends Hotel {
    constructor(days, clientType) {
        super(days, clientType);

        this.stars = 5; 
        this.WeekDay = [220, 100];
        this.WeekendDay = [150, 40];
    }

    calculeteRate() {
        return this.days.reduce((price, day) => (this.weekdays.includes(day)) ? price + this.WeekDay[this.clientType] : price + this.WeekendDay[this.clientType], 0);
    }

    getStars() {
        return this.stars;
    }
}

module.exports = Ridgewood;