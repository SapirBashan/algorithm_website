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
                {/* Content for the upper part */}
               <br />
                Huffman Algorithm is a lossless compression algorithm
                <br />
                it is a greedy algorithm
                <br />
                it is optimal
                <br />
                it is used in zip files
                <br />
                it is used in jpeg files
                <br />
                it is used in mp3 files
                <br />
                it is used in video files
                <br />
                it is used in png files
                <br />
                it is used in gif files
                <br />
                it is used in pdf files
                <br />
                it is used in exe files
                <br />
                it is used in rar files
                <br />
                it is used in tar files
                <br />
                it is used in gzip files
                <br />
                it is used in 7z files
                <br />
                it is used in bz2 files
                <br />
                it is used in xz files
                <br />
                it is used in cab files
                <br />
                the way it works is that it takes the most frequent characters and gives them the shortest codes
                <br />
                and the least frequent characters and gives them the longest codes
                <br />
                this way the most frequent characters will be compressed the most
                <br />
                and the least frequent characters will be compressed the least
                <br />
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
