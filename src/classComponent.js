import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
      field: "text"
    };
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ field: "another value" })}>
          click me
        </button>
        {this.state.field}
      </div>
    );
  }
}
