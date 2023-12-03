import React from "react";
import "./PriorityQueue.css";
import UpperMenu from "../components/UpperMenu";
import Node from "../components/Node";
import GenericPage from "../components/GenericPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PriorityQueue extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
        front: null,
        backNodes: [],
        frontNodes: [],
        newNumber: "",
        newChar: "",
        maxQueueSize: 10, // Update this as per your desired queue size
      };
    }
  
    handleNumberInput  = (e) => {
      this.setState({ newNumber: e.target.value });
    };

    handleCharInput = (e) => {
      // Function to handle input for lowercase letters
      const inputValue = e.target.value;
      const lowerCaseValue = inputValue.toLowerCase(); // Convert input to lowercase
      if (/^[a-z]*$/.test(lowerCaseValue)) {
        this.setState({ newChar: lowerCaseValue });
      }
    };
  
    handleKeyPress = (e) => {
      if (e.key === "Enter") {
        this.enqueue(this.state.newNumber,this.state.newChar);
      }
    };
  
    enqueue = (myNumber,myChar) => {
      const { newNumber,newChar, backNodes, maxQueueSize, frontNodes } = this.state;
      if (this.isFull()) {
        toast.error("Queue is full", {
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
      if (myNumber === "" || myNumber === null) {
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
        return;
      }
      if(myNumber < -9 || myNumber > 99){
        toast.error("Please enter a number between -9 and 99", {
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
    if (myChar === "" || myChar === null) {
         toast.error("Please enter a lowercase letter", {
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
      
  
      this.cleanArray(this.state.frontNodes);
      this.cleanArray(this.state.backNodes);
  
     this.state.front = myNumber; 
  
     const newData = parseInt(myNumber);
     const newCharData = myChar;

     const newNode = {
       data: newData,
       data2: newCharData,
       Xmovment: [-350+((this.state.backNodes.length+1)*20),0],
       Ymovment: [0,0],
     };
  
     let addedArray = [...backNodes];
      
      
     this.setState({
       frontNodes: [...addedArray , newNode], // Update nodes with the new data
       backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
       newChar: "",       
       newNumber: "",
     });
    }
  
    dequeue = () => {
      if (this.isEmpty()) {
        toast.error("Queue is empty", {
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
  
      this.cleanArray(this.state.frontNodes);
      this.cleanArray(this.state.backNodes);
  
      const newBackNodes = [...this.state.backNodes];
  
  
      let addedArray = [...newBackNodes];
  
      /*make the top node move up*/
      addedArray[0].Xmovment = [(addedArray.length+1)*8, 600];
      addedArray[0].color.push('hsl(0, 100, 40)', 'hsl(196, 100, 40)');
  
      for(let i = 1; i < addedArray.length; i++){
        addedArray[i].Xmovment = [0, 60];
      }
  
  
      this.setState({
        frontNodes: [...addedArray ], // Update nodes with the new data 
        backNodes: [...addedArray.slice(1)],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
        newNumber: "",
      });
  
      if (this.state.backNodes.length === 1) {
        this.clear();
      }    
    };
  
    isEmpty = () => {
      return this.state.front === null;
    };
  
    isFull = () => {
      return this.state.backNodes.length >= this.state.maxQueueSize;
    };

   sortChar = () => {
      //sort the array by char priority data2 is the char
      this.cleanArray(this.state.frontNodes);
      this.cleanArray(this.state.backNodes);


      let sortedArray = [...this.state.backNodes];
      sortedArray.sort((a, b) => (a.data2 > b.data2) ? 1 : -1);
      this.setState({
        backNodes: [...sortedArray],
        frontNodes: [...sortedArray],
      });
   }

   sortNum = () => {
      //sort the array by num priority data is the num
      this.cleanArray(this.state.frontNodes);
      this.cleanArray(this.state.backNodes);

      let sortedArray = [...this.state.backNodes];
      sortedArray.sort((a, b) => (a.data > b.data) ? 1 : -1);
      this.setState({
        backNodes: [...sortedArray],
        frontNodes: [...sortedArray],
      });
   }
  
    random = () => {
      this.enqueue(Math.floor(Math.random() * 99), String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    };
  
    clear = () => {
     this.setState({ backNodes: [] });
     this.setState({ frontNodes: [] });
     this.setState({ front: null }); };
  
    cleanArray = (nodes) => {
        for (let i = 0; i < nodes.length; i++) {
        nodes[i].Xmovment = [0];
        nodes[i].color = ['hsl(196, 100, 40)'];
        }
     };
  
    render() {
      const { backNodes, newNumber, frontNodes } = this.state;
  
     return (
        
        <div className="PriorityQueue">
          <UpperMenu nameOfPage={"Priority Queue"} search={false} />
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
            // explanation={explanation}
            // pythonCode={pythonCode}
            // javaCode={javaCode}
            // cppCode={cppCode}
            // pseudoCode={pseudoCode}
          
          buttons={
          <div className="button-container">
            <input
              className="insert"
              type="number"
              value={this.state.newNumber}
              placeholder="Enter a number"
              onChange={this.handleNumberInput}
              onKeyPress={this.handleKeyPress}
            />
           <input
            className="insert"
            type="text"
            value={this.state.newChar}
            placeholder="Enter a lowercase letter"
            onChange={this.handleCharInput}
            onKeyPress={this.handleKeyPress}
            pattern="[a-z]*" // Restricts input to lowercase letters only
         />
            <button className="side-button" onClick={() => this.enqueue(this.state.newNumber, this.state.newChar)}>enqueue</button>
            <button className="side-button" onClick={() => this.dequeue()}>dequeue</button>
            <button className="side-button" onClick={() => this.random()}>Random enqueue</button>
            <button className="side-button" onClick={() => this.sortChar()}>Char Priority</button>
            <button className="side-button" onClick={() => this.sortNum()}>Num Priority</button>
            <button className="side-button" onClick={() => this.clear()}>Clear</button>
             <button
            disabled={!this.isEmpty()}
            className={this.isEmpty() ? "greenButton" : ""}
            >
              Is Empty
            </button>
            <button
              disabled={!this.isFull()}
              className={this.isFull() ? "greenButton" : ""}
            >
              Is Full
            </button>
          </div>}
          
          presentational={
          <div className="Priority-Queue-container">
            <div className="priorityQueue">
            {this.state.front === null ? null : (
              frontNodes.map((node, index) => (
                <Node className="priorityQueueNode"
                  data={node.data}
                  data2={node.data2}
                  Xmovment={node.Xmovment}
                  Ymovment={node.Ymovment}
                  duration={3}
                  color={node.color}
                  colorDuration={1}
                />
              ))
            )}
            </div>
            </div>
            }
    
        /></div>
      );
    }
  }

export default PriorityQueue;