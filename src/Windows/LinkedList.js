import React from "react";
import "./LinkedList.css";
import "../styles.css";

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
    if(this.state.inputVal > 9999 || this.state.inputVal < -999) {
      alert("Please enter a number between -999 and 9999");
      return;
    }
    const newNode = new Node(this.state.inputVal);
    if (!this.state.head) {
      this.setState({ head: newNode });
    } 
    else { 
         let current = this.state.head;
         while (current.next) {
            current = current.next;
         }
         current.next = newNode;
    }
    this.setState({ inputVal: "" });
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
       break;
     }
     prev = current;
     current = current.next;
   }
   if (current === null) {
     alert("Node not found");
   }
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

 render() {
   let nodes = [];
   let arrows = [];
   let current = this.state.head;

   while (current !== null) {
     nodes.push(
       <div
         key={current.data}
         className={`block ${this.state.foundKey === current.data ? 'found' : ''}`}
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
       <h1> </h1>
       <div className="linked-list-container">
         {nodes.map((node, index) => (
           <React.Fragment key={index}>
             {node}
             {arrows[index]}
           </React.Fragment>
         ))}
       </div>
     </div>
   );
 }
}

export default LinkedList;
