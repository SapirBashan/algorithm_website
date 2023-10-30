import React from 'react';
import InsertionSort from '../windows/InsertionSort';
import BubbleSort from '../windows/BubbleSort';
import BFS from '../windows/BFS';
import SelectionSort from '../windows/SelectionSort';
import MergeSort from '../windows/MergeSort';
import HeapSort from '../windows/HeapSort';
import QuickSort from '../windows/QuickSort';
import BinarySort from '../windows/BinarySort';
import CountingSort from '../windows/CountingSort';
import RadixSort from '../windows/RadixSort';
import BucketSort from '../windows/BucketSort';
import LinkedList from '../windows/LinkedList';
import Stack from '../windows/Stack';
import Queue from '../windows/Queue';
import BST from '../windows/BST';
import AVL from '../windows/AVL';
import Heap from '../windows/Heap';
import MaxMinHeap from '../windows/MaxMinHeap';
import PriorityQueue from '../windows/PriorityQueue';
import DecisionTree from '../windows/DecisionTree';
import HashTable from '../windows/HashTable';
import Trie from '../windows/Trie';
import HuffmanAlgorithm from "../windows/HuffmanAlgorithm.js";
import Graphs from '../windows/Graphs';
import TwoThreeTree from '../windows/2-3Tree';
import BTree from '../windows/BTree';
import FindIValue from '../windows/FindTheIValue';
import AStar from '../windows/AStar';
import IDSearch from '../windows/IDSearch';
import HillClimbingSearch from '../windows/HillClimbingSearch';
import GradientDescent from '../windows/GradientDescent';
import Minimax from '../windows/Minimax';
import CSP from '../windows/CSP';
import Regression from '../windows/Regression';
import KNN from '../windows/KNN';
import KMeans from '../windows/KMeans';

export const buttonsData = [
  { text: 'Insertion Sort', link: '/src/windows/InsertionSort' },
  { text: 'Bubble Sort', link: '/src/windows/BubbleSort' },
  { text: 'BFS', link: '/src/windows/BFS'},
  { text: 'Selection Sort', link: '/src/windows/SelectionSort' },
  { text: 'Merge Sort', link: '/src/windows/MergeSort' },
  { text: 'Heap Sort', link: '/src/windows/HeapSort' },
  { text: 'Quick Sort', link: '/src/windows/QuickSort' },
  { text: 'Binary Sort', link: '/src/windows/BinarySort' },
  { text: 'Counting Sort', link: '/src/windows/CountingSort' },
  { text: 'Radix Sort', link: '/src/windows/RadixSort' },
  { text: 'Bucket Sort', link: '/src/windows/BucketSort' },
  { text: 'Linked List', link: '/src/windows/LinkedList' },
  { text: 'Stack', link: '/src/windows/Stack' },
  { text: 'Queue', link: '/src/windows/Queue' },
  { text: 'Binary Search Tree', link: '/src/windows/BST' },
  { text: 'AVL Tree', link: '/src/windows/AVL' },
  { text: 'Heap', link: '/src/windows/Heap' },
  { text: 'Max/Min Heap', link: '/src/windows/MaxMinHeap' },
  { text: 'Priority Queue', link: '/src/windows/PriorityQueue' },
  { text: 'Decision Tree', link: '/src/windows/DecisionTree' },
  { text: 'Hash Table', link: '/src/windows/HashTable' },
  { text: 'Trie', link: '/src/windows/Trie' },
  { text: 'Huffman Algorithm', link: '/src/windows/HuffmanAlgorithm' },
  { text: 'Graphs', link: '/src/windows/Graphs' },
  { text: 'Two-Three Tree', link: '/src/windows/2-3Tree' },
  { text: 'B-Tree', link: '/src/windows/BTree' },
  { text: 'Find the I value', link: '/src/windows/FindTheIValue' },
  { text: 'A* Search', link: '/src/windows/AStar' },
  { text: 'ID Search', link: '/src/windows/IDSearch' },
  { text: 'Hill Climbing Search', link: '/src/windows/HillClimbingSearch' },
  { text: 'Gradient Descent', link: '/src/windows/GradientDescent' },
  { text: 'Minimax', link: '/src/windows/Minimax' },
  { text: 'CSP', link: '/src/windows/CSP' },
  { text: 'Regression', link: '/src/windows/Regression' },
  { text: 'KNN', link: '/src/windows/KNN' },
  { text: 'K-Means', link: '/src/windows/KMeans' },
];

export const routeData = [
  { path: '/src/windows/InsertionSort', element: <InsertionSort /> },
  { path: '/src/windows/BubbleSort', element: <BubbleSort /> },
  { path: '/src/windows/BFS', element: <BFS />},
  { path: '/src/windows/SelectionSort', element: <SelectionSort /> },
  { path: '/src/windows/MergeSort', element: <MergeSort /> },
  { path: '/src/windows/HeapSort', element: <HeapSort /> },
  { path: '/src/windows/QuickSort', element: <QuickSort /> },
  { path: '/src/windows/BinarySort', element: <BinarySort /> },
  { path: '/src/windows/CountingSort', element: <CountingSort /> },
  { path: '/src/windows/RadixSort', element: <RadixSort /> },
  { path: '/src/windows/BucketSort', element: <BucketSort /> },
  { path: '/src/windows/LinkedList', element: <LinkedList /> },
  { path: '/src/windows/Stack', element: <Stack /> },
  { path: '/src/windows/Queue', element: <Queue /> },
  { path: '/src/windows/BST', element: <BST /> },
  { path: '/src/windows/AVL', element: <AVL /> },
  { path: '/src/windows/Heap', element: <Heap /> },
  { path: '/src/windows/MaxMinHeap', element: <MaxMinHeap /> },
  { path: '/src/windows/PriorityQueue', element: <PriorityQueue /> },
  { path: '/src/windows/DecisionTree', element: <DecisionTree /> },
  { path: '/src/windows/HashTable', element: <HashTable /> },
  { path: '/src/windows/Trie', element: <Trie /> },
  { path: '/src/windows/HuffmanAlgorithm', element: <HuffmanAlgorithm /> },
  { path: '/src/windows/Graphs', element: <Graphs /> },
  { path: '/src/windows/2-3Tree', element: <TwoThreeTree /> },
  { path: '/src/windows/BTree', element: <BTree /> },
  { path: '/src/windows/FindTheIValue', element: <FindIValue /> },
  { path: '/src/windows/AStar', element: <AStar /> },
  { path: '/src/windows/IDSearch', element: <IDSearch /> },
  { path: '/src/windows/HillClimbingSearch', element: <HillClimbingSearch /> },
  { path: '/src/windows/GradientDescent', element: <GradientDescent /> },
  { path: '/src/windows/Minimax', element: <Minimax /> },
  { path: '/src/windows/CSP', element: <CSP /> },
  { path: '/src/windows/Regression', element: <Regression /> },
  { path: '/src/windows/KNN', element: <KNN /> },
  { path: '/src/windows/KMeans', element: <KMeans /> },
];
