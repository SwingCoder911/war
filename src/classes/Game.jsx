import GameDeck from '../gameDeck.jsx';
import Player from './Player.jsx';
import Card from './Card.jsx';
export const SetupState = `setup`;
export const BattleState = `battle`;
export const CompleteState = `complete`;
const CARDS_PER_WAR = 2;
export class Game{    
    constructor(){
        this.Players = [];
        this.Deck = GameDeck;
    }
    //Shuffle local deck
    Shuffle(){
        let shuffled = [];
        let preShuffled = this.Deck.slice(0);
        while(preShuffled.length > 1){
            let rand = Math.round(Math.random() * (preShuffled.length - 1));
            shuffled.push(preShuffled.splice(rand, 1)[0]);
        }
        shuffled.push(preShuffled.shift());
        this.Deck = shuffled;
    }
    //Setup game with players specified in setup view
    Setup(players){
        if(isNaN(parseInt(players)) || players <= 0 || players > this.Deck.length){
            return;
        }        
        this.Players = [];
        this.Shuffle();
        let cardsPerPlayer = Math.floor(this.Deck.length / players);
        //Need to handle the last card(s) to the last players
        for(let i = 0; i < players; i++){
            let start = i * cardsPerPlayer;
            this.Players.push(new Player(`Player ${i}`, this.Deck.slice(start, start + cardsPerPlayer)));
        }
        let lastCards = this.Deck.slice(players * cardsPerPlayer, this.Deck.length);
        let i = 0;
        while(lastCards.length > 0){
            this.Players[i++].Cards.push(lastCards.pop());
        }
    }
    //All players draw card
    Draw(){
        this.Players.forEach((player) => {
            player.Draw();
        });
        let winners = this.CompareAll();
        this.HandleLoser();
        return winners;
    }
    ComparePlayers(players){
        let currentWinners = [];
        players.forEach((player) => {
            let topCard = player.Played[player.Played.length - 1];
            if(currentWinners.length === 0){
                currentWinners.push(player);
            }else if((currentWinners[0].Played[currentWinners[0].Played.length - 1].Compare(topCard) === 0)){
                currentWinners.push(player);
            }else if(currentWinners[0].Played[currentWinners[0].Played.length - 1].Compare(topCard) === -1){
                currentWinners = [player];
            }
        });
        return currentWinners;
    }
    //Compare all cards
    CompareAll(){
        return this.ComparePlayers(this.Players);
    }
    IsGameOver(){
        return this.Players.length <= 1;
    }
    HandleWar(winners){
        winners.forEach((player) => {
            let draw = null;
            for(let i = 0; i < CARDS_PER_WAR; i++){
                draw = player.Draw();
                if(draw === null){
                    break;
                }
            }
            if(draw !== null){
                player.Draw();
            }
        });
        return this.ComparePlayers(winners);
    }
    HandleLoser(){
        let i = 0;
        while(i < this.Players.length){
            if(this.Players[i].Cards.length === 0){
                this.Players.splice(i, 1);
            }else{
                i++;
            }
        }
    }
    HandleWinner(winner){
        let pot = [];
        this.Players.forEach((player) => {
            pot = pot.concat(player.FlushPlayed());
        });
        winner.Cards = pot.concat(winner.Cards);
    }
}