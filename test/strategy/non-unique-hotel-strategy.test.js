'use strict';

const chai = require('chai');
const expect = chai.expect;
const BridgeWood = require('../../hotels/bridgewood');
const Lakewood = require('../../hotels/lakewood');
const Ridgewood = require('../../hotels/ridgewood');

const NonUniqueHotelStrategy = require('../../strategy/non-unique-hotel-strategy');

//Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)
describe('Testing NonUniqueHostelStrategy with Input1', () => {
	it('Should return false', () => {
		const bridgewood = new BridgeWood([ 'mon', 'tues', 'wed' ], 'Regular');
		const lakewood = new Lakewood([ 'mon', 'tues', 'wed' ], 'Regular');
		const ridgewood = new Ridgewood([ 'mon', 'tues', 'wed' ], 'Regular');

		const response = new NonUniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal(false);
	});
});

//Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)
describe('Testing NonUniqueHostelStrategy with Input2', () => {
	it('Should return false', () => {
		const bridgewood = new BridgeWood([ 'fri', 'sat', 'sun' ], 'Regular');
		const lakewood = new Lakewood([ 'fri', 'sat', 'sun' ], 'Regular');
		const ridgewood = new Ridgewood([ 'fri', 'sat', 'sun' ], 'Regular');

		const response = new NonUniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal(false);
	});
});

//Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)
describe('Testing NonUniqueHostelStrategy with Input3', () => {
	it('Should return Ridgewood', () => {
		const bridgewood = new BridgeWood([ 'thur', 'fri', 'sat' ], 'Rewards');
		const lakewood = new Lakewood([ 'thur', 'fri', 'sat' ], 'Rewards');
		const ridgewood = new Ridgewood([ 'thur', 'fri', 'sat' ], 'Rewards');

		const response = new NonUniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal('Ridgewood');
	});
});
