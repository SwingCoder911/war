import React from 'react';
import {render} from 'react-dom';
import Setup from './components/SetupComponent.jsx';
import Game from './classes/Game.jsx';
require("./index.html");
class War extends React.Component{
    constructor(){
        super();
        this.Game = new Game();
    }
    render () {
        return <Setup />
    }
}

render(<War/>, document.getElementById('app'));