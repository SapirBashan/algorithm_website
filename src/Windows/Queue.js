import React from "react";
import "./Queue.css";
import UpperMenu from "../components/UpperMenu";

class Queue extends React.Component{
   render () {
         return (
         <div className="Queue">
            <UpperMenu nameOfPage = {"Queue"} search = {false}/>
         </div>
         );
         }
   }

export default Queue;