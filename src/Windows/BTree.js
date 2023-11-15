import React from "react";
import "./BTree.css";
import UpperMenu from "../components/UpperMenu";

class BTree extends React.Component{
  render () {
     return (
      <div className="BTree">
         <UpperMenu nameOfPage = {"B Tree"} search = {false}/>
      </div>
     );
     }
 }

export default BTree;
