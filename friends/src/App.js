import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import FriendsList from "./components/FriendsList";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <FriendsList {...props} friends={friends} />}
        />
      </div>
    );
  }
}

export default App;
