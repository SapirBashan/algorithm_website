import React from 'react';
// import InsertionSort from './windows/insertionSort';
import BubbleSort from '../windows/BubbleSort';
import BFS from '../windows/BFS';
// import SelectionSort from './windows/selectionSort';
// import MergeSort from './windows/mergeSort';
// import HeapSort from './windows/heapSort';
// import QuickSort from './windows/quickSort';
// import BinarySort from './windows/binarySort';
// import CountingSort from './windows/countingSort';
// import RadixSort from './windows/radixSort';
// import BucketSort from './windows/bucketSort';
// import LinkedList from './windows/linkedList';
// import Stack from './windows/stack';
// import Queue from './windows/queue';
// import BST from './windows/bst';
// import AVL from './windows/avl';
// import Heap from './windows/heap';
// import MaxMinHeap from './windows/maxMinHeap';
// import PriorityQueue from './windows/priorityQueue';
// import DecisionTree from './windows/decisionTree';
// import HashTable from './windows/hashTable';
// import Trie from './windows/trie';
// import HuffmanAlgorithm from './windows/huffmanAlgorithm';
// import Graphs from './windows/graphs';
// import TwoThreeTree from './windows/twoThreeTree';
// import BTree from './windows/bTree';
// import FindIValue from './windows/findIValue';
// import AStar from './windows/aStar';
// import IDSearch from './windows/idSearch';
// import HillClimbingSearch from './windows/hillClimbingSearch';
// import GradientDescent from './windows/gradientDescent';
// import Minimax from './windows/minimax';
// import CSP from './windows/csp';
// import Regression from './windows/regression';
// import KNN from './windows/knn';
// import KMeans from './windows/kMeans';



export const buttonsData = [
  { text: 'Insertion Sort', link: '/src/windows/insertionSort' },
  { text: 'Bubble Sort', link: '/src/windows/bubbleSort' },
  { text: 'BFS', link: '/src/windows/BFS'},
  { text: 'Selection Sort', link: '/src/windows/selectionSort' },
  { text: 'Merge Sort', link: '/src/windows/mergeSort' },
  { text: 'Heap Sort', link: '/src/windows/heapSort' },
  { text: 'Quick Sort', link: '/src/windows/quickSort' },
  { text: 'Binary Sort', link: '/src/windows/binarySort' },
  { text: 'Counting Sort', link: '/src/windows/countingSort' },
  { text: 'Radix Sort', link: '/src/windows/radixSort' },
  { text: 'Bucket Sort', link: '/src/windows/bucketSort' },
  { text: 'Linked List', link: '/src/windows/linkedList' },
  { text: 'Stack', link: '/src/windows/stack' },
  { text: 'Queue', link: '/src/windows/queue' },
  { text: 'Binary Search Tree', link: '/src/windows/bst' },
  { text: 'AVL Tree', link: '/src/windows/avl' },
  { text: 'Heap', link: '/src/windows/heap' },
  { text: 'Max/Min Heap', link: '/src/windows/maxMinHeap' },
  { text: 'Priority Queue', link: '/src/windows/priorityQueue' },
  { text: 'Decision Tree', link: '/src/windows/decisionTree' },
  { text: 'Hash Table', link: '/src/windows/hashTable' },
  { text: 'Trie', link: '/src/windows/trie' },
  { text: 'Huffman Algorithm', link: '/src/windows/huffmanAlgorithm' },
  { text: 'Graphs', link: '/src/windows/graphs' },
  { text: '2–3 Tree', link: '/src/windows/twoThreeTree' },
  { text: 'B-Tree', link: '/src/windows/bTree' },
  { text: 'Find the I value', link: '/src/windows/findIValue' },
  { text: 'A* Search', link: '/src/windows/aStar' },
  { text: 'ID Search', link: '/src/windows/idSearch' },
  { text: 'Hill Climbing Search', link: '/src/windows/hillClimbingSearch' },
  { text: 'Gradient Descent', link: '/src/windows/gradientDescent' },
  { text: 'Minimax', link: '/src/windows/minimax' },
  { text: 'CSP', link: '/src/windows/csp' },
  { text: 'Regression', link: '/src/windows/regression' },
  { text: 'KNN', link: '/src/windows/knn' },
  { text: 'K-Means', link: '/src/windows/kMeans' },
];

export const routeData = [
  // { path: '/src/windows/insertionSort', element: <InsertionSort /> },
  { path: '/src/windows/bubbleSort', element: <BubbleSort /> },
  { path: '/src/windows/BFS', element: <BFS />},
  // { path: '/src/windows/selectionSort', element: <SelectionSort /> },
  // { path: '/src/windows/mergeSort', element: <MergeSort /> },
  // { path: '/src/windows/heapSort', element: <HeapSort /> },
  // { path: '/src/windows/quickSort', element: <QuickSort /> },
  // { path: '/src/windows/binarySort', element: <BinarySort /> },
  // { path: '/src/windows/countingSort', element: <CountingSort /> },
  // { path: '/src/windows/radixSort', element: <RadixSort /> },
  // { path: '/src/windows/bucketSort', element: <BucketSort /> },
  // { path: '/src/windows/linkedList', element: <LinkedList /> },
  // { path: '/src/windows/stack', element: <Stack /> },
  // { path: '/src/windows/queue', element: <Queue /> },
  // { path: '/src/windows/bst', element: <BST /> },
  // { path: '/src/windows/avl', element: <AVL /> },
  // { path: '/src/windows/heap', element: <Heap /> },
  // { path: '/src/windows/maxMinHeap', element: <MaxMinHeap /> },
  // { path: '/src/windows/priorityQueue', element: <PriorityQueue /> },
  // { path: '/src/windows/decisionTree', element: <DecisionTree /> },
  // { path: '/src/windows/hashTable', element: <HashTable /> },
  // { path: '/src/windows/trie', element: <Trie /> },
  // { path: '/src/windows/huffmanAlgorithm', element: <HuffmanAlgorithm /> },
  // { path: '/src/windows/graphs', element: <Graphs /> },
  // { path: '/src/windows/twoThreeTree', element: <TwoThreeTree /> },
  // { path: '/src/windows/bTree', element: <BTree /> },
  // { path: '/src/windows/findIValue', element: <FindIValue /> },
  // { path: '/src/windows/aStar', element: <AStar /> },
  // { path: '/src/windows/idSearch', element: <IDSearch /> },
  // { path: '/src/windows/hillClimbingSearch', element: <HillClimbingSearch /> },
  // { path: '/src/windows/gradientDescent', element: <GradientDescent /> },
  // { path: '/src/windows/minimax', element: <Minimax /> },
  // { path: '/src/windows/csp', element: <CSP /> },
  // { path: '/src/windows/regression', element: <Regression /> },
  // { path: '/src/windows/knn', element: <KNN /> },
  // { path: '/src/windows/kMeans', element: <KMeans /> },
];
