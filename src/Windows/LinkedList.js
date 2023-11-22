import React from "react";
import "./LinkedList.css";
import "../styles.css";
import TogglePopup from "../components/TogglePopup.js";
import Node from "../components/Node";
import UpperMenu from "../components/UpperMenu.js";
import GenericPage from "../components/GenericPage.js";


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

  const explanation = `<div class="explanation">
    <h2>Linked List Concept:</h2>
    <p>
      A linked list is a linear collection of elements where each element is a separate object called a node. 
      Each node contains data and a reference to the next node.
    </p>
    
    <h2>How Linked List Works:</h2>
    <p>
      Think of a chain of containers. Each container holds data and a link to the next container. 
      The first container starts the chain and points to the next. The last one points to nowhere, indicating the end.
    </p>
    
    <h2>Benefits of Linked List:</h2>
    <p>
      <b>Dynamic Size:</b> Linked lists can change size during use, allocating memory as needed.
    </p>
    <p>
      <b>Insertions and Deletions:</b> Adding or removing elements is efficient as it involves changing links, not shifting elements.
    </p>
    <p>
      <b>Ease of Modification:</b> Insertions and deletions can be done easily without affecting the entire structure.
    </p>
    
    <h2>Visualizing Linked List:</h2>
    <p>
      Imagine a train with carriages. Each holds data and links to the next. 
      Adding or removing carriages involves adjusting connections, not the entire train.
    </p>
    
    <h2>Drawbacks:</h2>
    <p>
      <b>Random Access:</b> Unlike arrays, accessing specific elements may take longer by traversing the list.
    </p>
    <p>
      <b>Memory Overhead:</b> Each node needs extra memory for the reference, potentially consuming more memory compared to arrays.
    </p>
    
    <h2>Runtime Complexity:</h2>
    <p>
      <b>Insertion at End:</b> O(1) - Constant time complexity by updating the tail pointer.
    </p>
    <p>
      <b>Removal of First Node:</b> O(1) - Constant time complexity by updating the head pointer.
    </p>
    <p>
      <b>Removal at Given Index, Finding a Node:</b> O(n) - Linear time complexity involving traversing the list.
    </p>
    <p>
      <b>Find a Node, Finding a Node:</b> O(n) - Linear time complexity involving traversing the list.
    </p>
    <p>
      <b>Clearing the Linked List:</b> O(1) - Constant time complexity by updating the head pointer to null.
    </p>
    
    <h2>Real-world Analogies:</h2>
    <p>
      <b>Train Cars:</b> Each train car links to the next and can be added or removed easily.
    </p>
    <p>
      <b>Paper Chain Links:</b> Each link forms a sequence and connects to the next link.
    </p>
    <p>
      Relating concepts to familiar scenarios helps understand the advantages of using a linked list.
    </p>
  </div>
  `;

    
  
    return (
      <div>
      <UpperMenu nameOfPage = {"Linked List"} search = {false}/>
      <GenericPage
        explanation={explanation}
        pythonCode={pythonCode}
        javaCode={javaCode}
        cppCode={cppCode}
        pseudoCode={pseudoCode}
        presentational={
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
        </div>}
        buttons={
        <div>
          <input
            className="insert"
            type="number"
            value={newNumber}
            placeholder="Enter a number"
            onChange={this.handleInput}
            onKeyPress={(e) => this.handleKeyPress(e)}
          />        
          <button className="side-button" onClick={() => this.insertNode(this.state.newNumber)}>Insert</button>        
          <button className="side-button" onClick={() => this.deleteFirstNode()}>Delete First</button>
          <button className="side-button" onClick={() => this.deleteNodeAfterIndex()}>Delete index</button>
          <button className="side-button" onClick={() => this.findNode()}>Find</button>
          <button className="side-button" onClick={() => this.RandomNode()}>Random</button>
          <button className="side-button" onClick={() => this.setState({ head: null, frontNodes: [], backNodes: [], newNumber: "" })}>
            Clear
          </button>
        </div>
        }
        
      /></div>

      // <div className="LinkedList">
      //   <UpperMenu nameOfPage = {"Linked List"} search = {false}/>
      //   <input
      //     className="insert-node"
      //     type="number"
      //     value={newNumber}
      //     placeholder="Enter a number"
      //     onChange={this.handleInput}
      //     onKeyPress={(e) => this.handleKeyPress(e)}
      //   />        
      //   <button onClick={() => this.insertNode(this.state.newNumber)}>Insert</button>        
      //   <button onClick={() => this.deleteFirstNode()}>Delete First</button>
      //   <button onClick={() => this.deleteNodeAfterIndex()}>Delete index</button>
      //   <button onClick={() => this.findNode()}>Find</button>
      //   <button onClick={() => this.RandomNode()}>Random</button>
      //   <button onClick={() => this.setState({ head: null, frontNodes: [], backNodes: [], newNumber: "" })}>
      //     Clear
      //   </button>
      //   <h1> </h1>
      //   <div className="array-container-list">
      //     {this.state.head === null ? null : (
      //       frontNodes.map((node, index) => (
      //         <Node
      //           data={node.data}
      //           Xmovment={node.Xmovment}
      //           Ymovment={node.Ymovment}
      //           duration={5}
      //           color={node.color}
      //           showPointer={node.showPointer}
      //         />
      //       ))
      //     )}
      //   </div>
      //   <TogglePopup 
      //   text = {explanation}
      //   tab1 = {pythonCode}
      //   tab2 = {javaCode} 
      //   tab3 = {cppCode} 
      //   tab4 = {pseudoCode}
      //   />
      // </div>
    );

  }
}

export default LinkedList;