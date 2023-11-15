import React from "react";
import "./Regression.css";
import UpperMenu from "../components/UpperMenu";

class Regression extends React.Component{
   render () {
         return (
         <div className="Regression">
            <UpperMenu nameOfPage = {"Regression"} search = {false}/>
         </div>
         );
         }
   }

export default Regression;