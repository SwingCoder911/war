import {Game} from '../src/classes/Game.jsx';
import GameDeck from '../src/gameDeck.jsx';
var assert = require('assert');
describe('Game', function() {
  describe('#Constructor()', function() {
    it('should create a Game with no players and a full deck', function() {
      let game = new Game();
      assert(game instanceof Game && game.Players.length === 0, game.Deck.length === GameDeck.length);
    });
  });
  describe('#Shuffle()', function() {
    it('should not have the same card order as before shuffle but same length', function() {
      let game = new Game(), same = true;
      let initialDeck = game.Deck.slice(0);
      game.Shuffle();
      game.Deck.forEach((card, index) => {
        if(card.Suit !== initialDeck[index].Suit || card.Numeral !== initialDeck[index].Numeral){
          same = false;
        }
      });
      assert(!same);
    });
  });
  describe('#Setup()', function() {
    let acceptable = [0, 1, 2];
    acceptable.forEach(function(value) {
      it(`should should create a game with player number: ${value}`, function() {
        let game = new Game();
        game.Setup(value);
        assert(game instanceof Game && game.Players.length === value);
      });
    });
    
  });
  describe('#Draw()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#CompareAll()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#ComparePlayers()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#HandleWar()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#IsGameOver()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#HandleLoser()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#HandleWinner()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#FinishGame()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
});