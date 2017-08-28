import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {Game, CompleteState} from '../classes/Game.jsx';
require('../sass/components/Battle.scss');
const getPlayerItems = (players) => {
    let playerItems = [];
    players.forEach((player, index) => {
        playerItems.push(<div key={index} className="player">
                            <label className="player-name">{player.Name}</label>
                            <div className="player-info">
                                <label>Cards total: </label>
                                <span>{player.Cards.length}</span>
                            </div>                            
                        </div>);
    });
    return playerItems;
};
const getCardPot = (players) => {
    let potItems = [];
    players.forEach((player, index) => {
        if(player.Played.length === 0){
            return;
        }
        let played = player.Played[player.Played.length - 1];
        potItems.push(<div key={index} className="played-card">
                            <span className="card-numeral">{played.Numeral}</span><br/>
                            <label className="card-suit">{played.Suit}</label>
                        </div>);
    });
    return potItems;
};
export default class Battle extends React.Component{
    constructor(){
        super();
        this.state = {
            recentWinner: null
        };
    }
    componentWillMount(){
        this.Game = this.props.game;
    }
    beginDraw(){
        if(this.state.recentWinner !== null){
            console.log(this.state.recentWinner);
            this.Game.HandleWinner(this.state.recentWinner);
        }        
        let winners = this.Game.Draw();
        //if(winners.length > 0)
        this.setState({recentWinner: winner});
        this.forceUpdate();
    }
    render(){        
        return (
            <section>
                <div className="deck-area">
                    {getCardPot(this.Game.Players)}
                </div>
                <div className="player-area">
                    <button className="btn btn-primary draw-action" onClick={this.beginDraw.bind(this)}>Draw!</button>
                    <div className="player-container">
                        {getPlayerItems(this.Game.Players)}
                    </div>                 
                    
                </div>
            </section>
        );
    }
}