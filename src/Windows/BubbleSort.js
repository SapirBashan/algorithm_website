
import React, { Component } from "react";
import "./BubbleSort.css";
import Node from "../components/Node";

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
    };
  }

  addYMovementToNode = (nodeIndex, movement) => {
    const { nodes } = this.state;
  
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      const updatedNodes = [...nodes];
      updatedNodes[nodeIndex].Ymovment.push(movement); // Add -50 to the Ymovment array
  
      this.setState({ nodes: updatedNodes });
    }
  };

  bubbleSort = async () => {
    const nodes = [...this.state.nodes];
    let n = nodes.length;
    let swapped;
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (nodes[j].data > nodes[j + 1].data) {
          
          // Swap the nodes on the screen with smooth animation
          this.addYMovementToNode(j, nodes[j].Ymovment[nodes[j].Ymovment.length - 1] - 70);
          this.addYMovementToNode(j + 1, nodes[j + 1].Ymovment[nodes[j + 1].Ymovment.length - 1]+ 70);
          //add unmovment to the nodes that are not moving

          for(let k = 0; k <= n-1; k++) {
            if(k !== j && k !== j+1) {
              this.addYMovementToNode(k, nodes[k].Ymovment[nodes[k].Ymovment.length - 1]);
            }
          }
  
          // // Wait for 1 second using async/await
          // await new Promise((resolve) => setTimeout(resolve, 1000));
  
          // Swap the nodes in the data array
          [nodes[j], nodes[j + 1]] = [nodes[j + 1], nodes[j]];
          swapped = true;
        }
      }
  
      if (!swapped) {
        break; // If no swaps were made in this pass, the array is already sorted
      }
    }
  
    this.setState({ nodes });
  };
  

  render() {
    const { nodes, newNumber } = this.state;

    return (
      <div className="BubbleSort">
        <h1>Bubble Sort</h1>
        <button className="button" onClick={this.bubbleSort}>Sort Array</button>
        <br />
        <div className="array-container">
          {nodes.map((node, index) => (
            <Node
              data={node.data}
              Xmovment={node.Xmovment}
              Ymovment={node.Ymovment}
              duration={5}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BubbleSort;
