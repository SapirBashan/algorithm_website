import React from "react";
import "./SelectionSort.css";
import UpperMenu from "../components/UpperMenu";

class SelectionSort extends React.Component{
   render () {
       return (
         <div className="SelectionSort">
          <UpperMenu nameOfPage = {"SelectionSort"} search = {false}/>
         </div>
       );
       }
    }

export default SelectionSort;