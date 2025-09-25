import { Component, useEffect, useState } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = { counter: 1 };
  }

  componentDidMount() {
    console.log("DidMount 마운트");
  }

  componentDidUpdate() {
    console.log("DidUpdate 마운트");
  }

  componentWillUnmount() {
    console.log("UnMount");
  }

  render() {
    return (
      <section>
        <div>
          <div>counter : {this.state.counter}</div>
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            +1 증가
          </button>
        </div>
      </section>
    );
  }
}

export default CounterClass;
