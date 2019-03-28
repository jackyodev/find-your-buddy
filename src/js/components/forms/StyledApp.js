import React, { Component } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button
  // IconButton,
  // FormControl,
  // Select
} from "@material-ui/core";
// import List, {
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction
// } from 'material-ui/List';
// import { MenuItem } from 'material-ui/Menu';
// import { Delete } from '@material-ui/icons';
// import { withStyles } from 'material-ui/styles';
import { withStyles } from "@material-ui/core/styles";

// import { Consumer } from './context';

const flex = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-evenly"
};

const styles = ({ spacing: { unit } }) => ({
  root: {
    margin: `${unit * 3}px auto`,
    padding: unit * 2,
    maxWidth: 400
  },
  header: {
    ...flex,
    marginTop: unit * 2
  },
  form: {
    ...flex,
    marginBottom: unit
  }
});

// @withStyles(styles)
class StyledApp extends Component {
  state = {
    exercises: [
      { id: 1, title: "Bench Press" },
      { id: 2, title: "Deadlift" },
      { id: 3, title: "Squats" }
    ],
    title: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleCreate = e => {
    e.preventDefault();

    if (this.state.title) {
      this.setState(({ exercises, title }) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ""
      }));
    }
  };

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  render() {
    const { title } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography variant="display1" align="center" gutterBottom>
          address
        </Typography>
        <form onSubmit={this.handleCreate}>
          <TextField
            name="title"
            label="Name"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="Email"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="Address"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="Street"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="Apt #"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="City"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="State"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="Name"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <br />
          <TextField
            name="title"
            label="ZipCode"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
      </Paper>
    );
  }
}
export default withStyles(styles)(StyledApp);

// <Consumer>
