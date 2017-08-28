export default class Player{    
    constructor(name, cards){
        this.Name = (typeof name !== 'string' || !name) ? "" : name;
        this.Cards = (!Array.isArray(cards)) ? [] : cards;
        this.Played = [];
    }
    Draw(){
        this.Played.push(this.PopDeck());
    }
    FlushPlayed(){
        let flush = this.Played.slice(0);
        this.Played = [];
        return flush;
    }
    PopDeck(){
        if(this.Cards.length === 0){
            return null;
        }
        return this.Cards.shift();
    }
}