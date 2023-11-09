import React from "react";
import "./LinkedList.css";
import "../styles.css";
import TogglePopup from "../components/TogglePopup.js";
import Node from "../components/Node";

//this class is the linked list itself and it has all the functions for the linked list 
class LinkedList extends React.Component {


  //this constructer is incharge of the state of the linked list 
    constructor(props) {
      super(props);
      this.state = {
        linkedListleangth: 0,
        head: null,
        backNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null},
        ],
        newNumber: "",
        frontNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null},   
        ],
      };
    }
  

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.insertNode();
    }
  }

  //this function is used to insert a node into the linked list 
  insertNode() {
    const { newNumber, frontNodes , backNodes } = this.state;
    const linkedList = [...backNodes];
    if(newNumber === "") {
      alert("Please enter a number");
    }
    if(isNaN(newNumber)) {
      alert("Please enter a number");
    }
    //i want that if the head is null i will ad a node to the head
    if(this.state.head === null) {
       //delete the head node
       this.cleanArray(frontNodes);
       this.cleanArray(backNodes);
       if (newNumber) { 
        const newData = parseInt(newNumber);
        const newNode = {
          data: newData,
          Xmovment: [0],
          Ymovment: [],
          color: ['hsl(196, 100, 40)']
        };
        this.setState({
          head: newNode,
          frontNodes: [newNode],
          backNodes: [newNode],
        });
       this.state.head = new Node(newNumber);
       this.state.linkedlistleangth++;
      }
    }

    else {
      this.cleanArray(frontNodes);
      this.cleanArray(backNodes);
      if (newNumber) {
        const newData = parseInt(newNumber);
        const newNode = {
          data: newData,
          Xmovment: [-50,100,150,0],
          Ymovment: [50,0],
          color: ['hsl(196, 100, 40)']
        };
        
        let addedArray = [...frontNodes];
  
        this.setState({
          frontNodes: [...addedArray , newNode], // Update nodes with the new data
          backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
          newNomber : "", // Clear the input field
        });
     }
     this.state.linkedlistleangth++;
    }    
  }
  
  //this function is used to delete a node from the linked list
  deleteNode() {
  }

  //this function is used to delete the first node from the linked list
  deleteFirstNode() {
  }
 
  //this function is used to find a node in the linked list
  findNode() {
  }

  //this function is used to generate a random node in the linked list
  RandomNode() {
  }

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Xmovment = [0];
      nodes[i].color = ['hsl(196, 100, 40)'];
    }
  }


  render() {
    const {frontNodes , newNumber, node} = this.state;


    return (
      <div className="LinkedList">
      <h1>Linked List</h1>
      <input className="insert-node"
        type="text"
        value={newNumber}
        onChange={this.handleInput}
        onKeyPress={(e) => this.handleKeyPress(e)}
      />
      <button onClick={() => this.deleteNode()}>Delete</button>
      <button onClick={() => this.insertNode()}>Insert</button>
      <button onClick={() => this.findNode()}>Find</button>
      <button onClick={() => this.RandomNode()}>Random</button>
      <button onClick={() => this.deleteFirstNode()}>Delete First</button>
      <button onClick={() => this.setState()}>Clear</button>
      <h1> </h1>
      <div className="array-container"> 
      { this.state.head === null ? null : (frontNodes.map((node, index) => ( 
        <Node
          data={node.data}
          Xmovment={node.Xmovment}
          Ymovment={node.Ymovment}
          duration={5}
          showPointer={false}
        />
      )))}
    </div>
        <TogglePopup />
      </div>
    );
  }
}

export default LinkedList;