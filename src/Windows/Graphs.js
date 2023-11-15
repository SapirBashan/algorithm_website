import React from "react";
import "./Graphs.css";
import UpperMenu from "../components/UpperMenu";

class Graphs extends React.Component{
  render () {
      return (
      <div className="Graphs">
        <UpperMenu nameOfPage = {"Graphs"} search = {false}/>
      </div>
      );
      }
  }

export default Graphs;
