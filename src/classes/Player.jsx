export default class Player{    
    constructor(name, cards){
        this.Name = (typeof name !== 'string' || !name) ? "" : name;
        this.Cards = (!Array.isArray(cards)) ? [] : cards;
    }
    PopDeck(){
        if(this.Cards.length === 0){
            return null;
        }
        return this.Cards.shift();
    }
}