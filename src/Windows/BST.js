import React from "react";
import "./BST.css";
import UpperMenu from "../components/UpperMenu";

class BST extends React.Component{
  render () {
      return (
      <div className="BST">
        <UpperMenu nameOfPage = {"Binary Search Tree"} search = {false}/>
      </div>
      );
      }
  }

export default BST;
