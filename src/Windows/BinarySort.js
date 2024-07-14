import React from "react";
import "./BinarySort.css";
import UpperMenu from "../components/UpperMenu";
import GenericPage from "../components/GenericPage";
import Node from "../components/Node";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BinarySort extends React.Component{
  
   constructor(props) {
      super(props);
      this.state = {
        front: null,
        backNodes: [],
        frontNodes: [],
        newNumber: "",
        duration: 2,
      };
    }

    handleInsert = () => {
      this.insert(this.state.newNumber);
    }

      handleKeyPress = (e) => {
         if (e.key === "Enter") {
            this.insert(this.state.newNumber);
         }
      }

      insert = (myNumber) => {
         const { backNodes } = this.state;
         if (myNumber === "") {
           toast.error("Please enter a number", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
           return;
         }       
         if (myNumber < -9 || myNumber > 99) {
           toast.error("Please enter a number between -9 and 99", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
           return;
         }
       
         // Clone backNodes array to avoid mutating the state directly
         const clonedNodes = [...backNodes];
         
         this.cleanArray(clonedNodes);
         
         const Xmovment = this.findThePlaceX(myNumber, clonedNodes);
         const Ymovment = this.findThePlaceY(myNumber, clonedNodes);
         
         // Check if the number already exists in the array
         const existingNodeIndex = clonedNodes.findIndex(node => node.data === myNumber);
         if (existingNodeIndex !== -1) {
           // If the number already exists, update its movement steps and return
           clonedNodes[existingNodeIndex].Xmovment = Xmovment;
           clonedNodes[existingNodeIndex].Ymovment = Ymovment;
           this.setState({
             front: myNumber,
             frontNodes: clonedNodes,
             backNodes: clonedNodes,
             newNumber: "",
           });
           return;
         }
       
         // Use binary search to find the correct index to insert the new node
         let low = 0;
         let high = clonedNodes.length - 1;
         let insertIndex = low;
         let amountofsteps = 0;
       
         while (low <= high) {
           let mid = Math.floor((low + high) / 2);
         
           if (clonedNodes[mid].data < myNumber) {
             low = mid + 1;
             amountofsteps += 1;
           } 
           else {
             high = mid - 1;
             amountofsteps += 1;
           }
           insertIndex = low; // Update the insertIndex while searching
         }
       
         // Insert the new node at the calculated insertIndex
         const newNode = {
           data: myNumber,
           Xmovment: Xmovment,
           Ymovment: Ymovment,
         };
         clonedNodes.splice(insertIndex, 0, newNode);
       
         this.setState({
           front: myNumber,
           frontNodes: clonedNodes,
           backNodes: clonedNodes,
           newNumber: "",
           doration: amountofsteps * 2,
         });
       }
       

   //This code finds the place of the number in the array. 
   //It is used in the binary search algorithm to find the place of the number in the array. 
   //The function name is findThePlaceX, and the variable names are low, high, steps, mid. 
   //The purpose of this code is to find the place of the number in the array. 
   findThePlaceX = (myNumber, nodes) => {
         let low = 0;
         let high = nodes.length - 1;
         let steps = [];
         let amountofsteps = 0.5;
         
         while (low <= high) {
            let mid = Math.floor((low + high) / 2);
         
            if (nodes[mid].data <= myNumber) {
               steps.push(-amountofsteps * (nodes.length + 1) * 60);
               amountofsteps = amountofsteps / 2;
               low = mid + 1;

               toast(`${nodes[mid].data} <= ${myNumber}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            } else if (nodes[mid].data > myNumber) {
               steps.push(amountofsteps * (nodes.length + 1) * 60);
               amountofsteps = amountofsteps / 2;
               high = mid - 1;

               toast(`${nodes[mid].data} > ${myNumber}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            } else {
               // If the number already exists, place it on the right
               steps.push(-0.25 * (nodes.length + 1) * 60);
               return steps;
            }
         }
      // The number doesn't exist, place it on the left
      steps.push(0);
      return steps;
      }

      findThePlaceY = (myNumber, nodes) => {
         let low = 0;
         let high = nodes.length - 1;
         let steps = [];
         
         while (low <= high) {
            let mid = Math.floor((low + high) / 2);
         
            if (nodes[mid].data <= myNumber) {
               steps.push(-60); // Move up by -60
               low = mid + 1;
            } else if (nodes[mid].data > myNumber) {
               steps.push(-60); // Move down by +60
               high = mid - 1;
            } else {
               // If the number already exists, no Y movement required
               return steps;
            }
         }

         steps.push(-60); // No Y movement for insertion at the end
         steps.push(0); // No Y movement for insertion at the end
         return steps;
         }
       
       
      random = () => {
        this.insert(Math.floor(Math.random() * 99) );
      }

      clear = () => {
         this.setState({ front: null, backNodes: [], frontNodes: [] });
      }

      cleanArray = (nodes) => {
         for (let i = 0; i < nodes.length; i++) {
           nodes[i].Xmovment = [0];
           nodes[i].Ymovment = [0];
           nodes[i].color = ['hsl(196, 100, 40)'];
         }
       }


  render () {
      const { frontNodes } = this.state;

     return (
      <div className="BinarySort">
         <UpperMenu nameOfPage = {"Binary Sort"} search = {false}/>
         <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={1}
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
         //  explanation={explanation}
         //  pythonCode={pythonCode}
         //  javaCode={javaCode}
         //  cppCode={cppCode}
         //  pseudoCode={pseudoCode}
        
        buttons={
        <div className="button-container">
          <input
            className="insert"
            type="number"
            value={this.state.newNumber}
            placeholder="Enter a number"
            onChange={this.handleInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.handleInsert();
              }
            }}
          />
          <button className="side-button" onClick={() => this.insert(this.state.newNumber)}>Insert</button>
          <button className="side-button" onClick={() => this.random()}>Random</button>
          <button className="side-button" onClick={() => this.clear()}>Clear</button>
        </div>
         
        
      
      }
        
        presentational={
        <div className="binary-sort-container">
          {this.state.front === null ? null : (
            frontNodes.map((node, index) => (
              <Node className="BinarySortNode"
                data={node.data}
                Xmovment={node.Xmovment}
                Ymovment={node.Ymovment}
                duration={this.state.duration}
                color={node.color}
                colorDuration={1}
              />
            ))
          )}
          </div>
          }
  
      />
      </div>
     );
     }
 }

export default BinarySort;
