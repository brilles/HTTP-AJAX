import React, { Component } from "react";

export default class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = e => {
    this.setState({ name: "", age: "", email: "" });
    this.props.handleSubmit(
      e,
      this.state.name,
      this.state.age,
      this.state.email
    );
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
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
          <button>Add Friend !</button>
        </form>
      </div>
    );
  }
}
