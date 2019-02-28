import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Home from "./components/Home";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
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

  handleSubmit = (e, name, age, email) => {
    e.preventDefault();
    const newFriend = {
      name: name,
      age: age,
      email: email
    };
    this.setState({
      friends: [...this.state.friends, newFriend]
    });
    axios.post("http://localhost:5000/friends", {
      name,
      age,
      email
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    this.setState({
      friends: [...this.state.friends.filter(friend => friend.id !== id)]
    });
    axios.delete(`http://localhost:5000/friends/${id}`);
  };

  render() {
    const { friends } = this.state;
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavBtn">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" activeClassName="activeNavBtn">
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink to="/addfriend" activeClassName="activeNavBtn">
              Add Friend
            </NavLink>
          </li>
        </ul>
        <Route
          exact
          path="/"
          render={props => <Home {...props} friends={friends} />}
        />
        <Route
          exact
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={friends}
              deleteFriend={this.deleteFriend}
            />
          )}
        />
        <Route
          exact
          path="/addfriend"
          render={props => (
            <AddFriend
              {...props}
              handleSubmit={this.handleSubmit}
              friends={friends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
