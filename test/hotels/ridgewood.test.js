'use strict'

const chai = require('chai')
const expect = chai.expect
const Ridgewood = require('../../hotels/ridgewood')

describe('Testing Ridgewood class', () => {
    it('Should return an Ridgewood instance', () => {
        const ridgewood = new Ridgewood(['mon', 'tues', 'wed'], 'Regular');

        expect(ridgewood.getStars()).to.equal(5);
        expect(ridgewood.calculeteRate()).to.equal(660);

        expect(ridgewood.days[0]).to.equal('mon');
        expect(ridgewood.days[1]).to.equal('tues');
        expect(ridgewood.days[2]).to.equal('wed');

        expect(ridgewood.clientType).to.equal(0);
        expect(ridgewood.days).to.be.an('array');
        expect(ridgewood.weekdays).to.be.an('array');
        expect(ridgewood.weekenddays).to.be.an('array');
    })
})