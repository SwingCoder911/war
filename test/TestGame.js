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
    let acceptable = [1, 2, 3, 4, 5];
    acceptable.forEach(function(value) {
      it(`should should create a game with player number: ${value}`, function() {
        let game = new Game();
        game.Setup(value);
        assert(game instanceof Game && game.Players.length === value);
      });
    });
    
  });
  describe('#Draw()', function() {
    it(`Draw should take every player's deck down by 1`, function() {
      let playerNum = 3,
          allOffBy1 = true;
      let game = new Game();
      game.Setup(playerNum);
      let initCounts = game.Players.reduce((acc, player) => {
        acc.push(player.Cards.length);
        return acc;
      }, []);
      game.Draw();
      game.Players.forEach((player, i) => {
        if(player.Cards.length === initCounts[i]){
          allOffBy1 = false;
        }
      });
      assert(allOffBy1);
    });
  });
  describe('#ComparePlayers()', function() {
    it('should assert true', function() {
      assert(true);
    });
  });
  describe('#CompareAll()', function() {
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