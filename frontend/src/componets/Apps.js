import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";


/*
React contem vários componentes que podem renderizar outros componentes. 
Ou seja, você pode criar um componente e usar em diferentes páginas. Por exemplo, um formulario ou um botão que gera algo, etc.
Props: Atributos ou argumentos que damos para o componente. 
*/

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Return the actual HTML that should be displayed in the page.
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app"); // Access the app container and get the id. There in the index.html.
render(<App />, appDiv); // Render the App component inside the appDiv

// Ou seja a class App que é um componente, está sendo enviada para a div 'app', dentro de index.html.
