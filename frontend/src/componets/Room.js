import React, { Component } from "react";
import { useParams } from "react-router-dom";

export default class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // states, refreshes and forces the component to update.
      guestCanPause: false,
      votesToSkip: 2,
      isHost: false,
    };
    //this.roomCode = this.props.match.params.roomCode; //
  }

  render() {
    return (
      <div>
        <h3>{<ReturnUrl />}</h3>
        <p>Votes: {this.state.votesToSkip}</p>
        <p>Guest Can Pause: {this.state.guestCanPause.toString()}</p>
        <p>Host: {this.state.isHost.toString()}</p>
      </div>
    );
  }
}


function ReturnUrl() {
  let { roomCode } = useParams(); // useParams return URL
  return roomCode;
}
