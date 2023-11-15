import React from "react";
import "./BucketSort.css";
import UpperMenu from "../components/UpperMenu";

class BucketSort extends React.Component{
  render () {
     return (
      <div className="BucketSort">
         <UpperMenu nameOfPage = {"Bucket Sort"} search = {false}/>
      </div>
     );
     }
 }

export default BucketSort;


