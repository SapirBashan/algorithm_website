
import React, { Component } from "react";
import "./BubbleSort.css";
import Node from "../components/Node";
import { m } from "framer-motion";

class BubbleSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [
        { data: 6, Xmovment: [], Ymovment: [0] , index: 0},
        { data: 2, Xmovment: [], Ymovment: [0] , index: 1},
        { data: 9, Xmovment: [], Ymovment: [0] , index: 2},
        { data: 1, Xmovment: [], Ymovment: [0] , index: 3},
        { data: 5, Xmovment: [], Ymovment: [0] , index: 4},
        { data: 3, Xmovment: [], Ymovment: [0] , index: 5},
      ],
      newNumber: "",
      newNodes: [],
    };
  }

  addYMovementToNode = (nodeIndex, movement , nodes) => {
  
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      // Create a copy of the nodes array
      const updatedNodes = [...nodes];
      // Create a copy of the node at the nodeIndex
      const updatedNode = { ...updatedNodes[nodeIndex] };
      // Create a copy of the Ymovment array
      const updatedYmovment = [...updatedNode.Ymovment];
      // Add the movement value to the Ymovment array
      const value = updatedYmovment[updatedYmovment.length - 1];
      // Add the movement value to the Ymovment array
      const movementValue = movement + value; 
      // Add the movement value to the Ymovment array
      updatedNodes[nodeIndex].Ymovment.push(movementValue);
    }
  };

  bubbleSort = () => {
    // create a copy of the nodes array
    const nodes = [...this.state.nodes];
    // set the nomber of nodes
    let n = nodes.length;

    // create a variable to check if the array is sorted
    let swapped;

    // create a variable to check if the node is moving
    let move;
  
    // Loop through the array n times
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      // Loop through the array from 0 to n - i - 1
      for (let j = 0; j < n - i - 1; j++) {
        move = false;
        // If the node at the current index is greater than the node at the next index
        if (nodes[j].data > nodes[j + 1].data) {
          move = true;
          //add movment to the nodes that are moving
          //take the last element in the Ymovment array and decrease its value by 70 to move it down
          this.addYMovementToNode(j, 50, nodes);
          //take the last element in the Ymovment array and add 70 to its value to move it up
          this.addYMovementToNode(j + 1,-50 , nodes);
          // Swap the nodes in the data array
          [nodes[j], nodes[j + 1]] = [nodes[j + 1], nodes[j]];
          swapped = true;
        }
        //add movment in place of the nodes that are not moving
        for(let k = 0; k < n; k++) {
            // if the node is not moving or if there was no swap
            if((k !== j && k !== j + 1) || move === false) {
                //add the last element in the Ymovment array to the Ymovment array
              this.addYMovementToNode(k, 0 , nodes);
            }
        }
        // If no two elements were swapped
        // by inner loop, then break
      }
        if (swapped === false)
            break;
      }

    //this.setState({ nodes: nodes });
  };

  animate = () => {
    // call the bubbleSort function that will sort the array in the function only and add the movment to the nodes array
    this.bubbleSort();
    this.setState({ newNodes: this.state.nodes });
  }

  render() {
    const {newNodes , nodes, newNumber } = this.state;

    return (
      <div className="BubbleSort">
        <h1>Bubble Sort</h1>
        <button className="button" onClick={this.animate} >Sort Array</button>
        <br />
        <div className="array-container">
          {newNodes.map((node, index) => (
            <Node
              data={node.data}
              Xmovment={node.Xmovment}
              Ymovment={node.Ymovment}
              duration={15}
              showPointer={false}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BubbleSort;
