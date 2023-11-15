import React from "react";
import "./GradientDescent.css";
import UpperMenu from "../components/UpperMenu";

class GradientDescent extends React.Component{
  render () {
     return (
      <div className="GradientDescent">
         <UpperMenu nameOfPage = {"Gradient Descent"} search = {false}/>
      </div>
     );
     }
 }

export default GradientDescent;

