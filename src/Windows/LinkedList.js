import React, { useEffect } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      found: false,
      inProcess: false,
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
      toast.error("Please enter a number");
      this.state.newNumber = "";
      return;
    }
    if (isNaN(value)) {
      toast.error("Please enter a number");
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
        linkedList[linkedList.length - 1].showPointer = true;

        let addedArray = [...linkedList];

        this.setState({
          frontNodes: [...addedArray, newNode], // Update nodes with the new data
          backNodes: [...addedArray, newNode], // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
          newNumber: "",
        });
      }
    }
  }

  // This function is used to delete the node after the specified index from the linked list
  deleteNodeAfterIndex(index) {
    // update the frontNodes to be the backNodes
    const { frontNodes, deleted, backNodes, head, inProcess } = this.state;

    index = parseInt(index);
    // Check if deletion is already in progress
    if (inProcess) {
      toast.info("Deletion in progress. Please wait.");
      return;
    }

    if (backNodes.length === 0) {
      toast.error("The linked list is empty");
      return;
    }

    if (index === undefined) {
      toast.error("Please enter an index");
      return;
    }

    if (backNodes.length === 1) {
      this.setState({
        head: null,
        frontNodes: [],
        backNodes: [],
        newNumber: "",
      });
      return;
    }

    // Ensure that the index is valid
    if (index < 0 || index >= backNodes.length - 1) {
      toast.error("Invalid index for deletion.");
      return;
    }

    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    const linkedList = [...backNodes];

    if (head === null || linkedList.length === 0) {
      toast.error("The linked list is empty");
      return;
    }

    if (deleted) {
      linkedList[index].Xmovment = [0, 0, -190 * linkedList.length];
      linkedList[index].Ymovment = [0, -90, -90];
      linkedList[index].color.push(
        "hsl(0, 100, 50)", //red
        "hsl(0, 100, 50)", //red
        "hsl(196, 100, 40)" //blue
      );
      linkedList[index].duration = 5;

      for (let i = index + 1; i < linkedList.length; i++) {
        linkedList[i].Xmovment = [0, -92];
        linkedList[i].Ymovment = [0, 0];
        linkedList[i].color.push("hsl(196, 100, 40)");
      }
    } else {
      linkedList[index].Xmovment = [0, 0, -191 * linkedList.length];
      linkedList[index].Ymovment = [0, -91, -91];
      linkedList[index].color.push(
        "hsl(0, 100, 51)", //red
        "hsl(0, 100, 51)", //red
        "hsl(196, 100, 41)" //blue
      );

      linkedList[index].duration = 6;

      for (let i = index + 1; i < linkedList.length; i++) {
        linkedList[i].Xmovment = [0, -90];
        linkedList[i].Ymovment = [0, 0];
        linkedList[i].color.push("hsl(196, 100, 40)");
      }
    }

    // Update the state for deletion after the specified index
    this.setState({
      frontNodes: linkedList,
      backNodes: backNodes.filter((_, i) => i !== index),
      deleted: !deleted,
      inProcess: true,
    });

    // Reset the inProcess flag after 6 seconds
    setTimeout(() => {
      this.cleanArray(backNodes);
      this.setState({
        frontNodes: backNodes.filter((_, i) => i !== index),
        inProcess: false,
      });
    }, 6000);
  }

  //this function is used to delete the first node from the linked list
  deleteFirstNode() {
    // update the frontNodes to be the backNodes
    const { frontNodes, deleted, backNodes, head, inProcess } = this.state;

    // Check if deletion is already in progress
    if (inProcess) {
      toast.info("Deletion in progress. Please wait.");
      return;
    }

    //if the linked list is only one node then delete it by clearing the array
    if (backNodes.length === 1) {
      this.setState({
        head: null,
        frontNodes: [],
        backNodes: [],
        newNumber: "",
      });
      return;
    }

    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    const linkedList = [...backNodes];

    if (head === null || linkedList.length === 0) {
      toast.error("The linked list is empty");
      return;
    }

    if (deleted) {
      linkedList[0].Xmovment = [0, 0, -190];
      linkedList[0].Ymovment = [0, -90, -90];
      linkedList[0].color.push(
        "hsl(0, 100, 50)", //red
        "hsl(0, 100, 50)", //red
        "hsl(196, 100, 40)" //blue
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
        "hsl(0, 100, 51)", //red
        "hsl(0, 100, 51)", //red
        "hsl(196, 100, 41)" //blue
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
      inProcess: true,
    });

    setTimeout(() => {
      this.cleanArray(backNodes);
      this.setState({
        frontNodes: backNodes.slice(1),
        inProcess: false,
      });
    }, 6000);
  }

  //this function is used to find a node in the linked list
  findNode() {
    const { newNumber, frontNodes, backNodes, head, found } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);
    const linkedList = [...backNodes];
    const movment = [];
    const color = [];
    if (head === null || linkedList.length === 0) {
      toast.error("The linked list is empty");
      this.state.newNumber = "";
      return;
    }
    if (newNumber === "") {
      toast.error("Please enter a number");
      this.state.newNumber = "";
      return;
    }

    //for to collect all the movment the search node will need to do (he'll need to go on each node and move to the next one)
    for (let i = 0; i < linkedList.length; i++) {
      if (found) {
        movment.push(-90 * linkedList.length + 30 + 90 * i);
        movment.push(-90 * linkedList.length + 30 + 90 * i);
      } else {
        movment.push(-90 * linkedList.length + 31 + 90 * i);
        movment.push(-90 * linkedList.length + 31 + 90 * i);
      }
      color.push("hsla(120, 100, 50, 0.2)"); //orange

      if (linkedList[i].data === parseInt(newNumber)) {
        color.push("hsla(120, 100, 50, 0.7)"); //green
        //green//if the node is found
        //the node will be highlighted in green when the search node is on it
        //meaning that that first there will be i blue steps and then green steps
        for (let j = 0; j < i; j++) {
          linkedList[i].color.push("hsl(196, 100, 40)"); //blue
        }
        linkedList[i].color = linkedList[i].color.concat("hsl(120, 80, 33)"); //green
        linkedList[i].colorDuration = color.length - 1;
        setTimeout(() => {
          linkedList[i].color = linkedList[i].color.concat("hsl(196, 100, 40)"); //blue
          this.setState({ frontNodes: frontNodes });
        }, linkedList.length * 1000 + 5000);
      }
    }
    //the search node will becoam transparent complitly when he is on the last node
    color.push(color[color.length - 1]);
    color.push(color[color.length - 1]);

    const highlightedNodes = {
      className: "Search-Node",
      Xmovment: movment,
      Ymovment: [],
      colorDuration: color.length - 2,
      color: color,
      duration: linkedList.length,
    };

    this.setState({
      frontNodes: [...linkedList, highlightedNodes],
      backNodes: backNodes,
      found: !found,
      newNumber: "",
    });

    setTimeout(() => {
      this.setState({ frontNodes: frontNodes });
    }, linkedList.length * 1000 + 3000);
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
      nodes[i].color = ["hsl(196, 100, 40)"];
    }
    this.setState({ nodes: nodes });
    return nodes;
  };

  showToast = (message, options = {}) => {
    toast.error(message, {
      position: options.position || "top-center",
      autoClose: options.autoClose || 3000,
      hideProgressBar: options.hideProgressBar || false,
      closeOnClick: options.closeOnClick || true,
      pauseOnHover: options.pauseOnHover || true,
      draggable: options.draggable || true,
      progress: options.progress || undefined,
      theme: options.theme || "dark",
    });
  };

  render() {
    const { frontNodes, firstNode, newNumber, node } = this.state;

    return (
      <div>
        <UpperMenu nameOfPage={"Linked List"} search={false} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
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
                      colorDuration={node.colorDuration || false}
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
                onClick={() => this.deleteNodeAfterIndex(newNumber)}
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
