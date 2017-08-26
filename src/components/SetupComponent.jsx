import React from 'react';
import {render} from 'react-dom';
require('../sass/components/Setup.scss');
export default class Setup extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <section>
                <header className="header">Welcome to War</header>
                <div className="get-players">
                    <label>Choose number of players</label>
                    <input class="player-value" name="players" type="text" />
                    <button className="btn btn-primary action" >Begin</button>
                </div>
            </section>
        );
    }
}