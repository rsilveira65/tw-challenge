const Hotel = require('./hotel');

class Lakewood extends Hotel {
	constructor(days, clientType) {
		super(days, clientType);

		this.stars = 3;
		this.weekDay = [ 110, 80 ];
		this.weekendDay = [ 90, 80 ];
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

module.exports = Lakewood;
