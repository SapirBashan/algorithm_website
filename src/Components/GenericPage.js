import React, { useState } from 'react';
import TogglePopup from './TogglePopup';
import './GenericPage.css';
import questionMark from '../icons/question.png';
import exit from '../icons/delete.png'

const GenericPage = (props) => {
  const [isPart2Open, setPart2Open] = useState(false);
  const [isPart3Open, setPart3Open] = useState(true);


  const handlePart2Toggle = () => {
    setPart2Open(!isPart2Open);
    setPart3Open(false); // Close Part 3 when opening Part 2
  };

  const handlePart3Toggle = () => {
    setPart3Open(!isPart3Open);
    setPart2Open(false); // Close Part 2 when opening Part 3
  };


  return (
    <div className={`generic-page ${isPart2Open ? 'part2-open' : ''} ${isPart3Open ? 'part3-open' : ''}`}>
      
      {/* part 1 is the presentational part */}
      <div className="part part1">
        {props.presentational}
      </div>

      {/* part 2 is the right popup */}
      <div className={`part part2 ${isPart2Open ? 'open' : ''}`}>
        <TogglePopup 
          isOpen={isPart2Open}
          onClose={() => setPart2Open(false)}
          text={props.explanation}
          tab1={props.pythonCode}
          tab2={props.javaCode} 
          tab3={props.cppCode} 
          tab4={props.pseudoCode}
        />
      </div>

      {/* part 3 is the left popup */}
      <div className={`part part3 ${isPart3Open ? 'open' : ''}`}>
        {props.buttons}
      </div>

      <button className="toggle-button" onClick={handlePart2Toggle}>
          <img className="toggle-button-img" src={isPart2Open ?  exit : questionMark} alt="no image" />
        </button>

      {/* Button to toggle Part 3 */}

      <button className="side-button-io" onClick={handlePart3Toggle}>
        {isPart3Open ? "<" : ">"}
      </button>

    </div>
  );
};

export default GenericPage;
