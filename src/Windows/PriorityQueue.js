import React from "react";
import "./PriorityQueue.css";
import UpperMenu from "../components/UpperMenu";

class PriorityQueue extends React.Component{
   render () {
         return (
         <div className="PriorityQueue">
            <UpperMenu nameOfPage = {"PriorityQueue"} search = {false}/>
         </div>
         );
         }
   }

export default PriorityQueue;