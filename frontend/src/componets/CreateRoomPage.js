import React, { Component } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  FormLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default class CreateRoomPage extends Component {
  defaultVotes = 2;

  constructor(props) {
    super(props);
    this.state = {
      // states, refreshes and forces the component to update.
      guestCanPause: true,
      votesToSkip: this.defaultVotes,
    };
  }

  handleVotesChange = (e) => {
    this.setState({
      votesToSkip: e.target.value,
    });
  };

  // Verificar se o guestCanPause é true or false e retorna ele para guestCanPause.
  handleGuestCanPauseChange = (e) => {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false, // Ternary Operation.
    });
  };

  handleRoomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Está dizendo qual tipo de content está chegando.
      body: JSON.stringify({
        votes_to_skip: this.state.votesToSkip, // Transforma JavaScript em JavaScript Object Notation (JSON) (;
        guest_can_pause: this.state.guestCanPause, // Tem que ser o mesmo nome do serialized na views.py
      }),
    };
    // fetch = buscar
    fetch("/api/create-room", requestOptions) // Envia um request para /api/create-room.
      .then((response) => response.json()) // Uma vez que temos a resposta do request, converte esses dados para JSON
      .then((data) => console.log(data)); // data é o valor da conversão do response.json.
  };

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <FormHelperText>
              <div align="center">Guest Control of Playback State</div>
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.handleGuestCanPauseChange} // Toda vez o mudar a valor, a funcão lá no todo vai receber o valor.
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />}
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              required={true}
              type="number"
              onChange={this.handleVotesChange} // Toda vez o mudar a valor, a funcão lá no todo vai receber o valor.
              defaultValue={this.defaultVotes}
              inputProps={{
                min: 1,
                //   style: { textAlign: "center"}
              }}
            />
            <FormHelperText>
              <div align="center">Votes Required To Skip Songs</div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleRoomButtonPressed}
          >
            Create A Room
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Button color="secondary" variant="contained" to="/" component={Link}>
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}
