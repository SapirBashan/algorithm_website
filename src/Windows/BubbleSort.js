
import React, { Component } from "react";
import "./BubbleSort.css";
import Node from "../components/Node";
import TogglePopup from "../components/TogglePopup";
import UpperMenu from "../components/UpperMenu";

class BubbleSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backNodes: [],
      newNumber: "",
      frontNodes: [],
      sorted: false,
      volume:0, 
      setVolume: (volume) => this.setState({volume})
    };
  }

  addYMovementToNode = (nodeIndex, movement , nodes ,color) => {
  
    if (nodeIndex >= 0 && nodeIndex < nodes.length) {
      // Create a copy of the nodes array
      const updatedNodes = [...nodes];
      // Create a copy of the node at the nodeIndex
      const updatedNode = { ...updatedNodes[nodeIndex] };
      // Create a copy of the Ymovment array
      const updatedYmovment = [...updatedNode.Ymovment];
      // create a copy of the color array
    //const updatedColor = [...updatedNode.color];
      // Add the movement value to the Ymovment array
      const value = updatedYmovment[updatedYmovment.length - 1];
      // Add the movement value to the Ymovment array
      const movementValue = movement + value; 
      // Add the movement value to the Ymovment array
      updatedNodes[nodeIndex].Ymovment.push(movementValue);
      // Add the color value to the color array
      updatedNodes[nodeIndex].color.push(color);
    }
  }

  bubbleSort = () => {
    // if the array is sorted return
    if(this.state.sorted === true) {
      return;
    }
    // create a copy of the nodes array
    const nodes = [...this.state.backNodes];
    this.cleanArray(this.state.backNodes);

    let green = 'hsl(120, 100, 25)';
    let blue = 'hsl(60, 100, 50)';
    let red = 'hsl(0, 100, 50)';

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
          this.addYMovementToNode(j, 70, nodes, green);
          //take the last element in the Ymovment array and add 70 to its value to move it up
          this.addYMovementToNode(j + 1,-70 , nodes, green);
          // Swap the nodes in the data array
          [nodes[j], nodes[j + 1]] = [nodes[j + 1], nodes[j]];
          swapped = true;
        }
        //add movment in place of the nodes that are not moving
        for(let k = 0; k < n; k++) {
            // if the node is not moving or if there was no swap
            if((k !== j && k !== j + 1) || move === false) {
                //add the last element in the Ymovment array to the Ymovment array
              if(k === j || k === j + 1)
              {
                this.addYMovementToNode(k, 0 , nodes, red);
              }
              else{
                this.addYMovementToNode(k, 0 , nodes, blue);
              }
            }
        }
        // If no two elements were swapped
        // by inner loop, then break
      }
        if (swapped === false)
            break;
      }
      // add a blue color in the end of color array to all the nodes
      for(let i = 0; i < n; i++) {
        this.addYMovementToNode(i, 0 , nodes, blue);
      }
    this.setState({
      sorted: true,
    });
  }

  animate = () => {
    const nodesCopy = [...this.state.backNodes]; // Create a copy of the nodes array
    this.bubbleSort();
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
    const { newNumber, frontNodes , backNodes , sorted} = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);
    if(isNaN(newNumber)) {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    if(newNumber === "") {
      alert("the input is empty");
      return;
    }
      const newData = parseInt(newNumber);
      const newNode = {
        data: newData,
        Xmovment: [],
        Ymovment: [0],
        color: ['hsl(196, 100, 40)']
      };
      
      let addedArray = [...frontNodes];

      if(sorted === true) {
        addedArray = addedArray.sort((a, b) => a.data - b.data);
      }

      this.setState({
        frontNodes: [...addedArray , newNode], // Update nodes with the new data
        backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
        newNumber: "", // Clear the input field
        sorted: false,
      });
  }

  shuffleArray = () => {
    const { frontNodes , backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);
    if(frontNodes.length === 0) {
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
    const {newNumber ,frontNodes ,backNodes } = this.state;
    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);

    if(newNumber === "") {
      alert("the input is empty");
      return;
    }

    // create an empty array 
    const randomNodes = [];
    // create a random number between the possible numbers for a number in react
    for (let i = 0; i < newNumber; i++) {
      const newData =  Math.floor(Math.random() * (((100- (-100))) + 1) + (-100));
      // insert the number to the array in the old structure { data: 6, Xmovment: [], Ymovment: [0] , color:['hsl(196, 100, 40)']},
      const newNode = {
        data: newData,
        Xmovment: [],
        Ymovment: [0],
        color: ['hsl(196, 100, 40)']
      };
      randomNodes.push(newNode);
    }
    // return 'num' times 
    // result: an array with 'num' random numbers
    this.setState({
      frontNodes: randomNodes,
      backNodes: randomNodes,
      newNumber: "", // Clear the input field
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
      nodes[i].Ymovment = [0];
      nodes[i].color = ['hsl(196, 100, 40)'];
    }
  }

  

  render() {
    const {frontNodes , newNumber ,volume, setVolume} = this.state;
    return (
      <div>
        
      <UpperMenu nameOfPage = {"Bubble Sort"} search = {false}/>        
      <div className="BubbleSort">
       
    <div className="input-section">
      <input
        type="number"
        value={newNumber}
        onChange={this.handleChange}
        placeholder="Enter a number"
        onKeyPress={(e) => this.handleKeyPress(e)}
      />
      <br />
      <button  onClick={this.addNumber}>
        Add Number
      </button>
      <br />
      <button  onClick={this.shuffleArray}>
            Shuffle
      </button>
      <br />
      <button  onClick={this.random}>
            Random
      </button>
      <br />
      <button  onClick={this.erase}>
            Clear
      </button>
      <br />
      <input
          type="range"
          //i want the min value to be the longest duration and the max value to be the shortest duration
          min={frontNodes.length/4}
          max={frontNodes.length*4}
          step={0.02}
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
          }}
        />
      <br />
      <button  onClick={this.animate}>
            Bubble Sort
      </button>
    </div>
    <div className="array-container">
      {frontNodes.map((node, index) => (
        <Node
          data={node.data}
          Xmovment={node.Xmovment}
          Ymovment={node.Ymovment}
          color={node.color}
          duration={frontNodes.length * 4 - volume}
          showPointer={false}
        />
      ))}
    </div>
    <TogglePopup/>
  </div>
  </div>
      
    );
  }
}

export default BubbleSort;
