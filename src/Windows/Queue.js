import React from "react";
import "../styles.css";
import "./Queue.css"; 
import UpperMenu from "../components/UpperMenu";
import Node from "../components/Node";
import GenericPage from "../components/GenericPage";

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: null,
      backNodes: [],
      frontNodes: [],
      newNumber: "",
      maxQueueSize: 10, // Update this as per your desired queue size
    };
  }

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.enqueue(this.state.newNumber);
    }
  };

  enqueue = () => {
    const { newNumber, backNodes, maxQueueSize, frontNodes } = this.state;
    if (this.isFull()) {
      alert("Queue is full");
      return;
    }
    if (newNumber === "" || newNumber === null) {
      alert("Please enter a number");
      return;
    }
    if(newNumber < -99 || newNumber > 999){
      alert("Please enter a number between -99 and 999");
      return;
    }

    this.cleanArray(this.state.frontNodes);
    this.cleanArray(this.state.backNodes);

   this.state.front = newNumber; 

   const newData = parseInt(newNumber);
   const newNode = {
     data: newData,
     Xmovment: [-350+((this.state.backNodes.length+1)*20),0],
     Ymovment: [0,0],
   };

   let addedArray = [...backNodes];
    
    
   this.setState({
     frontNodes: [...addedArray , newNode], // Update nodes with the new data
     backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
     newNumber: "",
   });
  }

  dequeue = () => {
    if (this.isEmpty()) {
      alert("Queue is empty");
      return;
    }

    this.cleanArray(this.state.frontNodes);
    this.cleanArray(this.state.backNodes);

    const newBackNodes = [...this.state.backNodes];


    let addedArray = [...newBackNodes];

    /*make the top node move up*/
    addedArray[0].Xmovment = [(addedArray.length+1)*8, 600];
    addedArray[0].color.push('hsl(0, 100, 40)');

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

    const pythonCode = `# Create a Queue class using array
    class Queue:
       def __init__(self):
          self.items = []
    
       # Method to enqueue an element into the queue
       def enqueue(self, item):
          # Implementation for enqueue method...
          self.items.append(item)
    
       # Method to dequeue an element from the queue
       def dequeue(self):
          # Implementation for dequeue method...
          if not self.isEmpty():
                return self.items.pop(0)
          return None  # or raise an error for an empty queue
    
       # Method to get the front element of the queue without removing it
       def front(self):
          # Implementation for front method...
          if not self.isEmpty():
                return self.items[0]
          return None  # or raise an error for an empty queue
    
       # Method to check if the queue is empty
       def isEmpty(self):
          # Implementation for isEmpty method...
          return len(self.items) == 0
    
       # Method to check if the queue is full (for an array-based implementation)
       def isFull(self):
          # Implementation for isFull method...
          return False  # In Python, arrays dynamically resize, so there's no fixed size limit
    `;
    
    const javaCode = `// Create a Queue class using array
    class Queue {
        private int[] items;
        private int front;
        private int rear;
        private int maxSize;
    
        public Queue(int size) {
          this.items = new int[size];
          this.front = 0;
          this.rear = -1;
          this.maxSize = size;
        }
    
        // Method to enqueue an element into the queue
        public void enqueue(int item) {
          // Implementation for enqueue method...
          if (!isFull()) {
                items[++rear] = item;
          } else {
                // Handle full queue scenario
                System.out.println("Queue is full. Cannot enqueue element.");
          }
        }
    
        // Method to dequeue an element from the queue
        public int dequeue() {
          // Implementation for dequeue method...
          if (!isEmpty()) {
                int removedItem = items[front];
                front++;
                return removedItem;
          } else {
                // Handle empty queue scenario
                System.out.println("Queue is empty. Cannot dequeue element.");
                return -1; // Return a default value or throw an error
          }
        }
    
        // Method to get the front element of the queue without removing it
        public int front() {
          // Implementation for front method...
          if (!isEmpty()) {
                return items[front];
          } else {
                // Handle empty queue scenario
                System.out.println("Queue is empty. No front element.");
                return -1; // Return a default value or throw an error
          }
        }
    
        // Method to check if the queue is empty
        public boolean isEmpty() {
          // Implementation for isEmpty method...
          return front > rear;
        }
    
        // Method to check if the queue is full (for an array-based implementation)
        public boolean isFull() {
          // Implementation for isFull method...
          return rear == maxSize - 1;
        }
        
        // Method to display all elements in the queue
        public void display() {
          // Implementation for display method...
          System.out.print("Queue: ");
          for (int i = front; i <= rear; i++) {
                System.out.print(items[i] + " ");
          }
          System.out.println();
        }
    }
    `;
    
    const cppCode = `// Create a Queue class using array
    class Queue {
    private:
        int* items;
        int front;
        int rear;
        int maxSize;
    
    public:
        Queue(int size) {
            items = new int[size];
            front = 0;
            rear = -1;
            maxSize = size;
        }
    
        // Method to enqueue an element into the queue
        void enqueue(int item) {
            // Implementation for enqueue method...
            if (!isFull()) {
                items[++rear] = item;
            } else {
                // Handle full queue scenario
                std::cout << "Queue is full. Cannot enqueue element." << std::endl;
            }
        }
    
        // Method to dequeue an element from the queue
        int dequeue() {
            // Implementation for dequeue method...
            if (!isEmpty()) {
                return items[front++];
            } else {
                // Handle empty queue scenario
                std::cout << "Queue is empty. Cannot dequeue element." << std::endl;
                return -1; // Return a default value or throw an error
            }
        }
    
        // Method to get the front element of the queue without removing it
        int front() {
            // Implementation for front method...
            if (!isEmpty()) {
                return items[front];
            } else {
                // Handle empty queue scenario
                std::cout << "Queue is empty. No front element." << std::endl;
                return -1; // Return a default value or throw an error
            }
        }
    
        // Method to check if the queue is empty
        bool isEmpty() {
            // Implementation for isEmpty method...
            return front > rear;
        }
    
        // Method to check if the queue is full (for an array-based implementation)
        bool isFull() {
            // Implementation for isFull method...
            return rear == maxSize - 1;
        }
    
        // Method to display all elements in the queue
        void display() {
            // Implementation for display method...
            std::cout << "Queue: ";
            for (int i = front; i <= rear; i++) {
                std::cout << items[i] << " ";
            }
            std::cout << std::endl;
        }
    };
    `;
    
    const pseudoCode = `class Queue {
        constructor() {
            this.items = [];
            this.front = 0;
            this.rear = -1;
            this.maxSize = 0;
        }
    
        Queue(size) {
            this.items = new Array(size);
            this.front = 0;
            this.rear = -1;
            this.maxSize = size;
        }
    
        enqueue(item) {
            // Implementation for enqueue method...
            if (!this.isFull()) {
                this.rear++;
                this.items[this.rear] = item;
            } else {
                // Handle full queue scenario
                console.log("Queue is full
    .
    Queue is full. Cannot enqueue element.");
        }
    }

    dequeue() {
        // Implementation for dequeue method...
        if (!this.isEmpty()) {
            const removedItem = this.items[this.front];
            this.front++;
            return removedItem;
        } else {
            // Handle empty queue scenario
            console.log("Queue is empty. Cannot dequeue element.");
            return -1; // Return a default value or throw an error
        }
    }

    front() {
        // Implementation for front method...
        if (!this.isEmpty()) {
            return this.items[this.front];
        } else {
            // Handle empty queue scenario
            console.log("Queue is empty. No front element.");
            return -1; // Return a default value or throw an error
        }
    }

    isEmpty() {
        // Implementation for isEmpty method...
        return this.front > this.rear;
    }

    isFull() {
        // Implementation for isFull method...
        return this.rear === this.maxSize - 1;
    }
}
`;

   const explanation = `<div class="explanation">
      <h2>Queue Concept:</h2>
      <p>
         A queue is a linear data structure that follows the First In, First Out (FIFO) principle, akin to a line of people waiting for service.
      </p>
      
      <h2>How Queue Works:</h2>
      <p>
         Think of a queue at a ticket counter. People join at the rear (enqueue) and leave from the front (dequeue). The first person in line gets served first.
      </p>
      
      <h2>Using an Array to Implement a Queue:</h2>
      <p>
         An array can represent a queue where elements are added (enqueue) from the rear and removed (dequeue) from the front.
      </p>
      
      <h2>Queue Operations:</h2>
      <p>
         <b>Enqueue:</b> Adds an element to the rear of the queue.
      </p>
      <p>
         <b>Dequeue:</b> Removes the element from the front of the queue.
      </p>
      <p>
         <b>Front:</b> Returns the element at the front of the queue without removing it.
      </p>
      <p>
         <b>isEmpty:</b> Checks if the queue is empty.
      </p>
      <p>
         <b>isFull:</b> Checks if the queue is full (in an array-based implementation).
      </p>
      
      <h2>Benefits of a Queue:</h2>
      <p>
         <b>Order Maintenance:</b> Maintains a sequential order, ensuring fairness in processing elements.
      </p>
      <p>
         <b>Efficient Insertion and Deletion:</b> Enqueue and dequeue operations are quick and straightforward.
      </p>
      
      <h2>Drawbacks:</h2>
      <p>
         <b>Limitation on Access:</b> Direct access to elements in the middle of the queue is restricted.
      </p>
      
      <h2>Runtime Complexity:</h2>
      <p>
         <b>Enqueue Operation:</b> O(1) - Constant time complexity, adds elements to the rear of the queue.
      </p>
      <p>
         <b>Dequeue Operation:</b> O(1) - Constant time complexity, removes elements from the front of the queue.
      </p>
      <p>
         <b>Front Operation:</b> O(1) - Constant time complexity, accesses the front element without removing it.
      </p>
      <p>
         <b>isEmpty Operation:</b> O(1) - Constant time complexity, checks if the queue is empty.
      </p>
      
      <h2>Real-world Analogies:</h2>
      <p>
         <b>Ticket Counter Queue:</b> People wait in line for tickets, served in the order they joined.
      </p>
      <p>
         <b>Checkout Line at a Store:</b> Customers join and leave the queue in the order they arrive.
      </p>
      <p>
         Drawing parallels to everyday scenarios helps understand the functionality and purpose of a queue.
      </p>
   </div>
   `;

   return (
      
      <div className="Queue">
        <UpperMenu nameOfPage={"Queue"} search={false} />
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
          <button className="side-button" onClick={() => this.enqueue(this.state.newNumber)}>enqueue</button>
          <button className="side-button" onClick={() => this.dequeue()}>dequeue</button>
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
        <div className="queue-container">
          <div className="queue">
          {this.state.front === null ? null : (
            frontNodes.map((node, index) => (
              <Node className="QueueNode"
                data={node.data}
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

export default Queue;
