import React, { Component } from "react";
import "./InsertionSort.css";
import Node from "../components/Node";
import UpperMenu from "../components/UpperMenu";
import GenericPage from "../components/GenericPage";
import "../styles.css";
import {
  pythonCodeInsertion,
  javaCodeInsertion,
  cppCodeInsertion,
  pseudoCodeInsertion,
  explanationInsertion,
} from "../components/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class SelectionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backNodes: [],
      newNumber: "",
      frontNodes: [],
      sorted: false,
      volume: 0,
      setVolume: (volume) => this.setState({ volume }),
    };
  }

  addXMovementToNode = (nodeIndex, movement, nodes, color) => {
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      // Create a copy of the nodes array
      const updatedNodes = [...nodes];
      // Create a copy of the node at the nodeIndex
      const updatedNode = { ...updatedNodes[nodeIndex] };
      // Create a copy of the Xmovement array
      const updatedXmovement = [...updatedNode.Xmovment];
      // create a copy of the color array
      //const updatedColor = [...updatedNode.color];
      // Add the movement value to the Xmovement array
      const value = updatedXmovement[updatedXmovement.length - 1];
      // Add the movement value to the Xmovment array
      const movementValue = movement + value;
      // Add the movement value to the movment array
      updatedNodes[nodeIndex].Xmovment.push(movementValue);
      // Add the color value to the color array
      updatedNodes[nodeIndex].color.push(color);
    }
  };

  addYMovementToNode = (nodeIndex, movement, nodes, color) => {
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      // Create a copy of the nodes array
      const updatedNodes = [...nodes];
      // Create a copy of the node at the nodeIndex
      const updatedNode = { ...updatedNodes[nodeIndex] };
      // Create a copy of the Ymovment array
      const updatedYmovement = [...updatedNode.Xmovment];
      // create a copy of the color array
      //const updatedColor = [...updatedNode.color];
      // Add the movement value to the Xmovement array
      const value = updatedYmovement[updatedYmovement.length - 1];
      // Add the movement value to the Ymovment array
      const movementValue = movement + value;
      // Add the movement value to the Ymovment array
      updatedNodes[nodeIndex].Ymovment.push(movementValue);
      // Add the color value to the color array
      updatedNodes[nodeIndex].color.push(color);
    }
  };

  selectionSort = () => {
    if (this.state.sorted === true) {
      return;
    }

    const nodes = [...this.state.backNodes];
    this.cleanArray(this.state.backNodes);

    let green = "hsl(120, 100, 25)"; // for the min element
    let blue = "hsl(196, 100, 40)"; // for the rest of the elements
    let red = "hsl(0, 100, 50)"; // for the elements being compared
    let yellow = "hsl(60, 100, 50)"; // for the sorted elements
    let cyan = "hsl(180, 100, 50)"; // for swapped elements

    let swap;
    let n = nodes.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      swap = false;

      // Highlight the current element in green
      this.addXMovementToNode(i, 0, nodes, green);
      // for the colors to be synced with the animation speed we need to add the colors to the rest of the elements
      for (let j = i + 1; j < n; j++) {
        this.addXMovementToNode(j, 0, nodes, blue);
      }

      // Find the minimum element in the unsorted array [i..n-1]
      for (let j = i + 1; j < n; j++) {
        // Highlight the nodes being compared in blue
        this.addXMovementToNode(j, 0, nodes, red);
        // Highlight the minimum element in green for sync with the animation speed
        this.addXMovementToNode(minIndex, 0, nodes, green);
        // Highlight the rest of the elements in blue for sync with the animation speed
        for (let k = i; k < n; k++) {
          if (k !== minIndex && k !== j) {
            this.addXMovementToNode(k, 0, nodes, blue);
          }
        }

        //if the current element is less than the minimum element
        //then update the minimum element
        if (nodes[j].data < nodes[minIndex].data) {
          swap = true; // flag to check if there was a swap
          //update the minimum index
          minIndex = j;
          // Highlight the new minimum element in green
          this.addXMovementToNode(minIndex, 0, nodes, green);
          // Highlight the rest of the elements in blue for sync with the animation speed
          for (let k = i; k < n; k++) {
            if (k !== minIndex) {
              this.addXMovementToNode(k, 0, nodes, blue);
            }
          }
        }
      }

      if (swap === true) {
        // Swap the minimum element with the current element
        this.addXMovementToNode(minIndex, -60 * (minIndex - i), nodes, cyan);
        this.addXMovementToNode(i, 60 * (minIndex - i), nodes, cyan);
        for (let k = i + 1; k < n; k++) {
          if (k !== minIndex && k !== i) {
            this.addXMovementToNode(k, 0, nodes, blue);
          }
        }
        this.addXMovementToNode(minIndex, 0, nodes, yellow);
        [nodes[i], nodes[minIndex]] = [nodes[minIndex], nodes[i]];
      } else {
        // Highlight the current element in yellow
        this.addXMovementToNode(minIndex, 0, nodes, yellow);
      }

      // sync the colors with the animation speed and reset the colors
      for (let k = i + 1; k < n; k++) {
        this.addXMovementToNode(k, 0, nodes, blue);
      }

      // this process ensures that elements before the current index (i) have the same amount of movements (0 movements)),
      // and the movement for each of these elements is determined by subtracting the cumulative
      // number of movements of preceding elements from the number of movements of the element at index i.
      // movment(k<i).movment.size = element(i).movement - elements(k<i).movement

      for (let k = 0; k < i; k++) {
        let size = nodes[i].Xmovment.length - nodes[k].Xmovment.length;
        for (let j = 0; j < size; j++) {
          this.addXMovementToNode(k, 0, nodes, yellow);
        }
      }
    }

    this.setState({
      sorted: true,
    });
  };

  animate = () => {
    const nodesCopy = [...this.state.backNodes];
    this.selectionSort();
    this.setState({
      frontNodes: nodesCopy,
      sorting: true,
    });
  };

  handleChange = (e) => {
    this.setState({ newNumber: e.target.value });
  };

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.addNumber();
    }
  }

  addNumber = () => {
    const { newNumber, frontNodes, backNodes, sorted } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if (isNaN(newNumber)) {
      toast.error("Please enter a number", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      this.state.newNumber = "";
      return;
    }

    if (newNumber === "") {
      toast.error("the input is empty", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const newData = parseInt(newNumber);
    const newNode = {
      data: newData,
      Xmovment: [0],
      Ymovment: [0],
      color: ["hsl(196, 100, 40)"],
    };

    let addedArray = [...frontNodes];

    if (sorted === true) {
      addedArray = addedArray.sort((a, b) => a.data - b.data);
    }

    this.setState({
      frontNodes: [...addedArray, newNode],
      backNodes: [...addedArray, newNode],
      newNumber: "",
      sorted: false,
    });
  };

  shuffleArray = () => {
    const { frontNodes, backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if (frontNodes.length === 0) {
      toast.error("the array is empty", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const shuffledNodes = [...frontNodes];
    for (let i = shuffledNodes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNodes[i], shuffledNodes[j]] = [
        shuffledNodes[j],
        shuffledNodes[i],
      ];
    }

    this.setState({
      frontNodes: shuffledNodes,
      backNodes: shuffledNodes,
      sorted: false,
    });
  };

  random = () => {
    const { newNumber, frontNodes, backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if (newNumber === "") {
      toast.error("the input is empty", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const randomNodes = [];
    for (let i = 0; i < newNumber; i++) {
      const newData = Math.floor(Math.random() * (100 - -100 + 1) + -100);
      const newNode = {
        data: newData,
        Xmovment: [0],
        Ymovment: [0],
        color: ["hsl(196, 100, 40)"],
      };
      randomNodes.push(newNode);
    }

    this.setState({
      frontNodes: randomNodes,
      backNodes: randomNodes,
      newNumber: "",
      sorted: false,
    });
  };

  erase = () => {
    this.setState({
      frontNodes: [],
      backNodes: [],
      newNumber: "",
      sorted: false,
    });
  };

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Xmovment = [0];
      nodes[i].Ymovment = [0];
      nodes[i].color = ["hsl(196, 100, 40)"];
    }
  };

  render() {
    const { frontNodes, newNumber, volume, setVolume } = this.state;

    return (
      <div>
        <UpperMenu nameOfPage={"SelectionSort"} search={false} />
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
          explanation={explanationInsertion}
          pythonCode={pythonCodeInsertion}
          javaCode={javaCodeInsertion}
          cppCode={cppCodeInsertion}
          pseudoCode={pseudoCodeInsertion}
          presentational={
            <div className="array-container-insertion">
              {frontNodes.map((node, index) => (
                <Node
                  data={node.data}
                  Xmovment={node.Xmovment}
                  Ymovment={node.Ymovment}
                  color={node.color}
                  duration={frontNodes.length * 6 - volume}
                  showPointer={false}
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
                onChange={this.handleChange}
                placeholder="Enter a number"
                onKeyPress={(e) => this.handleKeyPress(e)}
              />
              <button className="side-button" onClick={this.addNumber}>
                Add Number
              </button>
              <button className="side-button" onClick={this.shuffleArray}>
                Shuffle
              </button>
              <button className="side-button" onClick={this.random}>
                Random
              </button>
              <button className="side-button" onClick={this.erase}>
                Clear
              </button>
              <input
                type="range"
                min={frontNodes.length / 4}
                max={frontNodes.length * 4}
                step={0.02}
                value={volume}
                onChange={(event) => {
                  setVolume(event.target.valueAsNumber);
                }}
              />
              <button className="side-button" onClick={this.animate}>
                Sort
              </button>
            </div>
          }
        />
      </div>
    );
  }
}

export default SelectionSort;
