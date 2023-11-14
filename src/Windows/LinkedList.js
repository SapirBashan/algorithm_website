import React from "react";
import "./LinkedList.css";
import "../styles.css";
import TogglePopup from "../components/TogglePopup.js";
import Node from "../components/Node";


//this class is the linked list itself and it has all the functions for the linked list 
class LinkedList extends React.Component {


  //this constructer is incharge of the state of the linked list 
    constructor(props) {
      super(props);
      this.state = {
        head: null,
        backNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null, showPointer: false},
        ],
        newNumber: "",
        frontNodes: [
          { data: 6, Xmovment: [0], Ymovment: [] , color: null, showPointer: false},   
        ],
      };
    }
  

  handleInput = (e) => {
    this.setState({ newNumber: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.insertNode(this.state.newNumber);
    }
  }

  //this function is used to insert a node into the linked list 
  insertNode(value) {
    const { newNumber, frontNodes , backNodes } = this.state;
    const linkedList = [...backNodes];

    if(value === "") {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    if(isNaN(value)) {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    //i want that if the head is null i will ad a node to the head
    if(this.state.head === null) {
       //delete the head node
       this.cleanArray(frontNodes);
       this.cleanArray(backNodes);
       if (value) { 
        const newData = parseInt(value);
        const newNode = {
          data: newData,
          Xmovment: [0],
          Ymovment: [],
          color: ['hsl(196, 100, 40)'],
        };
        this.setState({
          head: newNode,
          frontNodes: [newNode],
          backNodes: [newNode],
          newNumber: "",
        });
       this.state.head = new Node(value);
      }
    }

    else {
      this.cleanArray(frontNodes);
      this.cleanArray(backNodes);
      if (value) {
        const newData = parseInt(value);
        const newNode = {
          data: newData,
          Xmovment: [ (-75 + (-40*linkedList.length*2)),6,8,0],
          Ymovment: [50,50,0],
          color: ['hsl(196, 100, 40)']
        };
         //this code makes the node before show the pointer
        frontNodes[frontNodes.length - 1].showPointer = true;
        
        let addedArray = [...frontNodes];
  
        this.setState({
          frontNodes: [...addedArray , newNode], // Update nodes with the new data
          backNodes: [...addedArray, newNode],  // Update nodes with the new data , the three dots are used to spread the array meaning that the array will be expanded meaning that the elements of the array will be added to the new array
          newNumber: "",
        });
     }
    }    
  }
  
  //this function is used to delete a node from the linked list
  deleteNodeAfterIndex() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];
    console.log(this.state.linkedListleangth);
    
    if(newNumber === "") {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    else if(isNaN(newNumber)) {
      alert("Please enter a number");
      this.state.newNumber = ""
      return;
    }
    else if(newNumber < 0)
    {
      alert("Please enter a positive number");
      this.state.newNumber = ""
      return;
    }
    else if(newNumber > linkedList.length) {
      alert("Please enter a number smaller then the linked list length");
      this.state.newNumber = ""
      return;
    }
    else{
    //delete the node in the index with animation
    let newFrontNodes = [...frontNodes];
    let newBackNodes = [...backNodes];
    let index = newNumber;

    newFrontNodes[index].Xmovment = [0];
    newFrontNodes[index].Ymovment = [90];
    newFrontNodes[index].color = ['hsl(12, 100, 50)'];
    newFrontNodes[index].duration = 5;

    newFrontNodes.splice(index, 1);
    newBackNodes.splice(index, 1);

    this.setState({
      frontNodes: newFrontNodes,
      backNodes: newBackNodes,
      newNumber: "",
    });
  }
  }

  //this function is used to delete the first node from the linked list
  deleteFirstNode() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];

    if(this.state.head === null) {
      alert("The linked list is empty");
      return;
    }
    if(linkedList.length === 0) {
      alert("The linked list is empty");
      return;
    }


    let newHead = linkedList[1]; 
    let newFrontNodes = [...frontNodes];
    const newBackNodes = [...backNodes];


    this.cleanArray(frontNodes);
    this.cleanArray(backNodes);
    newBackNodes[0].Xmovment = [0,0];
    newBackNodes[0].Ymovment = [0,90];
    newBackNodes[0].color = ['hsl(12, 100, 50)'];
    newBackNodes[0].duration = 5;

    for(let i = 1; i < newBackNodes.length; i++) {
      newBackNodes[i].Xmovment = [0,-60];
      newBackNodes[i].Ymovment = [0,0];
      newBackNodes[i].color = ['hsl(196, 100, 40)'];
    }

    this.setState({
      frontNodes: newBackNodes,
     })

     backNodes.shift();
  }

  animateNode() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];
    let newFrontNodes = [...frontNodes];
    
    backNodes.shift();
    frontNodes.shift();

    this.setState({
      frontNodes: newFrontNodes,
      backNodes: linkedList,
    })
  }

   
  //this function is used to find a node in the linked list
  findNode() {
    const { newNumber, frontNodes , backNodes, head } = this.state;
    const linkedList = [...backNodes];
    let listOfNodes = [];

    for(let i = 0; i < linkedList.length; i++) {
      if(linkedList[i].data === parseInt(newNumber)) {
        listOfNodes.push(i);
      }
    }
    if(listOfNodes.length === 0) {
      alert("The number is not in the linked list");
      return;
    }
    else{
      for(let i = 0; i < listOfNodes.length; i++) {
        frontNodes[listOfNodes[i]].color = ['hsl(0, 100, 50)'];
      }
    }

    alert(listOfNodes)
  }

  //this function is used to generate a random node in the linked list
  RandomNode() {
      let random = Math.floor(Math.random() * 100) + 1;
      this.insertNode(random);
  }

  cleanArray = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].Xmovment = [0];
      nodes[i].color = ['hsl(196, 100, 40)'];
    }
  }


  render() {
    const { frontNodes, newNumber, node } = this.state;

    const pythonCode = `# Create a Node class to create a node
    class Node:
      def __init__(self, data):
        self.data = data
        self.next = None

    # Create a LinkedList class
    class LinkedList:
      def __init__(self):
        self.head = None

      # Method to add a node at the end of LL
      def insertAtEnd(self, data):
        # Implementation for insertAtEnd method...

      # Method to remove first node of linked list
      def remove_first_node(self):
        # Implementation for remove_first_node method...

      # Method to remove at given index
      def remove_at_index(self, index):
        # Implementation for remove_at_index method...

      # Method to clear the linked list
      def clear(self):
        self.head = None

      # Method to find a node in the linked list
      def find(self, data):
        # Implementation for find method...
  `;

    const javaCode = `/* Create a Node class to create a node */
    class Node {
        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    /* Create a LinkedList class */
    class LinkedList {
        Node head;

        public LinkedList() {
            this.head = null;
        }

        /* Method to add a node at the end of LL */
        public void insertAtEnd(int data) {
            // Implementation for insertAtEnd method...
        }

        /* Method to remove first node of linked list */
        public void removeFirstNode() {
            // Implementation for removeFirstNode method...
        }

        /* Method to remove at given index */
        public void removeAtIndex(int index) {
            // Implementation for removeAtIndex method...
        }

        /* Method to clear the linked list */
        public void clear() {
            this.head = null;
        }

        /* Method to find a node in the linked list */
        public Node find(int data) {
            // Implementation for find method...
            return null; // Change this to return the found node
        }
    }`;

  const cppCode = ` /* Create a Node class to create a node */
    class Node {
    public:
        int data;
        Node* next;
        
        Node(int data) {
            this->data = data;
            this->next = nullptr;
        }
    };

    /* Create a LinkedList class */
    class LinkedList {
    private:
        Node* head;
    public:
        LinkedList() {
            head = nullptr;
        }
        
        /* Method to add a node at the end of LL */
        void insertAtEnd(int data) {
            // Implementation for insertAtEnd method...
        }
        
        /* Method to remove first node of linked list */
        void removeFirstNode() {
            // Implementation for removeFirstNode method...
        }
        
        /* Method to remove at given index */
        void removeAtIndex(int index) {
            // Implementation for removeAtIndex method...
        }
        
        /* Method to clear the linked list */
        void clear() {
            head = nullptr;
        }
        
        /* Method to find a node in the linked list */
        Node* find(int data) {
            // Implementation for find method...
            return nullptr; // Change this to return the found node
        }
    };`;

  const pseudoCode = ` /* Create a Node class to create a node */
    Node
        data
        next

    /* Create a LinkedList class */
    LinkedList
        head

    /* Method to add a node at the end of LL */
    insertAtEnd(data)
        // Implementation for insertAtEnd method...

    /* Method to remove first node of linked list */
    removeFirstNode()
        // Implementation for removeFirstNode method...

    /* Method to remove at given index */
    removeAtIndex(index)
        // Implementation for removeAtIndex method...

    /* Method to clear the linked list */
    clear()
        head = null

    /* Method to find a node in the linked list */
    find(data)
        // Implementation for find method...
        return null // Change this to return the found node
  `;

  const explination = `<div class="explanation">
    <h2>Linked List Concept:</h2>
    <p>
      A linked list is a linear collection of elements where each element is a separate object called a node. 
      Each node in a linked list contains two parts: the data itself, and a reference (link/pointer) to the next node in the sequence.
    </p>
    
    <h2>How Linked List Works:</h2>
    <p>
      Imagine a chain of linked containers. Each container holds some information (the data) and a pointer to the next container. 
      The first container is the starting point. It holds the first piece of information and points to the next container. 
      The last container points to nowhere, indicating the end of the list.
    </p>
    
    <h2>Benefits of Linked List over Other Data Structures:</h2>
    <p>
      <b>Dynamic Size:</b> Linked lists can grow or shrink in size during execution. 
      They allocate memory when needed and are not constrained by a fixed size.
    </p>
    <p>
      <b>Insertions and Deletions:</b> Adding or removing elements from a linked list is more efficient than some other data structures (like arrays) 
      because it involves changing pointers rather than shifting elements.
    </p>
    <p>
      <b>Ease of Modification:</b> Insertions and deletions can be done more easily at any position within the linked list without affecting the entire structure, 
      unlike arrays which might require shifting elements.
    </p>
    
    <h2>Visualizing Linked List:</h2>
    <p>
      Consider a train with each carriage representing a node. 
      Each carriage holds cargo (the data) and is linked to the next carriage. 
      To add a new carriage (node) or remove one, you simply need to adjust the connections between the carriages, not the whole train.
    </p>
    
    <h2>Drawbacks:</h2>
    <p>
      <b>Random Access:</b> Unlike arrays, linked lists don't support direct access to elements by index. 
      Traversing a linked list to reach a specific node might take more time.
    </p>
    <p>
      <b>Memory Overhead:</b> Each node in a linked list requires extra memory for storing the reference to the next node, 
      which might consume more memory compared to arrays for the same amount of data.
    </p>
    
    <h2>Summary:</h2>
    <p>
      Linked lists offer flexibility in managing data dynamically, allowing for efficient insertions and deletions. 
      They're useful when the size of data isn't known beforehand or when frequent insertions and deletions are expected.
    </p>
    
    <h2>Real-world Analogies:</h2>
    <p>
      <b>Train Cars:</b> Each train car is linked to the next one and can be added or removed easily.
    </p>
    <p>
      <b>Paper Chain Links:</b> Each link in a paper chain connects to the next link forming a sequence.
    </p>
    <p>
      By relating the concept to familiar real-world scenarios, individuals new to algorithms can grasp the basic idea and advantages 
      of using a linked list as a data structure.
    </p>
  </div>
  `;
    
  
    return (
      <div className="LinkedList">
        <h1>Linked List</h1>
        <input
          className="insert-node"
          type="number"
          value={newNumber}
          placeholder="Enter a number"
          onChange={this.handleInput}
          onKeyPress={(e) => this.handleKeyPress(e)}
        />        
        <button onClick={() => this.insertNode(this.state.newNumber)}>Insert</button>        
        <button onClick={() => this.deleteFirstNode()}>Delete First</button>
        <button onClick={() => this.deleteNodeAfterIndex()}>Delete index</button>
        <button onClick={() => this.findNode()}>Find</button>
        <button onClick={() => this.RandomNode()}>Random</button>
        <button onClick={() => this.setState({ head: null, frontNodes: [], backNodes: [], newNumber: "" })}>
          Clear
        </button>
        <h1> </h1>
        <div className="array-container-list">
          {this.state.head === null ? null : (
            frontNodes.map((node, index) => (
              <Node
                data={node.data}
                Xmovment={node.Xmovment}
                Ymovment={node.Ymovment}
                duration={5}
                color={node.color}
                showPointer={node.showPointer}
              />
            ))
          )}
        </div>
        <TogglePopup 
        text = {explination}
        tab1 = {pythonCode}
        tab2 = {javaCode} 
        tab3 = {cppCode} 
        tab4 = {pseudoCode}
        />
      </div>
    );

  }
}

export default LinkedList;