import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Game, BattleState} from '../classes/Game.jsx';
import GameDeck from '../gameDeck.jsx';
require('../sass/components/Setup.scss');

const MAX_PLAYERS = GameDeck.length;
const VALUE_TOO_HIGH_ERROR = `Please enter a value less than ${MAX_PLAYERS}.`;
const NEGATIVE_VALUE_ERROR = `Please enter a non negative number.`;
const INVALID_VALUE_ERROR = `Please enter a valid number between 0 and ${MAX_PLAYERS}.`;
export default class Setup extends React.Component{
    constructor(){
        super();
        this.state = {
            players: 2,
            error: false
        };
    }
    handlePlayerChange(event){
        this.setState({players: event.target.value});
    }
    handleBegin(event){
        //Include error handling here
        if(this.state.players > MAX_PLAYERS){
            this.setState({error: VALUE_TOO_HIGH_ERROR});
            return;
        }else if(this.state.players < 0){
            this.setState({error: NEGATIVE_VALUE_ERROR});
            return;
        }
        else if(isNaN(parseInt(this.state.players))){
            this.setState({error: INVALID_VALUE_ERROR});
            return;
        }
        this.setState({error: false});
        this.props.game.Setup(this.state.players);
        this.props.updateState(BattleState);
    }
    render(){
        return (
            <section>
                <header className="header">Welcome to War</header>
                <div className="get-players">
                    <label>Choose number of players</label>
                    <input 
                        className="player-value" 
                        name="players" 
                        value={this.state.players} 
                        onChange={this.handlePlayerChange.bind(this)} 
                        type="text" />
                    <span className={"error " + (this.state.error !== false ? 'visible' : '')} >{this.state.error}</span>
                    <button 
                        className="btn btn-primary action" 
                        onClick={this.handleBegin.bind(this)}>Begin</button>
                </div>
            </section>
        );
    }
}