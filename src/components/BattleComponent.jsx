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
const getCardPot = (players, warContestants) => {
    let potItems = [];
    let warNames = warContestants.reduce((acc, player) => {
        return acc.concat(player.Name);
    }, []);
    players.forEach((player, index) => {
        if(player.Played.length === 0){
            return;
        }
        let playerCards = [];
        player.Played.forEach((card, cIndex) => {
            playerCards.push(<div key={cIndex} className="played-card">
                            <span className="card-numeral">{card.Numeral}</span><br/>
                            <label className="card-suit">{card.Suit}</label>
                        </div>);
        });
        potItems.push(<div key={index} className={`player-played${(warNames.indexOf(player.Name) !== -1) ? ' war-player': ''}`}>
                            {playerCards}
                        </div>);
    });
    return potItems;
};
export default class Battle extends React.Component{
    constructor(){
        super();
        this.state = {
            recentWinner: null,
            warContestants: []
        };
    }
    componentWillMount(){
        this.Game = this.props.game;
    }
    handleWinners(winners){
        if(winners.length > 1){
            this.setState({
                warContestants: winners,
                recentWinner: null
            });
        }else{
            this.setState({
                warContestants: [],
                recentWinner: winners[0]
            });
        }
        if(this.Game.IsGameOver()){
            this.props.updateState(CompleteState);
        }else{
            this.forceUpdate();
        }
    }
    beginDraw(){
        if(this.state.recentWinner !== null){
            this.Game.HandleWinner(this.state.recentWinner);
        }
        let winners = this.Game.Draw();
        this.handleWinners(winners);
    }
    beginWar(){
        if(this.state.recentWinner !== null){
            this.Game.HandleWinner(this.state.recentWinner);
        }
       let winners = this.Game.HandleWar(this.state.warContestants);
       this.handleWinners(winners);
    }
    render(){        
        let actionButton = (this.state.warContestants.length > 0) ? 
            <button className="btn btn-danger draw-action" onClick={this.beginWar.bind(this)}>Fight War!</button> :
            <button className="btn btn-primary draw-action" onClick={this.beginDraw.bind(this)}>Draw!</button>;
        return (
            <section>
                <div className="deck-area">
                    {getCardPot(this.Game.Players, this.state.warContestants)}
                </div>
                <div className="player-area">
                   {actionButton}
                    <div className="player-container">
                        {getPlayerItems(this.Game.Players)}
                    </div>                 
                    
                </div>
            </section>
        );
    }
}