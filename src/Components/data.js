import React from "react";
import InsertionSort from "../windows/InsertionSort";
import BubbleSort from "../windows/BubbleSort";
import BFS from "../windows/BFS";
import DFS from "../windows/DFS";
import SelectionSort from "../windows/SelectionSort";
import MergeSort from "../windows/MergeSort";
import HeapSort from "../windows/HeapSort";
import QuickSort from "../windows/QuickSort";
import BinarySort from "../windows/BinarySort";
import CountingSort from "../windows/CountingSort";
import RadixSort from "../windows/RadixSort";
import BucketSort from "../windows/BucketSort";
import LinkedList from "../windows/LinkedList";
import Stack from "../windows/Stack";
import Queue from "../windows/Queue";
import BST from "../windows/BST";
import AVL from "../windows/AVL";
import Heap from "../windows/Heap";
import MaxMinHeap from "../windows/MaxMinHeap";
import PriorityQueue from "../windows/PriorityQueue";
import DecisionTree from "../windows/DecisionTree";
import HashTable from "../windows/HashTable";
import Trie from "../windows/Trie";
import HuffmanAlgorithm from "../windows/HuffmanAlgorithm.js";
import Graphs from "../windows/Graphs";
import TwoThreeTree from "../windows/2-3Tree";
import BTree from "../windows/BTree";
import FindIValue from "../windows/FindTheIValue";
import AStar from "../windows/AStar";
import IDSearch from "../windows/IDSearch";
import HillClimbingSearch from "../windows/HillClimbingSearch";
import GradientDescent from "../windows/GradientDescent";
import Minimax from "../windows/Minimax";
import CSP from "../windows/CSP";
import Regression from "../windows/Regression";
import KNN from "../windows/KNN";
import KMeans from "../windows/KMeans";

// Import images with fixed paths
import TreeImage from "../icons/2-3 Tree.png";
import AStarImage from "../icons/A star.png";
import AVLImage from "../icons/AVL.png";
import BTreeImage from "../icons/B-Tree.png";
import BinarySortImage from "../icons/binary sort.png";
import BSTImage from "../icons/BST.png";
import BubbleSortImage from "../icons/Bubble sort.png";
import BucketSortImage from "../icons/Bucket Sort.png";
import CountingSortImage from "../icons/Counting sort.png";
import CSPImage from "../icons/CSP.png";
import DecisionTreeImage from "../icons/decision-tree.png";
import FindIValueImage from "../icons/find the i value.png";
import GradientDescentImage from "../icons/Gradient descent.png";
import GraphsImage from "../icons/Graphs.png";
import HashTableImage from "../icons/Hash table.png";
import HeapSortImage from "../icons/Heap sort.png";
import HeapImage from "../icons/Heap.png";
import HillClimbingImage from "../icons/Hill climbing.png";
import HuffmanImage from "../icons/Huffman.png";
import IDSearchImage from "../icons/ID search1.png";
import InsertionSortImage from "../icons/Insertion_sort.png";
import KMeansImage from "../icons/K means.png";
import KNNImage from "../icons/KNN.png";
import RegressionImage from "../icons/linear-regression.png";
import LinkedListImage from "../icons/Linked list.png";
import MergeSortImage from "../icons/Merge sort.png";
import MinMaxHeapImage from "../icons/Min or Max Heap.png";
import MinimaxImage from "../icons/MinMax.png";
import PriorityQueueImage from "../icons/Priority queue.png";
import QueueImage from "../icons/queue.png";
import QuickSortImage from "../icons/Quick Sort.png";
import RadixSortImage from "../icons/Radix Sort.png";
import SelectionSortImage from "../icons/Selection sort.png";
import StackImage from "../icons/stack.png";
import TrieImage from "../icons/Trie.png";
import BFSIMG from "../icons/BFS.png";
import DFSIMG from "../icons/DFS.png";

