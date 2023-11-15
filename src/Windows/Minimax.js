import React from "react";
import "./Minimax.css";
import UpperMenu from "../components/UpperMenu";

class Minimax extends React.Component{
  render () {
     return (
      <div className="Minimax">
         <UpperMenu nameOfPage = {"Minimax"} search = {false}/>
      </div>
     );
     }
 }

export default Minimax;

