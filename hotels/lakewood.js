const Hotel = require('./hotel');

class Lakewood extends Hotel {
	constructor(days, clientType) {
		super(days, clientType);

		this.stars = 3;
		this.WeekDay = [ 110, 80 ];
		this.WeekendDay = [ 90, 80 ];
	}

	calculeteRate() {
		return this.days.reduce(
			(price, day) =>
				this.weekdays.includes(day)
					? price + this.WeekDay[this.clientType]
					: price + this.WeekendDay[this.clientType],
			0
		);
	}

	getStars() {
		return this.stars;
	}
}

module.exports = Lakewood;
