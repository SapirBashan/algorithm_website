import React from "react";
import "./HillClimbingSearch.css";
import UpperMenu from "../components/UpperMenu";

class HillClimbingSearch extends React.Component{
  render () {
     return (
      <div className="HillClimbingSearch">
         <UpperMenu nameOfPage = {"HillClimbingSearch"} search = {false}/>
      </div>
     );
     }
 }

export default HillClimbingSearch;

