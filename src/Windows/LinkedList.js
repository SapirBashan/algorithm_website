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
        linkedListleangth: 1,
        head: null,
        backNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null, showPointer: false},
        ],
        newNumber: "",
        frontNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null, showPointer: false},   
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
    console.log(this.state.linkedListleangth);

    if(newNumber === "") {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    if(isNaN(newNumber)) {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
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
          color: ['hsl(196, 100, 40)'],
        };
        this.setState({
          head: newNode,
          frontNodes: [newNode],
          backNodes: [newNode],
          newNumber: "",
          linkedlistleangth: this.state.linkedListleangth + 1,

        });
       this.state.head = new Node(newNumber);
      }
    }

    else {
      this.cleanArray(frontNodes);
      this.cleanArray(backNodes);
      if (newNumber) {
        const newData = parseInt(newNumber);
        const newNode = {
          data: newData,
          Xmovment: [ (-75 + (-40*linkedList.length)),6,8,0],
          Ymovment: [50,50,0],
          color: ['hsl(196, 100, 40)']
        };
         //this code makes the node before show the pointer
        frontNodes[frontNodes.length - 1].showPointer = true;
        
        let addedArray = [...frontNodes];
  
        this.setState({
          frontNodes: [...addedArray , newNode], // Update nodes with the new data
          backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
          newNumber: "",
          linkedlistleangth: this.state.linkedListleangth + 1,
        });
     }
    }    
  }
  
  //this function is used to delete a node from the linked list
  deleteNodeAfterIndex() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];
    console.log(this.state.linkedListleangth);
    
    if(newNumber === "") {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    else if(isNaN(newNumber)) {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    else if(newNumber < 0)
    {
      alert("Please enter a positive number");
      this.state.newNumber = ""
      return;
    }
    else if(newNumber > linkedList.length) {
      alert("Please enter a number smaller then the linked list length");
      this.state.newNumber = ""
      return;
    }
    else{
    //delete the node in the index with animation
    let newFrontNodes = [...frontNodes];
    let newBackNodes = [...backNodes];
    let index = newNumber;

    newFrontNodes[index].Xmovment = [0];
    newFrontNodes[index].Ymovment = [90];
    newFrontNodes[index].color = ['hsl(12, 100, 50)'];
    newFrontNodes[index].duration = 5;

    newFrontNodes.splice(index, 1);
    newBackNodes.splice(index, 1);

    this.setState({
      frontNodes: newFrontNodes,
      backNodes: newBackNodes,
      linkedlistleangth: this.state.linkedlistleangth - 1,
      newNumber: "",
    });
  }
  }

  //this function is used to delete the first node from the linked list
  deleteFirstNode() {
     const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];

    if(this.state.head === null) {
      alert("The linked list is empty");
      return;
    }
    if(linkedList.length === 0) {
      alert("The linked list is empty");
      return;
    }


    let newHead = linkedList[1]; 
    let newFrontNodes = [...frontNodes];
    let newBackNodes = [...backNodes];
       
    //delete the head node with animation
    newFrontNodes[0].Xmovment = [0];
    newFrontNodes[0].Ymovment = [90];
    newFrontNodes[0].color = ['hsl(12, 100, 50)'];
    newFrontNodes[0].duration = 5;

    newFrontNodes.shift();
    newBackNodes.shift();

    this.setState({
      frontNodes: newFrontNodes,
      backNodes: newBackNodes,
      head: newHead,
    });

    if(linkedList.length === 1) {
      this.setState({
        head: null,
        frontNodes: [],
        backNodes: [],
        newNumber: "",
      });
    }

    
  }
   
  //this function is used to find a node in the linked list
  findNode() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];
    let listOfNodes = [];

    for(let i = 0; i < linkedList.length; i++) {
      if(linkedList[i].data === parseInt(newNumber)) {
        listOfNodes.push(i);
      }
    }
    if(listOfNodes.length === 0) {
      alert("The number is not in the linked list");
      return;
    }
    else{
      for(let i = 0; i < listOfNodes.length; i++) {
        frontNodes[listOfNodes[i]].color = ['hsl(0, 100, 50)'];
      }
    }

    alert(listOfNodes)




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
    const { frontNodes, newNumber, node } = this.state;
  
    return (
      <div className="LinkedList">
        <h1>Linked List</h1>
        <input
          className="insert-node"
          type="number"
          value={newNumber}
          placeholder="Enter a number"
          onChange={this.handleInput}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />        
        <button onClick={() => this.insertNode()}>Insert</button>        
        <button onClick={() => this.deleteFirstNode()}>Delete First</button>
        <button onClick={() => this.deleteNodeAfterIndex()}>Delete index</button>
        <button onClick={() => this.findNode()}>Find</button>
        <button onClick={() => this.RandomNode()}>Random</button>
        <button onClick={() => this.setState({ head: null, frontNodes: [], backNodes: [], newNumber: "" })}>
          Clear
        </button>
        <h1> </h1>
        <div className="array-container-list">
          {this.state.head === null ? null : (
            frontNodes.map((node, index) => (
              <Node
                data={node.data}
                Xmovment={node.Xmovment}
                Ymovment={node.Ymovment}
                duration={5}
                showPointer={node.showPointer}
              />
            ))
          )}
        </div>
        <TogglePopup />
      </div>
    );
  }
}

export default LinkedList;