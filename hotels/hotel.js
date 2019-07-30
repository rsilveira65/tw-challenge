class Hotel {
	constructor(days, clientType) {
		this.clientType = clientType === 'Regular' ? 0 : 1;
		this.days = days;
		this.weekdays = [ 'mon', 'tues', 'wed', 'thur', 'fri' ];
		this.weekenddays = [ 'sun', 'sat' ];
	}
}

module.exports = Hotel;
