import React from "react";
import "./2-3Tree.css";
import Node from "../components/Node.js";
import UpperMenu from "../components/UpperMenu.js";

class TwoThreeTree extends React.Component{

  addNode = () => {
    // add a node to the tree
    
  }


  render () {
    // the number of nodes in the tree
    const numNodes = 0;
    // the number of levels in the tree
    const numLevels = 0; 
      return (
      <div className="TwoThreeTree">
          <UpperMenu nameOfPage = {"2-3 Tree"} search = {false}/>
          <Node data="1" pointers={["2", "3"]} Xmovment={[0,0,0,300]} Ymovment={[0,0,0,20]} duration={5}/>
          <Node data="2" pointers={["4", "5"]} Xmovment={[0,0,0,300,200]} Ymovment={[-70,-70,-70,-70,60]} duration={5}/>
      </div>
      );
      }
  }

export default TwoThreeTree;
