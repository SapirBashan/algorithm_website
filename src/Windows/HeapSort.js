import React from "react";
import "./HeapSort.css";
import UpperMenu from "../components/UpperMenu";

class HeapSort extends React.Component{
  render () {
      return (
      <div className="HeapSort">
        <UpperMenu nameOfPage = {"HeapSort"} search = {false}/>
      </div>
      );
      }
  }

export default HeapSort;