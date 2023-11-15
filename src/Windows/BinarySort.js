import React from "react";
import "./BinarySort.css";
import UpperMenu from "../components/UpperMenu";

class BinarySort extends React.Component{
  render () {
     return (
      <div className="BinarySort">
         <UpperMenu nameOfPage = {"Binary Sort"} search = {false}/>
      </div>
     );
     }
 }

export default BinarySort;
