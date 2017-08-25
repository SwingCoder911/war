import React from 'react';
import render from 'react-dom';
require("./index.html");
class War extends React.Component{
    render(){
        return <p>Hello world!</p>;
    }
}

render(<War/>, document.getElementById('app'));