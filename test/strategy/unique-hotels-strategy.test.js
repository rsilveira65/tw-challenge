'use strict';

const chai = require('chai');
const expect = chai.expect;
const BridgeWood = require('../../hotels/bridgewood');
const Lakewood = require('../../hotels/lakewood');
const Ridgewood = require('../../hotels/ridgewood');

const UniqueHotelStrategy = require('../../strategy/unique-hotel-strategy');

//Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)
describe('Testing UniqueHotelStrategy with Input1', () => {
	it('Should return Lakewood', () => {
		const bridgewood = new BridgeWood([ 'mon', 'tues', 'wed' ], 'Regular');
		const lakewood = new Lakewood([ 'mon', 'tues', 'wed' ], 'Regular');
		const ridgewood = new Ridgewood([ 'mon', 'tues', 'wed' ], 'Regular');

		const response = new UniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal('Lakewood');
	});
});

//Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)
describe('Testing UniqueHotelStrategy with Input2', () => {
	it('Shold return Bridgewood', () => {
		const bridgewood = new BridgeWood([ 'fri', 'sat', 'sun' ], 'Regular');
		const lakewood = new Lakewood([ 'fri', 'sat', 'sun' ], 'Regular');
		const ridgewood = new Ridgewood([ 'fri', 'sat', 'sun' ], 'Regular');

		const response = new UniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal('Bridgewood');
	});
});

//Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)
describe('Testing UniqueHotelStrategy with Input3', () => {
	it('Should return Ridgewood', () => {
		const bridgewood = new BridgeWood([ 'thur', 'fri', 'sat' ], 'Rewards');
		const lakewood = new Lakewood([ 'thur', 'fri', 'sat' ], 'Rewards');
		const ridgewood = new Ridgewood([ 'thur', 'fri', 'sat' ], 'Rewards');

		const response = new UniqueHotelStrategy().process(ridgewood, bridgewood, lakewood);

		expect(response).to.equal('Ridgewood');
	});
});
