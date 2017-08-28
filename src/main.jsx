import React from 'react';
import {render} from 'react-dom';
import Setup from './components/SetupComponent.jsx';
import Battle from './components/BattleComponent.jsx';
import Complete from './components/CompleteComponent.jsx';
import {Game, SetupState, BattleState, CompleteState} from './classes/Game.jsx';
require("./index.html");
class War extends React.Component{
    constructor(){
        super();
        this.Game = new Game();
        this.state = {
            gameState: SetupState
        };
    }
    updateState(newState){
        this.setState({gameState: newState});
    }
    render () {        
       
        if(this.state.gameState === SetupState){
            return <Setup 
                        game={this.Game} 
                        updateState={this.updateState.bind(this)} />
        }else if(this.state.gameState === BattleState){
            return <Battle 
                        game={this.Game} 
                        updateState={this.updateState.bind(this)} />
        }else{
            return <Complete 
                        game={this.Game} 
                        updateState={this.updateState.bind(this)} />
        }
        
    }
}

render(<War/>, document.getElementById('app'));