import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <h1> Testando o React AAAA </h1>;
    }
}

const appDiv = document.getElementById('app') // Access the app container
render(<App />, appDiv) // Render the App component inside the appDiv