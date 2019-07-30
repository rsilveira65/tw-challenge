'use strict';

const chai = require('chai');
const expect = chai.expect;
const Bridgewood = require('../../hotels/bridgewood');

describe('Testing Bridgewood class', () => {
	it('Should return an Bridgewood instance', () => {
		const bridgewood = new Bridgewood([ 'mon', 'tues', 'wed' ], 'Rewards');

		expect(bridgewood.getStars()).to.equal(4);
		expect(bridgewood.calculeteRate()).to.equal(330);

		expect(bridgewood.days[0]).to.equal('mon');
		expect(bridgewood.days[1]).to.equal('tues');
		expect(bridgewood.days[2]).to.equal('wed');

		expect(bridgewood.clientType).to.equal(1);
		expect(bridgewood.days).to.be.an('array');
		expect(bridgewood.weekdays).to.be.an('array');
		expect(bridgewood.weekenddays).to.be.an('array');
	});
});
