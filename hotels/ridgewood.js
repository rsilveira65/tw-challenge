const Hotel = require('./hotel');

class Ridgewood extends Hotel {
    constructor(days, clientType) {
        super(days, clientType);

        this.stars = 5; 
        this.weekDay = [ 220, 100 ];
        this.weekendDay = [ 150, 40] ;
    }

    calculeteRate() {
        return this.days.reduce(
            (price, day) => 
                this.weekdays.includes(day) 
                    ? price + this.weekDay[this.clientType] 
                    : price + this.weekendDay[this.clientType], 
            0
        );
    }

    getStars() {
        return this.stars;
    }
}

module.exports = Ridgewood;