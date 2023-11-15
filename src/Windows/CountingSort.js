import React from "react";
import "./CountingSort.css";
import UpperMenu from "../components/UpperMenu";

class CountingSort extends React.Component{
   render () {
       return (
         <div className="CountingSort">
          <UpperMenu nameOfPage = {"Counting Sort"} search = {false}/>
         </div>
       );
       }
    }

export default CountingSort;
