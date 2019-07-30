'use strict';

const chai = require('chai');
const expect = chai.expect;
const Hotel = require('../../hotels/hotel');

describe('Testing Hotel class', () => {
	it('Should return an Hotel instance', () => {
		const hotel = new Hotel([ 'mon', 'tues' ], 'Regular');

		expect(hotel.days[0]).to.equal('mon');
		expect(hotel.days[1]).to.equal('tues');
		expect(hotel.clientType).to.equal(0);
		expect(hotel.days).to.be.an('array');
		expect(hotel.weekdays).to.be.an('array');
		expect(hotel.weekenddays).to.be.an('array');
	});
});
