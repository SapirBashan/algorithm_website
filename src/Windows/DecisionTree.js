import React from "react";
import "./DecisionTree.css";
import UpperMenu from "../components/UpperMenu";

class DecisionTree extends React.Component{
   render () {
         return (
         <div className="DecisionTree">
            <UpperMenu nameOfPage = {"Decision Tree"} search = {false}/>
         </div>
         );
         }
   }

export default DecisionTree;