export const buttonsData = [
  {
    text: "Linked List",
    link: "/src/windows/LinkedList",
    image: LinkedListImage,
  },
  { text: "Insertion Sort", link: "/InsertionSort", image: InsertionSortImage }, // src/windows can be deleted
  {
    text: "Bubble Sort",
    link: "/src/windows/BubbleSort",
    image: BubbleSortImage,
  },
  { text: "BFS", link: "/src/windows/BFS", image: BFSIMG },
  { text: "DFS", link: "/src/windows/DFS", image: DFSIMG },
  {
    text: "Selection Sort",
    link: "/src/windows/SelectionSort",
    image: SelectionSortImage,
  },
  { text: "Merge Sort", link: "/src/windows/MergeSort", image: MergeSortImage },
  { text: "Heap Sort", link: "/src/windows/HeapSort", image: HeapSortImage },
  { text: "Quick Sort", link: "/src/windows/QuickSort", image: QuickSortImage },
  {
    text: "Binary Sort",
    link: "/src/windows/BinarySort",
    image: BinarySortImage,
  },
  {
    text: "Counting Sort",
    link: "/src/windows/CountingSort",
    image: CountingSortImage,
  },
  { text: "Radix Sort", link: "/src/windows/RadixSort", image: RadixSortImage },
  {
    text: "Bucket Sort",
    link: "/src/windows/BucketSort",
    image: BucketSortImage,
  },
  { text: "Stack", link: "/src/windows/Stack", image: StackImage },
  { text: "Queue", link: "/src/windows/Queue", image: QueueImage },
  { text: "Binary Search Tree", link: "/src/windows/BST", image: BSTImage },
  { text: "AVL Tree", link: "/src/windows/AVL", image: AVLImage },
  { text: "Heap", link: "/src/windows/Heap", image: HeapImage },
  {
    text: "Max/Min Heap",
    link: "/src/windows/MaxMinHeap",
    image: MinMaxHeapImage,
  },
  {
    text: "Priority Queue",
    link: "/src/windows/PriorityQueue",
    image: PriorityQueueImage,
  },
  {
    text: "Decision Tree",
    link: "/src/windows/DecisionTree",
    image: DecisionTreeImage,
  },
  { text: "Hash Table", link: "/src/windows/HashTable", image: HashTableImage },
  { text: "Trie", link: "/src/windows/Trie", image: TrieImage },
  {
    text: "Huffman Algorithm",
    link: "/src/windows/HuffmanAlgorithm",
    image: HuffmanImage,
  },
  { text: "Graphs", link: "/src/windows/Graphs", image: GraphsImage },
  { text: "Two-Three Tree", link: "/src/windows/2-3Tree", image: TreeImage },
  { text: "B-Tree", link: "/src/windows/BTree", image: BTreeImage },
  {
    text: "Find the I value",
    link: "/src/windows/FindTheIValue",
    image: FindIValueImage,
  },
  { text: "A* Search", link: "/src/windows/AStar", image: AStarImage },
  { text: "ID Search", link: "/src/windows/IDSearch", image: IDSearchImage },
  {
    text: "Hill Climbing Search",
    link: "/src/windows/HillClimbingSearch",
    image: HillClimbingImage,
  },
  {
    text: "Gradient Descent",
    link: "/src/windows/GradientDescent",
    image: GradientDescentImage,
  },
  { text: "Minimax", link: "/src/windows/Minimax", image: MinimaxImage },
  { text: "CSP", link: "/src/windows/CSP", image: CSPImage },
  {
    text: "Regression",
    link: "/src/windows/Regression",
    image: RegressionImage,
  },
  { text: "KNN", link: "/src/windows/KNN", image: KNNImage },
  { text: "K-Means", link: "/src/windows/KMeans", image: KMeansImage },
];

export const routeData = [
  { path: "/InsertionSort", element: <InsertionSort /> },
  { path: "/src/windows/BubbleSort", element: <BubbleSort /> },
  { path: "/src/windows/BFS", element: <BFS /> },
  { path: "/src/windows/DFS", element: <DFS /> },
  { path: "/src/windows/SelectionSort", element: <SelectionSort /> },
  { path: "/src/windows/MergeSort", element: <MergeSort /> },
  { path: "/src/windows/HeapSort", element: <HeapSort /> },
  { path: "/src/windows/QuickSort", element: <QuickSort /> },
  { path: "/src/windows/BinarySort", element: <BinarySort /> },
  { path: "/src/windows/CountingSort", element: <CountingSort /> },
  { path: "/src/windows/RadixSort", element: <RadixSort /> },
  { path: "/src/windows/BucketSort", element: <BucketSort /> },
  { path: "/src/windows/LinkedList", element: <LinkedList /> },
  { path: "/src/windows/Stack", element: <Stack /> },
  { path: "/src/windows/Queue", element: <Queue /> },
  { path: "/src/windows/BST", element: <BST /> },
  { path: "/src/windows/AVL", element: <AVL /> },
  { path: "/src/windows/Heap", element: <Heap /> },
  { path: "/src/windows/MaxMinHeap", element: <MaxMinHeap /> },
  { path: "/src/windows/PriorityQueue", element: <PriorityQueue /> },
  { path: "/src/windows/DecisionTree", element: <DecisionTree /> },
  { path: "/src/windows/HashTable", element: <HashTable /> },
  { path: "/src/windows/Trie", element: <Trie /> },
  { path: "/src/windows/HuffmanAlgorithm", element: <HuffmanAlgorithm /> },
  { path: "/src/windows/Graphs", element: <Graphs /> },
  { path: "/src/windows/2-3Tree", element: <TwoThreeTree /> },
  { path: "/src/windows/BTree", element: <BTree /> },
  { path: "/src/windows/FindTheIValue", element: <FindIValue /> },
  { path: "/src/windows/AStar", element: <AStar /> },
  { path: "/src/windows/IDSearch", element: <IDSearch /> },
  { path: "/src/windows/HillClimbingSearch", element: <HillClimbingSearch /> },
  { path: "/src/windows/GradientDescent", element: <GradientDescent /> },
  { path: "/src/windows/Minimax", element: <Minimax /> },
  { path: "/src/windows/CSP", element: <CSP /> },
  { path: "/src/windows/Regression", element: <Regression /> },
  { path: "/src/windows/KNN", element: <KNN /> },
  { path: "/src/windows/KMeans", element: <KMeans /> },
];

