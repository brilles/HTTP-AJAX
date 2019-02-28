import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Home from "./components/Home";
import UpdateFriend from "./components/UpdateFriend";

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
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
        console.log(err);
      });
  }

  handleSubmit = (e, name, age, email) => {
    e.preventDefault();
    const newFriend = {
      name: name,
      age: age,
      email: email
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = (e, id, name, age, email) => {
    e.preventDefault();
    const friend = {
      id: id,
      name: name,
      age: age,
      email: email
    };
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          <li>
            <NavLink to="/updatefriend" activeClassName="activeNavBtn">
              Update Friend
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
        <Route
          exact
          path="/updatefriend"
          render={props => (
            <UpdateFriend
              {...props}
              updateFriend={this.updateFriend}
              friends={friends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
