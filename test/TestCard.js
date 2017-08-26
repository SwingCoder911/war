import {Card, Suits} from '../src/classes/Card.jsx';
var assert = require('assert');
let badNumerals = [
  -1,
  0,
  1,
  null,
  false,
  true,
  undefined
];
let badSuits = [
  -1,
  0,
  1,
  null,
  false,
  true,
  undefined,
  'llama'
];
describe('Card', function() {
  describe('#Constructor()', function() {    
    /**
     * Test golden path
     */
    Suits.forEach((suit) => {
      it(`should take ${suit}`, function() {
        let card = new Card('2', suit);
        assert(card.Suit === suit);
      });
    });
    /**
     * Smoke test
     */
    badNumerals.forEach((bn) => {
      badSuits.forEach((bs) => {
        it(`should fail gracefully on bad numeral: ${bn} and bad suit: ${bs}`, function(){
          let card = new Card(bn, bs);
          assert(card.Suit === '' && card.Numeral === '');
        });        
      });
    });
  });  
});