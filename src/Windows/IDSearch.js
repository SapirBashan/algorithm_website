import React from "react";
import "./IDSearch.css";
import UpperMenu from "../components/UpperMenu";

class IDSearch extends React.Component{
  render () {
     return (
      <div className="IDSearch">
         <UpperMenu nameOfPage = {"IDSearch"} search = {false}/>
      </div>
     );
     }
 }

export default IDSearch;

