export const Suits = [
    `Spades`,
    `Clubs`,
    `Hearts`,
    `Diamonds`
];
export class Card{    
    constructor(numeral, suit){        
        this.Numeral = (typeof numeral !== 'string') ? '' : numeral;
        this.Suit = (typeof suit !== 'string' || Suits.indexOf(suit) === -1) ? '' : suit;
    }
    /**
     * If input card is greater than the current card, return -1
     * If the cards are equal, return 0
     * If the current card is greater than the input card, return 1
     * @param {Card} card 
     */
    Compare(card){
        if(this.Numeral == card.Numeral){
            return 0;
        }else if(isNaN(parseInt(this.Numeral)) && !isNaN(parseInt(card.Numeral))){
            return 1;
        }else if(!isNaN(parseInt(this.Numeral)) && isNaN(parseInt(card.Numeral))){
            return -1;
        }else if(isNaN(parseInt(this.Numeral)) && isNaN(parseInt(card.Numeral))){
            if(this.Numeral === 'Ace'){
                return 1;
            }else if(this.Numeral === 'King' && card.Numeral !== 'Ace'){
                return 1;
            }else if(this.Numeral === 'Queen' && card.Numeral === 'Jack'){
                return 1;
            }else{
                return -1;
            }            
        }else if(parseInt(this.Numeral) > parseInt(card.Numeral)){
            return 1;
        }else{
            return -1;
        }

    }
}