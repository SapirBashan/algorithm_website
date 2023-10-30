import React from "react";
import "./TogglePopup.css";
import questionMark from '../icons/AVL.png';

export default class TogglePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
  }

  togglePopup = () => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  };

  render() {
    const { isPopupOpen } = this.state;

    return (
      <div className="popup-container">
        <button className="toggle-button" onClick={this.togglePopup}>
          <img className="toggle-button-img" src={questionMark} alt="no image" />
        </button>

        {isPopupOpen && (
          <div className="popup">
            <div className="popup-header">
              <button onClick={this.togglePopup}>Close</button>
            </div>
            <div className="popup-content">
              <div className="popup-upper">
                {/* Content for the upper part */}
                Upper Part Content
              </div>
              <div className="popup-lower">
                <div className="tab">Tab 1</div>
                <div className="tab">Tab 2</div>
                <div className="tab">Tab 3</div>
                <div className="tab">Tab 4</div>
                {/* Content for the lower part with tabs */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
