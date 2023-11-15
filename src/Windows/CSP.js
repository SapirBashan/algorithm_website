import React from "react";
import "./CSP.css";
import UpperMenu from "../components/UpperMenu";

class CSP extends React.Component{
  render () {
     return (
      <div className="CSP">
         <UpperMenu nameOfPage = {"CSP"} search = {false}/>
      </div>
     );
     }
 }

export default CSP;
