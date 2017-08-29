import React from 'react';
import {render} from 'react-dom';

require('../sass/components/Complete.scss');
export default class Complete extends React.Component{
    constructor(){
        super();
      
    }
    render(){
        return (
            <section className="complete">
                <h1>That's finally over!<br/>Thank you for playing!</h1>
            </section>
        );
    }
}