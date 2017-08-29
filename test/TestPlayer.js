import {Card, Suits} from '../src/classes/Card.jsx';
import Player from '../src/classes/Player.jsx';
var assert = require('assert');
let badNames = [
  1,
  0,
  null,
  false  
];
let badCards = [
    1,
    0,
    null,
    false,
    'test'
  ];
let cards = [
    new Card('2', 'Spades'),
    new Card('3', 'Spades'),
    new Card('4', 'Spades'),
];
describe('Player', function() {
  describe('#Constructor()', function() {    
    /**
     * Test empty card deck
     */
    it('should accept good name and empty deck', function(){
        let player = new Player("Batman", []);
        assert(player.Name === 'Batman' && player.Cards.length === 0);
    });
    /**
     * Smoke test card deck
     */
    badCards.forEach((bc) => {
        it(`should gracefully fail on bad deck`, function(){
            let player = new Player("Batman", bc);
            assert(player.Name === "Batman" && Array.isArray(player.Cards) && player.Cards.length === 0);
        });
    });
    /**
     * Test bad names
     */
    badNames.forEach((bn) => {
        it(`should gracefully fail on bad name: ${bn} and empty deck`, function(){
            let player = new Player(bn, []);
            assert(player.Name === '' && player.Cards.length === 0);
        });
    });
    /**
     * Test multiple cards deck
     */
    it(`should accept multiple cards in the deck`, function(){
        let player = new Player('Batman', cards);
        assert(player.Name === 'Batman' && player.Cards.length === cards.length);
    });
    /**
     * Test single cards deck
     */
    it(`should accept single card in the deck`, function(){
        let player = new Player('Batman', [new Card('2', 'Spades')]);        
        assert(player.Name === 'Batman' && player.Cards.length === 1 && player.Cards[0].Numeral === '2' && player.Cards[0].Suit === 'Spades');
    });
  });  
  describe('#PopDeck()', function(){
    /**
     * Test player with multiple cards in deck
     */
    it(`should return top card and remove top card when popped with multiple cards in deck`, function(){
        let player = new Player('Batman', cards.slice(0));
        let initLength = player.Cards.length;
        let card = player.PopDeck(), lastCard = cards[cards.length - 1];
        assert(card.Numeral === lastCard.Numeral && card.Suit === lastCard.Suit && initLength === (player.Cards.length + 1));
    });
    /**
     * Test player with single card in deck
     */
    it(`should return top card and remove top card and have no cards left when popped with single card in deck`, function(){
        let player = new Player('Batman', [new Card('2', 'Spades')]);
        let initLength = player.Cards.length;
        let card = player.PopDeck();
        assert(card.Numeral === cards[0].Numeral && card.Suit === cards[0].Suit && player.Cards.length === 0);
    });
    /**
     * Test player with no cards in deck
     */
    it(`should return null have no cards when popped with no cards in deck`, function(){
        let player = new Player('Batman', []);
        let initLength = player.Cards.length;
        let card = player.PopDeck();
        assert(card === null);
    });
  });
});