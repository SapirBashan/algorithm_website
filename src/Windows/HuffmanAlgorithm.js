import React from "react";
import "./HuffmanAlgorithm.css";
import TogglePopup from "../components/TogglePopup.js";

class HuffmanAlgorithm extends React.Component {
  render() {
    return (
      <div className="HoffmanAlgorithm">
        <div className="toggle-popup">
          <TogglePopup />
        </div>
        <h1>HoffmanAlgorithm</h1>
      </div>
    );
  }
}

export default HuffmanAlgorithm;
