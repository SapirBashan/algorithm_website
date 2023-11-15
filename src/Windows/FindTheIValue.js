import react from "react";
import "./FindTheIValue.css";
import UpperMenu from "../components/UpperMenu";

class FindTheIValue extends react.Component{
   render () {
       return (
         <div className="FindTheIValue">
          <UpperMenu nameOfPage = {"Find The I Value"} search = {false}/>
         </div>
       );
       }
    }

export default FindTheIValue;
