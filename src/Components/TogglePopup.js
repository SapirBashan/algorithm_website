import React from "react";
import "./TogglePopup.css";
import questionMark from '../icons/question.png';

export default class TogglePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
      activeTab: 1,
    };
  }

  togglePopup = () => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  };

  changeTab = (tabNumber) => {
    this.setState({ activeTab: tabNumber });
  };

  render() {
    const { isPopupOpen, activeTab } = this.state;

    return (
      <div className="popup-container">
        <button className="toggle-button" onClick={this.togglePopup}>
          <img className="toggle-button-img" src={questionMark} alt="no image" />
        </button>

        {isPopupOpen && (
          <div className="popup">
            <div className="popup-header">
              <button onClick={this.togglePopup}>X</button>
            </div>
            <div className="popup-content">
              <div className="popup-upper">
                {this.props.text}
              </div>
              <div className="popup-lower">
                <div className="tab">
                  <button onClick={() => this.changeTab(1)}>Tab 1</button>
                </div>
                <div className="tab">
                  <button onClick={() => this.changeTab(2)}>Tab 2</button>
                </div>
                <div className="tab">
                  <button onClick={() => this.changeTab(3)}>Tab 3</button>
                </div>
                <div className="tab">
                  <button onClick={() => this.changeTab(4)}>Tab 4</button>
                </div>
                {/* Content for the lower part with tabs */}
                <div className="tab-content">
                  {activeTab === 1 && <div>Content for Tab 1</div>}
                  {activeTab === 2 && <div>Content for Tab 2</div>}
                  {activeTab === 3 && <div>Content for Tab 3</div>}
                  {activeTab === 4 && <div>Content for Tab 4</div>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
