import React from "react";
import CodeExample from "./CodeExample";

const code = `class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div
        className="text-white text-center bg-gray-600 rounded w-2/5 p-4 m-auto overflow-auto"
        style={{ height: "70%" }}
      >
        <h1 className="font-bold text-4xl">State</h1>
        <p>You click {count} times</p>
        <button
          className="rounded bg-white text-black px-2 py-1 my-2 w-full"
          onClick={this.setCount}
        >
          click me
        </button>
        <CodeExample code={code} />
      </div>
    );
  }
}`;

class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div
        className="text-white text-center bg-gray-600 rounded w-2/5 p-4 m-auto overflow-auto"
        style={{ height: "70%" }}
      >
        <h1 className="font-bold text-4xl">State</h1>
        <p>You click {count} times</p>
        <button
          className="rounded bg-white text-black px-2 py-1 my-2 w-full"
          onClick={this.setCount}
        >
          click me
        </button>
        <CodeExample code={code} />
      </div>
    );
  }
}

export default StateExample;
