import React, { Component } from 'react';
import './UpperMenu.css';
import magnifier from"../icons/magnifier.png"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { routeData ,buttonsData } from '../components/data.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from "../icons/logo.png"


class UpperMenu extends Component {

  searchOptions = [
    "Insertion Sort",
    "Bubble Sort",
    "BFS",
    "DFS",
    "Selection Sort",
    "Merge Sort",
    "Heap Sort",
    "Quick Sort",
    "Binary Sort",
    "Counting Sort",
    "Radix Sort",
    "Bucket Sort",
    "Linked List",
    "Stack",
    "Queue",
    "Binary Search Tree",
    "AVL Tree",
    "Heap",
    "Max/Min Heap",
    "Priority Queue",
    "Decision Tree",
    "Hash Table",
    "Trie",
    "Huffman Algorithm",
    "Graphs",
    "Two-Three Tree",
    "B-Tree",
    "Find the I value",
    "A* Search",
    "ID Search",
    "Hill Climbing Search",
    "Gradient Descent",
    "Minimax",
    "CSP",
    "Regression",
    "KNN",
    "K-Means"
  ];
  

  filterSearchResults = (query) => {
    // Convert the query to lowercase for case-insensitive search
    const lowercaseQuery = query.toLowerCase();

    // Filter search options based on the lowercase query
    const filteredResults = this.searchOptions.filter(option =>
      option.toLowerCase().includes(lowercaseQuery)
    );

    return filteredResults;
  };

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      showResults: false, // Add this line to track whether to show search results or not
    };
  }

  
  handleInputChange = (event) => {
    const searchQuery = event.target.value;
    const filteredButtons = buttonsData.filter(
      (button) => button.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.props.onSearch(filteredButtons === null ? "" : filteredButtons ); // Pass filtered buttons to parent component
    this.setState({ searchQuery, showResults: filteredButtons.length > 0 });
  };

  search = () => {
    console.log('Searching for:', this.state.searchQuery);
    this.setState({ showResults: true });
  };


  handleSearchResultClick = (result) => {

    let myLink;
    for (let i = 0; i < buttonsData.length; i++) {
      if (buttonsData[i].text === result) {
        myLink = buttonsData[i].link;
      }
    }

    let myRoute;
    for (let i = 0; i < routeData.length; i++) {
      if (routeData[i].path === myLink) {
        myRoute = routeData[i].element;
      }
    }

    console.log(myLink);

    this.props.onRouteChange(".."+myLink, myRoute);
  };

  


  render() {
    const currentURL = window.location.href;
    const searchResults = this.filterSearchResults(this.state.searchQuery);
    const showResults = searchResults.length > 0;

    return (
      <div className="upper-menu">
        <div className="upper-menu__left">
        <Link to="http://localhost:3000/" >
            <img src={logo} alt="Logo" className='logo'/>
        </Link>
            <input
              type="text"
              className="upper-menu__search"
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
              placeholder="Search" /><button onClick={this.search} className='search'>
                <img src={magnifier} alt="Search" />
              </button>
          </div>
        <div className="upper-menu__right">
        </div>
      </div>
    );
  }
}


export default UpperMenu;
