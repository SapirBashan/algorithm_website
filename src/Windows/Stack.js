import React from "react";
import "../styles.css";
import "./Stack.css";
import UpperMenu from "../components/UpperMenu";
import TogglePopup from "../components/TogglePopup";
import { motion } from "framer-motion";
import Node from "../components/Node";
import GenericPage from "../components/GenericPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      backNodes: [
      ],
      newNumber: "",
      frontNodes: [
      ],
    };
  }

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.push(this.state.newNumber);
    }
  };

  push = (myNumber) => {
    const { newNumber,frontNodes, backNodes } = this.state;
    if (this.isFull()) {
      toast.error("Stack is full", {
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
    if(myNumber === "" || myNumber === null){
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

    this.cleanArray(this.state.frontNodes);
    this.cleanArray(this.state.backNodes);

    const newBackNodes = [...this.state.backNodes];

    this.state.top = myNumber;

   
    const newData = parseInt(myNumber);
      const newNode = {
        data: newData,
        Xmovment: [0,0],
        Ymovment: [-350+((this.state.backNodes.length+1)*20),0],
        color: ['hsl(102, 100, 30)', 'hsl(102, 100, 30)'],
      };

      /*make all the colors but the top blue (196, 100, 40)*/
      for(let i = 0; i < newBackNodes.length; i++){
        newBackNodes[i].color.push('hsl(196, 100, 40)');
      }
    
    
      this.setState({
        frontNodes: [...newBackNodes , newNode], // Update nodes with the new data
        backNodes: [...newBackNodes, newNode],  
        newNumber: "",
      });

  }

  pop = () => {
    if (this.isEmpty()) {
      toast.error("Stack is empty", {
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

    const addedArray = [...this.state.backNodes];

    /*make the top node move up*/
    addedArray[addedArray.length-1].Xmovment = [0, 0];
    addedArray[addedArray.length-1].Ymovment = [0, -225*(addedArray.length+2)];
    if(addedArray.length !== 1){
    addedArray[addedArray.length-1].color.push('hsl(0, 100, 40)');
    addedArray[addedArray.length-2].color.push('hsl(102, 100, 30)');
    }
    else{
      addedArray[0].color.push('hsl(0, 100, 40)');
    }


    this.setState({
      frontNodes: [...addedArray ], // Update nodes with the new data 
      backNodes: [...addedArray.slice(0,-1)],  
      newNumber: "",
    }); 

  };

  isEmpty = () => {
    return this.state.backNodes.length === 0;
  };

  isFull = () => {
    return this.state.backNodes.length === 10;
  };

  clear = () => {
    this.setState({ backNodes: [] });
    this.setState({ frontNodes: [] });
    this.setState({ top: null });
  };

  random = () => {
    this.push(Math.floor(Math.random() * 99));
  }

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Xmovment = [0];
      nodes[i].color = ['hsl(196, 100, 40)'];
    }
  };

  render() {
    const { frontNodes, newNumber, node } = this.state;

      const pythonCode = `# Create a Stack class using array
   class Stack:
      def __init__(self):
         self.items = []

      # Method to push an element onto the stack
      def push(self, item):
         # Implementation for push method...
         self.items.append(item)

      # Method to pop an element from the stack
      def pop(self):
         # Implementation for pop method...
         if not self.isEmpty():
               return self.items.pop()
         return None  # or raise an error for an empty stack

      # Method to get the top element of the stack without removing it
      def top(self):
         # Implementation for top method...
         if not self.isEmpty():
               return self.items[-1]
         return None  # or raise an error for an empty stack

      # Method to check if the stack is empty
      def isEmpty(self):
         # Implementation for isEmpty method...
         return len(self.items) == 0

      # Method to check if the stack is full (for an array-based implementation)
      def isFull(self):
         # Implementation for isFull method...
         return False  # In Python, arrays dynamically resize, so there's no fixed size limit
   `;
   
    const javaCode = `// Create a Stack class using array
    class Stack {
        private int[] items;
        private int top;
        private int maxSize;

        public Stack(int size) {
          this.items = new int[size];
          this.top = -1;
          this.maxSize = size;
        }

        // Method to push an element onto the stack
        public void push(int item) {
          // Implementation for push method...
          if (!isFull()) {
                items[++top] = item;
          } else {
                // Handle full stack scenario
                System.out.println("Stack is full. Cannot push element.");
          }
        }

        // Method to pop an element from the stack
        public int pop() {
          // Implementation for pop method...
          if (!isEmpty()) {
                return items[top--];
          } else {
                // Handle empty stack scenario
                System.out.println("Stack is empty. Cannot pop element.");
                return -1; // Return a default value or throw an error
          }
        }

        // Method to get the top element of the stack without removing it
        public int top() {
          // Implementation for top method...
          if (!isEmpty()) {
                return items[top];
          } else {
                // Handle empty stack scenario
                System.out.println("Stack is empty. No top element.");
                return -1; // Return a default value or throw an error
          }
        }

        // Method to check if the stack is empty
        public boolean isEmpty() {
          // Implementation for isEmpty method...
          return top == -1;
        }

        // Method to check if the stack is full (for an array-based implementation)
        public boolean isFull() {
          // Implementation for isFull method...
          return top == maxSize - 1;
        }
        
        // Method to display all elements in the stack
        public void display() {
          // Implementation for display method...
          System.out.print("Stack: ");
          for (int i = 0; i <= top; i++) {
                System.out.print(items[i] + " ");
          }
          System.out.println();
        }
    }
    `;

    
      const cppCode = `// Create a Stack class using array
    class Stack {
    private:
        int* items;
        int top;
        int maxSize;

    public:
        Stack(int size) {
            items = new int[size];
            top = -1;
            maxSize = size;
        }

        // Method to push an element onto the stack
        void push(int item) {
            // Implementation for push method...
            if (!isFull()) {
                items[++top] = item;
            } else {
                // Handle full stack scenario
                std::cout << "Stack is full. Cannot push element." << std::endl;
            }
        }

        // Method to pop an element from the stack
        int pop() {
            // Implementation for pop method...
            if (!isEmpty()) {
                return items[top--];
            } else {
                // Handle empty stack scenario
                std::cout << "Stack is empty. Cannot pop element." << std::endl;
                return -1; // Return a default value or throw an error
            }
        }

        // Method to get the top element of the stack without removing it
        int top() {
            // Implementation for top method...
            if (!isEmpty()) {
                return items[top];
            } else {
                // Handle empty stack scenario
                std::cout << "Stack is empty. No top element." << std::endl;
                return -1; // Return a default value or throw an error
            }
        }

        // Method to check if the stack is empty
        bool isEmpty() {
            // Implementation for isEmpty method...
            return top == -1;
        }

        // Method to check if the stack is full (for an array-based implementation)
        bool isFull() {
            // Implementation for isFull method...
            return top == maxSize - 1;
        }

        // Method to display all elements in the stack
        void display() {
            // Implementation for display method...
            std::cout << "Stack: ";
            for (int i = 0; i <= top; i++) {
                std::cout << items[i] << " ";
            }
            std::cout << std::endl;
        }
    };
    `;

      const pseudoCode = `class Stack {
        constructor() {
            this.items = [];
            this.top = -1;
            this.maxSize = 0;
        }

        Stack(size) {
            this.items = new Array(size);
            this.top = -1;
            this.maxSize = size;
        }

        push(item) {
            // Implementation for push method...
            if (!this.isFull()) {
                this.top++;
                this.items[this.top] = item;
            } else {
                // Handle full stack scenario
                console.log("Stack is full. Cannot push element.");
            }
        }

        pop() {
            // Implementation for pop method...
            if (!this.isEmpty()) {
                return this.items[this.top--];
            } else {
                // Handle empty stack scenario
                console.log("Stack is empty. Cannot pop element.");
                return -1; // Return a default value or throw an error
            }
        }

        top() {
            // Implementation for top method...
            if (!this.isEmpty()) {
                return this.items[this.top];
            } else {
                // Handle empty stack scenario
                console.log("Stack is empty. No top element.");
                return -1; // Return a default value or throw an error
            }
        }

        isEmpty() {
            // Implementation for isEmpty method...
            return this.top === -1;
        }

        isFull() {
            // Implementation for isFull method...
            return this.top === this.maxSize - 1;
        }
      }
      `;

      const explanation = `<div class="explanation">
      <h2>Stack Concept:</h2>
      <p>
        A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It's like a stack of plates, where the last plate placed is the first one to be removed.
      </p>
      
      <h2>How Stack Works:</h2>
      <p>
        Think of a stack of books. You can add a new book on top (push operation) or remove the top book (pop operation). The topmost book is accessible, while the rest are hidden.
      </p>
      
      <h2>Using an Array to Implement a Stack:</h2>
      <p>
        An array can be used to represent a stack where elements are added or removed from one end (the top). 
        The end of the array represents the top of the stack.
      </p>
      
      <h2>Stack Operations:</h2>
      <p>
        <b>Push:</b> Adds an element to the top of the stack.
      </p>
      <p>
        <b>Pop:</b> Removes the element from the top of the stack.
      </p>
      <p>
        <b>Top:</b> Returns the element at the top of the stack without removing it.
      </p>
      <p>
        <b>isEmpty:</b> Checks if the stack is empty.
      </p>
      <p>
        <b>isFull:</b> In JavaScript, using an array for a stack, it's less common to have a "full" state as arrays dynamically resize.
      </p>
      
      <h2>Benefits of a Stack:</h2>
      <p>
        <b>Simple and Efficient:</b> Operations like push, pop, and top are quick and easy to perform.
      </p>
      <p>
        <b>Space Efficiency:</b> Utilizes memory efficiently when managing elements.
      </p>
      
      <h2>Drawbacks:</h2>
      <p>
        <b>Limitation on Access:</b> Direct access to elements in the middle of the stack is restricted.
      </p>
      
      <h2>Runtime Complexity:</h2>
      <p>
        <b>Push Operation:</b> O(1) - Constant time complexity, as it adds elements at the top of the stack.
      </p>
      <p>
        <b>Pop Operation:</b> O(1) - Constant time complexity, as it removes elements from the top of the stack.
      </p>
      <p>
        <b>Top Operation:</b> O(1) - Constant time complexity, as it accesses the topmost element without removing it.
      </p>
      <p>
        <b>isEmpty Operation:</b> O(1) - Constant time complexity, as it checks if the stack is empty.
      </p>
      
      <h2>Real-world Analogies:</h2>
      <p>
        <b>Stack of Plates:</b> Adding plates to or removing them from the top of a stack of plates.
      </p>
      <p>
        <b>Pile of Books:</b> Removing or adding books to a pile where you can only work with the top book.
      </p>
      <p>
        Relating these concepts to everyday scenarios helps grasp the concept of a stack and its functionality.
      </p>
    </div>
    `;


    return (
      
      <div className="Stack">
        <UpperMenu nameOfPage={"Stack"} search={false} />
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
          explanation={explanation}
          pythonCode={pythonCode}
          javaCode={javaCode}
          cppCode={cppCode}
          pseudoCode={pseudoCode}
        
        buttons={
        <div className="button-container">
          <input
            className="insert"
            type="number"
            value={this.state.newNumber}
            placeholder="Enter a number"
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <button className="side-button" onClick={() => this.push(this.state.newNumber)}>Push</button>
          <button className="side-button" onClick={() => this.pop()}>Pop</button>
          <button className="side-button" onClick={() => this.random()}>Random Push</button>
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
        <div className="stack-container">
          {/* <ul className="numbers">
            <li>9. </li>
            <li>8. </li>
            <li>7. </li>
            <li>6. </li>
            <li>5. </li>
            <li>4. </li>
            <li>3. </li>
            <li>2. </li>
            <li>1. </li>
            <li>0. </li>
          </ul> */}
          <div className="stack">
          {this.state.top === null ? null : (
            frontNodes.map((node, index) => (
              <Node className="StackNode"
                data={node.data}
                Xmovment={node.Xmovment}
                Ymovment={node.Ymovment}
                duration={4}
                color={node.color}
                colorDuration={0.5}
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




export default Stack;
