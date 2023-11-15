import React from "react";
import "./Stack.css";
import UpperMenu from "../components/UpperMenu";
import TogglePopup from "../components/TogglePopup";

class Stack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: [], // Array to simulate the stack
      newNumber: "",
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

  push = (newNumber) => {
    if (!isNaN(newNumber) && newNumber !== "") {
      const stack = [...this.state.stack];
      if (stack.length < 10) {
        stack.push(newNumber);
        this.setState({ stack, newNumber: "" });
      } else {
        // Handle stack full scenario
        console.log("Stack is full");
      }
    } else {
      // Handle invalid input
      console.log("Please enter a valid number");
    }
  };

  pop = () => {
    const stack = [...this.state.stack];
    if (stack.length > 0) {
      stack.pop();
      this.setState({ stack });
    } else {
      // Handle stack empty scenario
      console.log("Stack is empty");
    }
  };

  isEmpty = () => {
    return this.state.stack.length === 0;
  };

  isFull = () => {
    return this.state.stack.length === 10;
  };

  render() {
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

   
   // This code showcases the implementation of a Stack data structure using arrays in Python, Java, C++, and pseudocode formats, following a similar structure as provided. Adjustments can be made as needed to fit specific requirements or nuances of each programming language.
   

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



    const stackItems = this.state.stack.map((item, index) => (
      <div key={index} className="stack-item">
        {item}
      </div>
    ));

    return (
      
      <div className="Stack">
        <UpperMenu nameOfPage={"Stack"} search={false} />
        <div className="button-container">
          <input
            className="insert-node"
            type="number"
            value={this.state.newNumber}
            placeholder="Enter a number"
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={() => this.push(this.state.newNumber)}>Push</button>
          <button onClick={() => this.pop()}>Pop</button>
          <button disabled={!this.isEmpty()}>isEmpty</button>
          <button disabled={!this.isFull()}>isFull</button>
        </div>

        <div className="stack-container">
          <div className="top">{"Top            ."}</div>
          <ul className="numbers">
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
          </ul>
          <div className="stack">{stackItems}</div>
        </div>
        <TogglePopup
             text = {explanation}
             tab1 = {pythonCode}
             tab2 = {javaCode} 
             tab3 = {cppCode} 
             tab4 = {pseudoCode} 
        />
      </div>
    );
  }
}

export default Stack;
