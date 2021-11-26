import React, { Component } from "react";
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    // É meio que obrigado a sempre criar o construtor
    super(props); // Construtor Parent
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* Switch basicamente troca as URLs, tipo o Switch cases. Se isso vai, se não tenta o outro. */}
          <Route exact path="/" element={<h1>This is the HomePage</h1>} />
          <Route path="/join" element={<JoinRoomPage />} />
          {/* Quando o site abrir /join o render vai buscar o JoinRoomPage.js */}
          <Route path="/create" element={<CreateRoomPage />} />
        </Switch>
      </Router>
    );
  }
}
