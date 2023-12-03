import React from "react";
import "./LinkedList.css";
import "../styles.css";
import Node from "../components/Node";
import UpperMenu from "../components/UpperMenu.js";
import GenericPage from "../components/GenericPage.js";
import { useState } from "react";
import {
  explanationLinkedList,
  pythonCodeLinkedList,
  javaCodeLinkedList,
  cppCodeLinkedList,
  pseudoCodeLinkedList,
} from "../components/data.js";

//this class is the linked list itself and it has all the functions for the linked list
class LinkedList extends React.Component {
  //this constructer is incharge of the state of the linked list
  constructor(props) {
    super(props);
    this.state = {
      head: null,
      backNodes: [],
      newNumber: "",
      frontNodes: [],
      deleted: false,
    };
  }

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  };

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.insertNode(this.state.newNumber);
    }
  }

  //this function is used to insert a node into the linked list
  insertNode(value) {
    const { newNumber, frontNodes, backNodes } = this.state;
    const linkedList = [...backNodes];

    if (value === "") {
      alert("Please enter a number");
      this.state.newNumber = "";
      return;
    }
    if (isNaN(value)) {
      alert("Please enter a number");
      this.state.newNumber = "";
      return;
    }
    //i want that if the head is null i will ad a node to the head
    if (this.state.head === null) {
      //delete the head node
      this.cleanArray(frontNodes);
      this.cleanArray(backNodes);
      if (value) {
        const newData = parseInt(value);
        const newNode = {
          data: newData,
          Xmovment: [0],
          Ymovment: [],
          color: ["hsl(196, 100, 40)"],
        };
        this.setState({
          head: newNode,
          frontNodes: [newNode],
          backNodes: [newNode],
          newNumber: "",
        });
        this.state.head = new Node(value);
      }
    } else {
      this.cleanArray(frontNodes);
      this.cleanArray(backNodes);
      if (value) {
        const newData = parseInt(value);
        const newNode = {
          data: newData,
          Xmovment: [-75 + -40 * linkedList.length * 2, 6, 8, 0],
          Ymovment: [50, 50, 0],
          color: ["hsl(196, 100, 40)"],
        };
        //this code makes the node before show the pointer
        frontNodes[frontNodes.length - 1].showPointer = true;

        let addedArray = [...linkedList];

        this.setState({
          frontNodes: [...addedArray, newNode], // Update nodes with the new data
          backNodes: [...addedArray, newNode], // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
          newNumber: "",
        });
      }
    }
  }

  //this function is used to delete a node from the linked list
  deleteNodeAfterIndex() {
    const { newNumber, frontNodes, backNodes, head } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);
    const linkedList = [...backNodes];
    console.log(this.state.linkedListleangth);

    if (newNumber === "") {
      alert("Please enter a number");
      this.state.newNumber = "";
      return;
    } else if (isNaN(newNumber)) {
      alert("Please enter a number");
      this.state.newNumber = "";
      return;
    } else if (newNumber < 0) {
      alert("Please enter a positive number");
      this.state.newNumber = "";
      return;
    } else if (newNumber > linkedList.length) {
      alert("Please enter a number smaller then the linked list length");
      this.state.newNumber = "";
      return;
    } else {
      //delete the node in the index with animation
      let newFrontNodes = [...frontNodes];
      let newBackNodes = [...backNodes];
      let index = newNumber;

      newFrontNodes[index].Xmovment = [0];
      newFrontNodes[index].Ymovment = [90];
      newFrontNodes[index].color = ["hsl(12, 100, 50)"];
      newFrontNodes[index].duration = 5;

      newFrontNodes.splice(index, 1);
      newBackNodes.splice(index, 1);

      this.setState({
        frontNodes: newFrontNodes,
        backNodes: newBackNodes,
        newNumber: "",
      });
    }
  }

  //this function is used to delete the first node from the linked list
  deleteFirstNode() {
    // update the frontNodes to be the backNodes
    const { frontNodes, deleted, backNodes, head } = this.state;

    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    const linkedList = [...backNodes];

    if (head === null) {
      alert("The linked list is empty");
      return;
    }
    if (linkedList.length === 0) {
      alert("The linked list is empty");
      return;
    }

    if (deleted) {
      linkedList[0].Xmovment = [0, 0, -190];
      linkedList[0].Ymovment = [0, -90, -90];
      linkedList[0].color.push(
        "hsl(0, 100, 50)",
        "hsl(0, 100, 50)",
        "hsl(196, 100, 40)"
      );
      linkedList[0].duration = 5;

      for (let i = 1; i < linkedList.length; i++) {
        linkedList[i].Xmovment = [0, -91];
        linkedList[i].Ymovment = [0, 0];
        linkedList[i].color.push("hsl(196, 100, 40)");
      }
    } else {
      linkedList[0].Xmovment = [0, 0, -191];
      linkedList[0].Ymovment = [0, -91, -91];
      linkedList[0].color.push(
        "hsl(0, 100, 51)",
        "hsl(0, 100, 51)",
        "hsl(196, 100, 41)"
      );
      linkedList[0].duration = 6;

      for (let i = 1; i < linkedList.length; i++) {
        linkedList[i].Xmovment = [0, -90];
        linkedList[i].Ymovment = [0, 0];
        linkedList[i].color.push("hsl(196, 100, 40)");
      }
    }

    //  the frontNodes will be the linkedlist and the backNodes will be the backNodes from index 1 to the end
    this.setState({
      frontNodes: linkedList,
      backNodes: backNodes.slice(1),
      deleted: !deleted,
    });
  }

  //this function is used to find a node in the linked list
  findNode() {
    const { newNumber, frontNodes, backNodes, head } = this.state;
    const linkedList = [...backNodes];
    const movment = [];
    const color = [];
    //for to collect all the movment the search node will need to do (he'll need to go on each node and move to the next one)
    for (let i = 0; i < linkedList.length; i++) {
      movment.push(-90 * linkedList.length + 30 + 90 * i);
      movment.push(-90 * linkedList.length + 30 + 90 * i);
      if (linkedList[i].data === parseInt(newNumber)) {
        //todo
        //if the node is found
        //the node will be highlighted in green when the search node is on it
        //meaning that that first there will be i blue steps and then green steps
        for (let j = 0; j < i; j++) {
          color.push("hsl(196, 100, 40)");
        }
        color.push("hsl(120, 100, 50)");
      }
    }

    const highlightedNodes = {
      className: "Search-Node",
      Xmovment: movment,
      Ymovment: [],
      duration: linkedList.length,
    };
    linkedList.push(highlightedNodes);

    this.setState({
      frontNodes: linkedList,
      backNodes: backNodes,
      newNumber: "",
    });
  }

  //this function is used to generate a random node in the linked list
  RandomNode() {
    let random = Math.floor(Math.random() * 100) + 1;
    this.insertNode(random);
  }

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Xmovment = [0];
      nodes[i].Ymovment = [0];
      nodes[i].color = [];
    }
  };

  render() {
    const { frontNodes, firstNode, newNumber, node } = this.state;

    return (
      <div>
        <UpperMenu nameOfPage={"Linked List"} search={false} />
        <GenericPage
          explanation={explanationLinkedList}
          pythonCode={pythonCodeLinkedList}
          javaCode={javaCodeLinkedList}
          cppCode={cppCodeLinkedList}
          pseudoCode={pseudoCodeLinkedList}
          presentational={
            <div className="array-container-list">
              {this.state.head === null
                ? null
                : frontNodes.map((node, index) => (
                    <Node
                      data={node.data}
                      Xmovment={node.Xmovment}
                      Ymovment={node.Ymovment}
                      duration={node.duration || 5}
                      color={node.color}
                      className={node.className || false}
                      showPointer={node.showPointer}
                    />
                  ))}
            </div>
          }
          buttons={
            <div>
              <input
                className="insert"
                type="number"
                value={newNumber}
                placeholder="Enter a number"
                onChange={this.handleInput}
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
              <button
                className="side-button"
                onClick={() => this.insertNode(this.state.newNumber)}
              >
                Insert
              </button>
              <button
                className="side-button"
                onClick={() => {
                  this.deleteFirstNode();
                }}
              >
                Delete First
              </button>
              <button
                className="side-button"
                onClick={() => this.deleteNodeAfterIndex()}
              >
                Delete index
              </button>
              <button className="side-button" onClick={() => this.findNode()}>
                Find
              </button>
              <button className="side-button" onClick={() => this.RandomNode()}>
                Random
              </button>
              <button
                className="side-button"
                onClick={() =>
                  this.setState({
                    head: null,
                    frontNodes: [],
                    backNodes: [],
                    newNumber: "",
                  })
                }
              >
                Clear
              </button>
            </div>
          }
        />
      </div>
    );
  }
}

export default LinkedList;
