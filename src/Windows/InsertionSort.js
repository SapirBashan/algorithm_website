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

  addXMovementToNode = (nodeIndex, movement , nodes ,color) => {
  
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      // Create a copy of the nodes array
      const updatedNodes = [...nodes];
      // Create a copy of the node at the nodeIndex
      const updatedNode = { ...updatedNodes[nodeIndex] };
      // Create a copy of the Ymovment array
      const updatedXmovement = [...updatedNode.Xmovement];
      // create a copy of the color array
    //const updatedColor = [...updatedNode.color];
      // Add the movement value to the Ymovment array
      const value = updatedXmovement[updatedXmovement.length - 1];
      // Add the movement value to the Ymovment array
      const movementValue = movement + value; 
      // Add the movement value to the Ymovment array
      updatedNodes[nodeIndex].Xmovement.push(movementValue);
      // Add the color value to the color array
      updatedNodes[nodeIndex].color.push(color);
    }
  }

  insertionSort = () => {
    if (this.state.sorted === true) {
      return;
    }
  
    const nodes = [...this.state.backNodes];
    this.cleanArray(this.state.backNodes);
  
    let green = 'hsl(120, 100, 25)';
    let blue = 'hsl(196, 100, 40)';
    let red = 'hsl(0, 100, 50)';
  
    let n = nodes.length;
  
    for (let i = 1; i < n; i++) {
      let j = i - 1;
      let key = nodes[i].data;
      let move = false;
  
      while (j >= 0 && nodes[j].data > key) {
        move = true;
        this.addXMovementToNode(j + 1, 50, nodes, red);
        nodes[j + 1] = nodes[j];
        j--;
      }
  
      for (let k = j + 1; k < i; k++) {
        this.addXMovementToNode(k, 0, nodes, blue);
      }
  
      nodes[j + 1] = nodes[i];
  
      if (move) {
        this.addXMovementToNode(j + 1, 50, nodes, green);
      }
    }
  
    // Add blue color at the end of the sort
    for (let i = 0; i < n; i++) {
      this.addXMovementToNode(i, 0, nodes, blue);
    }
  
    this.setState({
      sorted: true,
    });
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
        Xmovement: [0],
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
              Xmovment={node.Xmovement}
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

