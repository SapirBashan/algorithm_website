import React from "react";
import "./RadixSort.css";
import UpperMenu from "../components/UpperMenu";

class RadixSort extends React.Component{
   render () {
       return (
         <div className="RadixSort">
            <UpperMenu nameOfPage = {"RadixSort"} search = {false}/>
         </div>
       );
       }
    }

export default RadixSort;