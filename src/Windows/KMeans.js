import React from "react";
import "./KMeans.css";
import UpperMenu from "../components/UpperMenu";

class KMeans extends React.Component{
  render () {
     return (
      <div className="KMeans">
         <UpperMenu nameOfPage = {"KMeans"} search = {false}/>
      </div>
     );
     }
 }

export default KMeans;


