import React from "react";

export default class UpdateFriend extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateFriendMessenger = e => {
    this.props.updateFriend(
      e,
      this.state.id,
      this.state.name,
      this.state.age,
      this.state.email
    );
    this.setState({ name: "", age: "", email: "" });
  };
  render() {
    return (
      <div className="form-container">
        <h2>Update Friend</h2>
        <form onSubmit={this.updateFriendMessenger}>
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
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={this.state.id}
            onChange={this.handleChanges}
          />
          <button>Update Friend</button>
        </form>
      </div>
    );
  }
}
