import React from "react";
import PropTypes from "prop-types";
import "./ButtonsToPages.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default class ButtonsToPages extends React.Component {

  setState = {
    path: this.props.link
  }

  render() {
    //this is the button that will be rendered
    return (
      <button className="button" onClick={() => navigateTo(this.props.link)}>
        {this.props.text}
        {/* image  src is the image that will be used for the button, alt is the text that will be displayed if the image doesn't load */}
        <img className="button-image" src={this.props.image} alt="no image" />
      </button>
    );
  }


  
  

  //this is the prop types that will be used
  static propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };
}

function navigateTo(path) {
  // Use the navigate function to change the route
  // the {} is for state, which we don't need right now
  // the '' is for the title, which we don't need right now
  // the path is the path we want to navigate to
  window.history.pushState({}, '', path);
  //refresh the page
  window.location.reload();
}


// in javascript write the code to stop the dainasor google game
