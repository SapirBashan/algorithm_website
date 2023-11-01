import React from "react";
import "./LinkedList.css";
import "../styles.css";
import TogglePopup from "../components/TogglePopup.js";
import Node from "../components/Node.js";

class LinkedList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      inputValIndex: "",
      head: null,
      foundKey: null, // New state variable to store the key of the found node
    };
    
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInputIndex = this.handleInputIndex.bind(this);
    this.handleKeyPressIndex = this.handleKeyPressIndex.bind(this);
  }

  handleInput(e) {
    this.setState({ inputVal: e.target.value, foundKey: null });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.state.inputVal !== "") {
      this.insertNode();
    }
  }

  handleInputIndex(e) {
    this.setState({ inputValIndex: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && this.state.inputVal !== "") {
      this.insertNode();
    }
  }

  handleKeyPressIndex(e) {
    if (e.key === "Enter" && this.state.inputValIndex !== "") {
      this.insertNodeAfterIndex(this.state.inputValIndex);
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
    } 
    else {
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

  deleteFirstNode() {
    if (this.state.head === null) {
      alert("List is empty");
      return;
    }
    this.setState({ head: this.state.head.next });
  }
 


  findNode(value) {
    if (value === "") {
      alert("Please enter a value");
      return false;
    }
    let current = this.state.head;
    while (current !== null) {
      if (current.data === parseInt(value, 10)) {
         this.setState({ foundKey: current.data }); // Update foundKey state with the key of the found node
        return true;
      }
      current = current.next;
    }
    alert("Node not found");
    return false;
  }

  RandomNode(value) {
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

    if(this.state.head !== null) {
      var head = this.state.head;
      var current = this.state.head;
    }
  
    for (let i = 0; i < value; i++) {
      let rand = Math.floor(Math.random() * 100) + 1;
      const newNode = new Node(rand);
  
      if (!head) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = current.next;
      }
    }
  
    this.setState({ head: head, inputVal: "" });
  }

  handleInputIndex(e) {
    this.setState({ inputValIndex: e.target.valueIndex });
  }

  insertNodeAfterIndex(value, index) {
    if (value === "") {
      alert("Please enter a value");
      return;
    }
  
    const newNode = new Node(value);
    let current = this.state.head;
    let currentIndex = 0;
  
    // Handle the case where index is 0 separately
    if (index === 0) {
      newNode.next = current;
      this.setState({ inputValIndex: "", head: newNode });
      return;
    }
  
    // Traverse the list to find the node at the specified index
    while (currentIndex < index && current !== null) {
      current = current.next;
      currentIndex++;
    }
  
    // If current is null, the index is out of range
    if (current === null) {
      alert("Index out of range");
      return;
    }
  
    // Insert the new node after the current node
    newNode.next = current.next;
    current.next = newNode;
  
    this.setState({ inputValIndex: "", head: this.state.head });
    this.setState({ inputVal: "" });
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
        <input className="insert-node"
          type="text"
          value={this.state.inputVal}
          onChange={(e) => this.handleInput(e)}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />
        <button onClick={() => this.deleteNode(this.state.inputVal)}>Delete</button>
        <button onClick={() => this.insertNode()}>Insert</button>
        <button onClick={() => this.findNode(this.state.inputVal)}>Find</button>
        <button onClick={() => this.RandomNode(this.state.inputVal)}>Random</button>
        <button onClick={() => this.deleteFirstNode()}>Delete First</button>
        <button onClick={() => this.setState({ head: null })}>Clear</button>
        <h1> </h1>
        <input
          className="insert-after-index"
          type="text"
          value={this.state.inputValIndex}
          onChange={(e) => this.handleInputIndex(e)} // Use handleInputIndex for this input field
          onKeyPress={(e) => this.handleKeyPressIndex(e)}
        />
        <button onClick={() => this.insertNodeAfterIndex(this.state.inputVal, parseInt(this.state.inputValIndex, 10))}>
          Insert After Index
        </button>
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
