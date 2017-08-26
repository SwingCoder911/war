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
}