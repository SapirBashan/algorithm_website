import React from "react";
import "./AStar.css";
import UpperMenu from "../components/UpperMenu.js";

class AStar extends React.Component{
  render () {
     return (
      <div className="AStar">
         <UpperMenu nameOfPage = {"A Star"} search = {false}/> 
      </div>
     );
     }
 }

export default AStar;
