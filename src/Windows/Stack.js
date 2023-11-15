import React from "react";
import "./Stack.css";
import UpperMenu from "../components/UpperMenu";

class Stack extends React.Component{
   render () {
         return (
         <div className="Stack">
            <UpperMenu nameOfPage = {"Stack"} search = {false}/>
         </div>
         );
         }
   }

export default Stack;