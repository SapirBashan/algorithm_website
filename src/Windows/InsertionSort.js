// InsertionSort.js
import React, { Component } from "react";
import "./InsertionSort.css";
import Node from "../components/Node";
import TogglePopup from "../components/TogglePopup.js";


class InsertionSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    backNodes: [],
    newNumber: "",
    frontNodes: [],
    sorted: false,
    volume: 0, 
    setVolume: (volume) => this.setState({volume}),
    };
  }

  addYMovementToNode = (nodeIndex, movement, nodes, color) => {
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      const updatedNodes = [...nodes];
      const updatedNode = { ...updatedNodes[nodeIndex] };
      const updatedXmovement = [...updatedNode.Xmovement];
      const value = updatedXmovement[updatedXmovement.length - 1];
      const movementValue = movement + value;
      updatedNodes[nodeIndex].Xmovement.push(movementValue);
      updatedNodes[nodeIndex].color.push(color);
    }
  }

  insertionSort = () => {
    if (this.state.sorted === true) {
      return;
    }
  
    // Create a copy of the nodes array
    const nodes = [...this.state.backNodes];
    this.cleanArray(this.state.backNodes);
  
    let green = 'hsl(120, 100, 25)';
    let blue = 'hsl(196, 100, 40)';
    let red = 'hsl(0, 100, 50)';
  
    // Set the number of nodes
    let n = nodes.length;
  
    for (let i = 1; i < n; i++) {
      let j = i - 1;
      let key = nodes[i].data;
  
      while (j >= 0 && nodes[j].data > key) {
        // Shift elements greater than key to the right
        nodes[j + 1].data = nodes[j].data;
        this.addYMovementToNode(j + 1, 50, nodes, red);
        j--;
      }
  
      // Insert the key at its correct position
      nodes[j + 1].data = key;
      this.addYMovementToNode(j + 1, 50, nodes, green);
    }
  }

  animate = () => {
    const nodesCopy = [...this.state.backNodes];
    this.insertionSort();
    this.setState({
      frontNodes: nodesCopy, 
      sorting: true
    });
  }

  handleChange = (e) => {
    this.setState({ newNumber: e.target.value });
  }

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
      alert("Please enter a number");
      this.state.newNumber = "";
      return;
    }

    if (newNumber === "") {
      alert("the input is empty");
      return;
    }

    const newData = parseInt(newNumber);
    const newNode = {
      data: newData,
      Xmovement: [0],
      Ymovement: [],
      color: ['hsl(196, 100, 40)'],
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
  }

  shuffleArray = () => {
    const { frontNodes, backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if (frontNodes.length === 0) {
      alert("the array is empty");
      return;
    }

    const shuffledNodes = [...frontNodes];
    for (let i = shuffledNodes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNodes[i], shuffledNodes[j]] = [shuffledNodes[j], shuffledNodes[i]];
    }

    this.setState({
      frontNodes: shuffledNodes,
      backNodes: shuffledNodes,
      sorted: false,
    });
  }

  random = () => {
    const { newNumber, frontNodes, backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if (newNumber === "") {
      alert("the input is empty");
      return;
    }

    const randomNodes = [];
    for (let i = 0; i < newNumber; i++) {
      const newData = Math.floor(Math.random() * (((100 - (-100))) + 1) + (-100));
      const newNode = {
        data: newData,
        Xmovment: [0],
        Ymovement: [],
        color: ['hsl(196, 100, 40)'],
      };
      randomNodes.push(newNode);
    }

    this.setState({
      frontNodes: randomNodes,
      backNodes: randomNodes,
      newNumber: "",
      sorted: false,
    });
  }

  erase = () => {
    this.setState({
      frontNodes: [],
      backNodes: [],
      newNumber: "",
      sorted: false,
    });
  }

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Ymovement = [0];
      nodes[i].color = ['hsl(196, 100, 40)'];
    }
  }

  render() {
    const { frontNodes, newNumber, volume, setVolume } = this.state;
    return (
      <div className="InsertionSort">
        
        <h1>Insertion Sort</h1>
        <div className="input-section">
          <input
            type="number"
            value={newNumber}
            onChange={this.handleChange}
            placeholder="Enter a number"
            onKeyPress={(e) => this.handleKeyPress(e)}
          />
          <br />
          <button onClick={this.addNumber}>
            Add Number
          </button>
          <br />
          <button onClick={this.shuffleArray}>
            Shuffle
          </button>
          <br />
          <button onClick={this.random}>
            Random
          </button>
          <br />
          <button onClick={this.erase}>
            Clear
          </button>
          <br />
          <input
            type="range"
            min={frontNodes.length / 4}
            max={frontNodes.length * 4}
            step={0.02}
            value={volume}
            onChange={event => {
              setVolume(event.target.valueAsNumber);
            }}
          />
          <br />
          <button onClick={this.animate}>
            Insertion Sort
          </button>
        </div>
        <div className="array-container-insertion">
          {frontNodes.map((node, index) => (
            <Node
              key={index}
              data={node.data}
              Xmovment={node.Xmovment}
              Ymovment={node.Ymovement}
              color={node.color}
              duration={frontNodes.length * 4 - volume}
              showPointer={false}
            />
          ))}
        </div>
      </div>
      );
   }
}

export default InsertionSort;

