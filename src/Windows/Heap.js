import React from "react";
import "./Heap.css";
import UpperMenu from "../components/UpperMenu";

class Heap extends React.Component{
  render () {
      return (
      <div className="Heap">
        <UpperMenu nameOfPage = {"Heap"} search = {false}/>
      </div>
      );
      }
  }

export default Heap;

