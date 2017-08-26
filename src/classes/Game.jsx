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
        
    }
    Setup(players){
        this.State = SetupState;
        this.Players = [];
        for(let i = 0; i < players; i++){
            this.Players.push(new Players(`Player${i}`, this.Deck));
        }
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