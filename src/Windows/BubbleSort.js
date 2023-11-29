
import React, { Component } from "react";
import "../styles.css";
import "./BubbleSort.css";
import Node from "../components/Node";
import TogglePopup from "../components/TogglePopup";
import UpperMenu from "../components/UpperMenu";
import GenericPage from "../components/GenericPage";

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
      for (let j = 0; j < n - i - 1; j++) 
      {
        move = false;
        // If the node at the current index is greater than the node at the next index
        if (nodes[j].data > nodes[j + 1].data) 
        {
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
        for(let k = 0; k < n; k++) 
        {
            // if the node is not moving or if there was no swap
            if((k !== j && k !== j + 1) || move === false) 
            {
                //add the last element in the Ymovment array to the Ymovment array
              if(k === j || k === j + 1)
              {
                this.addYMovementToNode(k, 0 , nodes, red);
              }
              else
              {
                this.addYMovementToNode(k, 0 , nodes, blue);
              }
            }
        }
        // If no two elements were swapped
        // by inner loop, then break
      }
        if (swapped === false)
           { break;}
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
    const pythonCode = `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]  # Swap elements

    # Example usage:
    arr = [64, 34, 25, 12, 22, 11, 90]
    bubble_sort(arr)
    print("Sorted array:", arr)
    `;

    const javaCode = `public class BubbleSort {
      public static void bubbleSort(int[] arr) {
          int n = arr.length;
          for (int i = 0; i < n-1; i++) {
              for (int j = 0; j < n-i-1; j++) {
                  if (arr[j] > arr[j+1]) {
                      // Swap arr[j] and arr[j+1]
                      int temp = arr[j];
                      arr[j] = arr[j+1];
                      arr[j+1] = temp;
                  }
              }
          }
      }
  
      public static void main(String[] args) {
          int[] arr = {64, 34, 25, 12, 22, 11, 90};
          bubbleSort(arr);
          System.out.println("Sorted array: " + Arrays.toString(arr));
      }
  }
  `;

const cppCode = `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
`;


  const pseudoCode = `procedure bubbleSort(arr)
      n = length(arr)
      for i = 0 to n-1
          for j = 0 to n-i-1
              if arr[j] > arr[j+1]
                  swap(arr[j], arr[j+1])

  # Example usage:
  arr = [64, 34, 25, 12, 22, 11, 90]
  bubbleSort(arr)
  display("Sorted array:", arr)
  `;

  const explanation = `<div class="explanation">
  <h2>Bubble Sort Concept:</h2>
  <p>
    Bubble sort is a simple sorting algorithm that compares adjacent items and swaps them if they're in the wrong order.
  </p>
  
  <h2>How Bubble Sort Works:</h2>
  <p>
    Imagine arranging elements in a row. Bubble sort compares adjacent elements, moving larger ones towards the end.
  </p>
  
  <h2>Benefits of Bubble Sort:</h2>
  <p>
    <b>Simplicity:</b> Easy to understand and implement, suitable for educational purposes and small datasets.
  </p>
  <p>
    <b>Easy Implementation:</b> Involves comparing and swapping adjacent elements.
  </p>
  
  <h2>Drawbacks:</h2>
  <p>
    <b>Inefficiency:</b> Poor time complexity (O(n^2)) makes it slow for large datasets.
  </p>
  <p>
    <b>Performance:</b> Not suitable for large-scale applications compared to more efficient algorithms.
  </p>
  
  <h2>Runtime Complexity:</h2>
  <p>
    <b>Worst and Average Case:</b> O(n^2) - Quadratic time complexity for comparisons in larger datasets.
  </p>
  
  <h2>Real-world Analogies:</h2>
  <p>
    <b>Organizing Cards:</b> Comparing and swapping cards until they're in order.
  </p>
  <p>
    <b>Arranging Books:</b> Sorting books by comparing adjacent ones and swapping positions if needed.
  </p>
  <p>
    Relating concepts to everyday scenarios helps understand the basics of Bubble Sort.
  </p>
</div>
`;




    const {frontNodes , newNumber ,volume, setVolume} = this.state;
    return (
      <div>
      <UpperMenu nameOfPage = {"Bubble Sort"} search = {false}/>
      <GenericPage
        explanation={explanation}
        pythonCode={pythonCode}
        javaCode={javaCode}
        cppCode={cppCode}
        pseudoCode={pseudoCode}
        presentational={
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
    </div>}
        buttons={
          <div >
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
              className="slider"
              type="range"
              min={frontNodes.length/4}
              max={frontNodes.length*4}
              step={0.02}
              value={volume}
              onChange={event => {
                setVolume(event.target.valueAsNumber)
              }}
            />
          
          <button className="side-button" onClick={this.animate}>
                Bubble Sort
          </button>
        </div>
        }
        
      /></div>   
    );
  }
}

export default BubbleSort;
