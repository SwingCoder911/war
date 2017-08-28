import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {Game, CompleteState} from '../classes/Game.jsx';
require('../sass/components/Battle.scss');
const getPlayerItems = (players) => {
    let playerItems = [];
    players.forEach((player, index) => {
        playerItems.push(<div key={index} className="player">{player.Name}</div>);
    });
    return playerItems;
};
export default class Battle extends React.Component{
    initialize(){
        this.Game.Draw();
    }
    render(){
        this.Game = this.props.game;
        return (
            <section>
                <div className="deck-area">

                </div>
                <div className="player-area">
                    {getPlayerItems(this.Game.Players)}
                </div>
            </section>
        );
    }
}