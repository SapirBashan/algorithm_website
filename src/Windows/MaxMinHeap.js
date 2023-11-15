import React from "react";
import "./MaxMinHeap.css";
import UpperMenu from "../components/UpperMenu";

class MaxMinHeap extends React.Component{
  render () {
     return (
      <div className="MaxMinHeap">
         <UpperMenu nameOfPage = {"MaxMinHeap"} search = {false}/>
      </div>
     );
     }
 }

export default MaxMinHeap;

