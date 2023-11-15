import React from "react";
import "./KNN.css";
import UpperMenu from "../components/UpperMenu";

class KNN extends React.Component{
  render () {
     return (
      <div className="KNN">
         <UpperMenu nameOfPage = {"K Nearest Neighbors"} search = {false}/>
      </div>
     );
     }
 }

export default KNN;

