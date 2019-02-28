import React, { Component } from "react";

export default class AddFriend extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    this.props.handleSubmit(
      e,
      this.state.name,
      parseInt(this.state.age),
      this.state.email
    );
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <div className="form-container">
        <h2>Add Friend</h2>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChanges}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}