export const pythonCodeBubble = `def bubble_sort(arr):
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

export const javaCodeBubble = `public class BubbleSort {
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

export const cppCodeBubble = `#include <iostream>
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

export const pseudoCodeBubble = `procedure bubbleSort(arr)
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

export const explanationBubble = `<div class="explanation">
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

export const pythonCodeInsertion = `def insertion_sort(arr):
    """
    Sorts the input array using the Insertion Sort algorithm.

    Parameters:
    - arr (list): The input list to be sorted.

    Returns:
    - None: The function modifies the input list in-place.
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
`;

export const javaCodeInsertion = `public class InsertionSort {
      /**
       * Sorts the input array using the Insertion Sort algorithm.
       *
       * @param arr The input array to be sorted.
       */
      public static void insertionSort(int[] arr) {
          for (int i = 1; i < arr.length; ++i) {
              int key = arr[i];
              int j = i - 1;
              while (j >= 0 && key < arr[j]) {
                  arr[j + 1] = arr[j];
                  j = j - 1;
              }
              arr[j + 1] = key;
          }
      }
  }
  `;

export const cppCodeInsertion = `void insertionSort(int arr[], int n) {
    /**
     * Sorts the input array using the Insertion Sort algorithm.
     *
     * @param arr The input array to be sorted.
     * @param n   The number of elements in the array.
     */
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}
`;

export const pseudoCodeInsertion = `insertionSort(arr)
  /**
   * Sorts the input array using the Insertion Sort algorithm.
   *
   * @param arr The input array to be sorted.
   */
  for i = 1 to length(arr)
      key = arr[i]
      j = i - 1
      while j >= 0 and key < arr[j]
          arr[j + 1] = arr[j]
          j = j - 1
      arr[j + 1] = key
`;

export const explanationInsertion = `<div class="explanation">
  <h2>Insertion Sort Concept:</h2>
  <p>
      Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. 
      It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
  </p>
  
  <h2>How Insertion Sort Works:</h2>
  <p>
      The array is divided into a sorted and an unsorted region. Elements from the unsorted region are picked and placed 
      at the correct position in the sorted region.
  </p>
  
  <h2>Algorithm Steps:</h2>
  <ol>
      <li>Start with the second element (index 1) as the key.</li>
      <li>Compare the key with the elements in the sorted region.</li>
      <li>Shift the greater elements to the right to make space for the key.</li>
      <li>Insert the key at the correct position in the sorted region.</li>
  </ol>
  
  <h2>Benefits of Insertion Sort:</h2>
  <p>
      <b>Simplicity:</b> Easy to understand and implement.
  </p>
  <p>
      <b>Adaptive:</b> Efficient for small datasets or nearly sorted datasets.
  </p>
  
  <h2>Drawbacks:</h2>
  <p>
      <b>Efficiency:</b> Inefficient for large datasets compared to other algorithms.
  </p>
  
  <h2>Runtime Complexity:</h2>
  <p>
      <b>Best Case:</b> O(n) - Already sorted array.
  </p>
  <p>
      <b>Average and Worst Case:</b> O(n^2) - Quadratic time complexity.
  </p>
  
  <h2>Real-world Analogies:</h2>
  <p>
      <b>Sorting a Deck of Cards:</b> Similar to sorting a hand of cards by repeatedly placing cards in their correct position.
  </p>
  <p>
      <b>Building a Hand of Cards:</b> Picking cards from a deck and inserting them in the correct order.
  </p>
  <p>
      Understanding the concept with familiar scenarios helps grasp the simplicity and limitations of insertion sort.
  </p>
</div>
`;

export const pythonCodeLinkedList = `# Create a Node class to create a node
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

export const javaCodeLinkedList = `/* Create a Node class to create a node */
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

export const cppCodeLinkedList = ` /* Create a Node class to create a node */
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

export const pseudoCodeLinkedList = ` /* Create a Node class to create a node */
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

export const explanationLinkedList = `<div class="explanation">
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
