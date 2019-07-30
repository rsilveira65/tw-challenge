const Lakewood = require('./hotels/lakewood');
const Bridgewood = require('./hotels/bridgewood');
const Ridgewood = require('./hotels/ridgewood');
const NonUniqueHostelStrategy = require('./strategy/non-unique-hotel-strategy');
const UniqueHostelStrategy = require('./strategy/unique-hotel-strategy');

const fs = require('fs');

const PARENTHESES_REGEX = /\(([^)]+)\)/;  //https://stackoverflow.com/questions/17779744/regular-expression-to-get-a-string-between-parentheses-in-javascript/17779833

const INPUT = 'input1.txt';
//const INPUT = 'input2.txt';
//const INPUT = 'input3.txt';

const input = fs.readFileSync(`inputs/${INPUT}`, 'utf8');

const days = input.split(',').map(element => PARENTHESES_REGEX.exec(element)[1]);
const clientType = input.split(':')[0];

const ridgewoodHotel = new Ridgewood(days, clientType);
const bridgewoodHotel = new Bridgewood(days, clientType);
const lakewoodHotel = new Lakewood(days, clientType);

const haseNonUniqueHostel = new NonUniqueHostelStrategy().process(ridgewoodHotel, bridgewoodHotel, lakewoodHotel);

console.log(
    haseNonUniqueHostel ?
        haseNonUniqueHostel :
        new UniqueHostelStrategy().process(ridgewoodHotel, bridgewoodHotel, lakewoodHotel)
);
