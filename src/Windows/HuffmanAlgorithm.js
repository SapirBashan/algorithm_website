import React from "react";
import "./HuffmanAlgorithm.css";
import TogglePopup from "../components/TogglePopup.js";
import UpperMenu from "../components/UpperMenu.js";

class HuffmanAlgorithm extends React.Component {
  render() {
    return (
      <div className="HoffmanAlgorithm">
        <UpperMenu nameOfPage={"Huffman Algorithm"} search={false} />
        <TogglePopup />
      </div>
    );
  }
}

export default HuffmanAlgorithm;
