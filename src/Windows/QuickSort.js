import React from "react";
import "./QuickSort.css";
import UpperMenu from "../components/UpperMenu";

class QuickSort extends React.Component{
   render () {
         return (
         <div className="QuickSort">
            <UpperMenu nameOfPage = {"Quick Sort"} search = {false}/>
         </div>
         );
         }
   }

export default QuickSort;