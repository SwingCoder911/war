import GameDeck from '../gameDeck.jsx';
import Players from './Player.jsx';
export const SetupState = `setup`;
export const BattleState = `battle`;
export const CompleteState = `complete`;
export class Game{    
    constructor(){
        this.Players = [];
        this.Deck = GameDeck;
    }
    //Shuffle local deck
    Shuffle(){
        let shuffled = [];
        while(this.Deck.length > 1){
            let rand = Math.round(Math.random() * (this.Deck.length - 1));
            shuffled.push(this.Deck.splice(rand, 1));
        }
        shuffled.push(this.Deck.shift());
        this.Deck = shuffled;
    }
    //Setup game with players specified in setup view
    Setup(players){
        if(isNaN(parseInt(players)) || players < 0 || players > this.Deck.length){
            return;
        }        
        this.Players = [];
        this.Shuffle();
        let cardsPerPlayer = Math.floor(this.Deck.length / players);
        //Need to handle the last card(s) to the last players
        for(let i = 0; i < players; i++){
            let start = i * cardsPerPlayer;
            this.Players.push(new Players(`Player${i}`, this.Deck.slice(start, start + cardsPerPlayer)));
        }
    }
    //All players draw card
    Draw(){

    }
    //Compare all cards
    Compare(){

    }
    HandleRoundComplete(){

    }
    HandleWar(){

    }
    HandleLoser(){

    }
    HandleWinner(){

    }
    FinishGame(){

    }
}