import React from "react";
import './BFS.css';
import UpperMenu from "../components/UpperMenu";

class BFS extends React.Component{
 render () {
    return (
     <div className="BFS">
      <UpperMenu nameOfPage = {"Breadth First Search"} search = {false}/>
     </div>
    );
     }
};

export default BFS;