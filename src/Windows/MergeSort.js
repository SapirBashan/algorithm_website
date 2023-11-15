import React from "react";
import "./MergeSort.css";
import UpperMenu from "../components/UpperMenu";

class MergeSort extends React.Component{
  render () {
     return (
      <div className="MergeSort">
         <UpperMenu nameOfPage = {"MergeSort"} search = {false}/>
      </div>
     );
     }
 }

export default MergeSort;

