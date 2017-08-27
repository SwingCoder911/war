import React from 'react';
import {render} from 'react-dom';
require('../sass/components/Setup.scss');
const MAX_PLAYERS = 52;
export default class Setup extends React.Component{
    constructor(){
        super();
        this.state = {
            players: 2
        };
    }
    handlePlayerChange(event){
        this.setState({players: event.target.value});
    }
    handleBegin(event){
        //Include error handling here
        if(this.state.players > MAX_PLAYERS){
            return;
        }
        this.props.game.Setup(this.state.players);
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
                    <button 
                        className="btn btn-primary action" 
                        onClick={this.handleBegin.bind(this)}>Begin</button>
                </div>
            </section>
        );
    }
}