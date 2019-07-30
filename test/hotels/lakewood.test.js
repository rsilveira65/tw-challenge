'use strict'

const chai = require('chai');
const expect = chai.expect;
const Lakewood = require('../../hotels/lakewood');

describe('Testing Lakewood class', () => {
    it('Should return an Lakewood instance', () => {
        const lakewood = new Lakewood(['mon', 'tues', 'wed'], 'Regular');

        expect(lakewood.getStars()).to.equal(3);
        expect(lakewood.calculeteRate()).to.equal(330);

        expect(lakewood.days[0]).to.equal('mon');
        expect(lakewood.days[1]).to.equal('tues');
        expect(lakewood.days[2]).to.equal('wed');

        expect(lakewood.clientType).to.equal(0);
        expect(lakewood.days).to.be.an('array');
        expect(lakewood.weekdays).to.be.an('array');
        expect(lakewood.weekenddays).to.be.an('array');
    });
});