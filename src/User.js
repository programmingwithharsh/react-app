import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = { name: "Aryan", gender: "Male", company: "ABC" };
  }

  changeName = () => {
    this.setState({ name: "Ramesh" });
  };

  render() {
    return (
      <div>
        <h2>My Name is {this.props.userDetail.name}</h2>
        <h2>My Age is {this.props.userDetail.age}</h2>
        <h1>My Name is {this.state.name}</h1>
        <button type="button" onClick={this.changeName}>
          Change name
        </button>
      </div>
    );
  }
}

export default User;
