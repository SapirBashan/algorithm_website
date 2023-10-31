import React from "react";
import "./LinkedList.css";
import "../styles.css";
import TogglePopup from "../components/TogglePopup.js";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      head: null,
      foundKey: null, // New state variable to store the key of the found node
    };
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value, foundKey: null }); // Reset foundKey state when input changes
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.state.inputVal !== "") {
      this.insertNode();
    }
  }

  insertNode() {
    if (this.state.inputVal === "") {
      alert("Please enter a value");
      return;
    }
    if (isNaN(this.state.inputVal)) {
      alert("Please enter a number");
      return;
    }
    if (this.state.inputVal > 9999 || this.state.inputVal < -999) {
      alert("Please enter a number between -999 and 9999");
      return;
    }
    const newNode = new Node(this.state.inputVal);
    if (!this.state.head) {
      this.setState({ head: newNode});
    } else {
      let current = this.state.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    setTimeout(() => {
      this.setState({ inputVal: ""})
   }); 
  }

  deleteNode(value) {
   let current = this.state.head;
   let prev = null;
   while (current !== null) {
     if (current.data === value) {
       if (prev === null) {
         this.setState({ head: current.next });
       } else {
         prev.next = current.next;
       }
       this.setState({ inputVal: "" }); // Reset inputVal state to an empty string
       return;
     }
     prev = current;
     current = current.next;
   }
   alert("Node not found");
 }
 


  findNode(value) {
    let current = this.state.head;
    while (current !== null) {
      if (current.data === value) {
         this.setState({ foundKey: current.data }); // Update foundKey state with the key of the found node
        return true;
      }
      current = current.next;
    }
    alert("Node not found");
    return false;
  }

  RandomNode(value) {
      // this.setState({ inputVal: Math.floor(Math.random() * 100) + 1})
      for (let i = 0; i < value; i++) {
        let rand = Math.floor(Math.random() * 100) + 1;

        if (value === "") {
         alert("Please enter a value");
         return;
       }
       if (isNaN(value)) {
         alert("Please enter a number");
         return;
       }
       if (value > 100 || value < 1) {
         alert("Please enter a number between 1 and 100");
         return;
       }
       this.setState({ inputVal: rand})
       const newNode = new Node(rand);
       if (!this.state.head) {
         this.setState({ head: newNode});
       } else {
         let current = this.state.head;
         while (current.next) {
           current = current.next;
         }
         current.next = newNode;
       }
       setTimeout(() => {
         this.setState({ inputVal: ""})
      }); 
      }
   }


  render() {
    let nodes = [];
    let arrows = [];
    let current = this.state.head;

    while (current !== null) {
      nodes.push(
        <div
          key={current.data}
          className={`block ${this.state.foundKey === current.data ? "found" : ""}`}
        >
          {current.data}
        </div>
      );
      if (current.next !== null) {
        arrows.push(<div key={current.data + "->"} className="arrow"></div>);
      }
      current = current.next;
    }

    return (
      <div className="LinkedList">
        <h1>Linked List</h1>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={(e) => this.handleInput(e)}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
        <button onClick={() => this.deleteNode(this.state.inputVal)}>Delete</button>
        <button onClick={() => this.insertNode()}>Insert</button>
        <button onClick={() => this.findNode(this.state.inputVal)}>Find</button>
        {/* <button onClick={() => this.RandomNode(this.state.inputVal)}>Random</button> */}
         <button onClick={() => this.setState({ head: null })}>Clear</button>
        <h1> </h1>
        <div className="linked-list-container">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              {node}
              {arrows[index]}
            </React.Fragment>
          ))}
        </div>
        <TogglePopup />
      </div>
    );
  }
}



export default LinkedList;
