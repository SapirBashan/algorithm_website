import React from "react";
import "./Trie.css";
import UpperMenu from "../components/UpperMenu";

class Trie extends React.Component{
  render () {
     return (
      <div className="Trie">
         <UpperMenu nameOfPage = {"Trie"} search = {false}/>
      </div>
     );
     }
 }

export default Trie;