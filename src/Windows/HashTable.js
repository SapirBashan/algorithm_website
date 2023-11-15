import React from "react";
import "./HashTable.css";
import UpperMenu from "../components/UpperMenu";

class HashTable extends React.Component{
  render () {
     return (
      <div className="HashTable">
         <UpperMenu nameOfPage = {"Hash Table"} search = {false}/>
      </div>
     );
     }
 }

export default HashTable;
