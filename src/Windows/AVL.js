import React from "react";
import "./AVL.css";
import UpperMenu from "../components/UpperMenu";

class AVL extends React.Component{
  render () {
      return (
      <div className="AVL">
        <UpperMenu nameOfPage = {"AVL"} search = {false}/>
      </div>
      );
      }
  }

export default AVL;