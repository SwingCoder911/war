import GameDeck from '../gameDeck.jsx';
import Players from './Player.jsx';
const SetupState = `setup`;
const BattleState = `battle`;
const CompleteState = `complete`;
export default class Game{    
    constructor(){
        this.Players = [];
        this.Deck = GameDeck;
        this.State = "";
    }
    Shuffle(){
        //Implment shuffle of deck.
    }
    Setup(players){
        this.State = SetupState;
        this.Players = [];
        this.Shuffle();
        let cardsPerPlayer = Math.floor(this.Deck.length / players);
        //Need to handle the last card(s) to the last players
        for(let i = 0; i < players; i++){
            this.Players.push(new Players(`Player${i}`, this.Deck.slice(i * cardsPerPlayer, i * cardsPerPlayer + cardsPerPlayer)));
        }
        this.Sate = BattleState;
        console.log(this.Players);
    }
    Draw(){

    }
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