const Hotel = require('./hotel');

class Bridgewood extends Hotel {
	constructor(days, clientType) {
		super(days, clientType);
		
		this.stars = 4;
		this.weekDay = [ 160, 110 ];
		this.weekendDay = [ 60, 50 ];
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

module.exports = Bridgewood;
