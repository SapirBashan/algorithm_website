import React from "react";
import "./DFS.css";
import UpperMenu from "../components/UpperMenu";

class DFS extends React.Component{
   render () {
      return (
       <div className="DFS">
         <UpperMenu nameOfPage = {"Deapth First Search"} search = {false}/>
       </div>
      );
       }
  };
  
  export default DFS;