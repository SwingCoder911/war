import {Card, Suits} from './classes/Card.jsx';
let GameDeck = [];
let faces = ['Jack', 'Queen', 'King', 'Ace'];
Suits.forEach((suit) => {
    for(let i = 2; i <= 10; i++){
        GameDeck.push(new Card(i.toString(), suit));
    }
    faces.forEach((face) => {
        GameDeck.push(new Card(face, suit));
    });
});
export default GameDeck;