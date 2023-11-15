import React from "react";
import "./Stack.css";
import UpperMenu from "../components/UpperMenu";
import TogglePopup from "../components/TogglePopup";

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [], // Array to simulate the stack
      newNumber: "",
    };
  }

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.push(this.state.newNumber);
    }
  };

  push = (newNumber) => {
    if (!isNaN(newNumber) && newNumber !== "") {
      const stack = [...this.state.stack];
      if (stack.length < 10) {
        stack.push(newNumber);
        this.setState({ stack, newNumber: "" });
      } else {
        // Handle stack full scenario
        console.log("Stack is full");
      }
    } else {
      // Handle invalid input
      console.log("Please enter a valid number");
    }
  };

  pop = () => {
    const stack = [...this.state.stack];
    if (stack.length > 0) {
      stack.pop();
      this.setState({ stack });
    } else {
      // Handle stack empty scenario
      console.log("Stack is empty");
    }
  };

  isEmpty = () => {
    return this.state.stack.length === 0;
  };

  isFull = () => {
    return this.state.stack.length === 10;
  };

  render() {
    const stackItems = this.state.stack.map((item, index) => (
      <div key={index} className="stack-item">
        {item}
      </div>
    ));

    return (
      <div className="Stack">
        <UpperMenu nameOfPage={"Stack"} search={false} />
        <div className="button-container">
          <input
            className="insert-node"
            type="number"
            value={this.state.newNumber}
            placeholder="Enter a number"
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={() => this.push(this.state.newNumber)}>Push</button>
          <button onClick={() => this.pop()}>Pop</button>
          <button disabled={!this.isEmpty()}>isEmpty</button>
          <button disabled={!this.isFull()}>isFull</button>
        </div>

        <div className="stack-container">
          <div className="top">{"Top            ."}</div>
          <ul className="numbers">
            <li>9. </li>
            <li>8. </li>
            <li>7. </li>
            <li>6. </li>
            <li>5. </li>
            <li>4. </li>
            <li>3. </li>
            <li>2. </li>
            <li>1. </li>
            <li>0. </li>
          </ul>
          <div className="stack">{stackItems}</div>
        </div>
        <TogglePopup />
      </div>
    );
  }
}

export default Stack;
