import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TogglePopup.css";
import questionMark from '../icons/question.png';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import UpperMenu from "./UpperMenu";

const popupVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    } 
  },
};

const tabVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};
class TogglePopup extends React.Component{

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

        <AnimatePresence>
          {isPopupOpen && (
            <motion.div
              className="popup"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="popup-header">
                <button onClick={this.togglePopup}>X</button>
              </div>
              <div className="popup-content">
                <div className="popup-upper" dangerouslySetInnerHTML={{ __html: this.props.text }}>
                  {}
                </div>
                <div className="popup-lower">
                  {[1, 2, 3, 4].map((tabNumber) => (
                    <motion.div
                      className="tab"
                      key={tabNumber}
                      variants={tabVariants}
                    >
                      <button onClick={() => this.changeTab(tabNumber)}>
                        {tabNumber === 1 && 'Python'}
                        {tabNumber === 2 && 'Java'}
                        {tabNumber === 3 && 'C++'}
                        {tabNumber === 4 && 'Pseudo'}
                      </button>
                    </motion.div>
                  ))}
                  {/* Content for the lower part with tabs */}
                  <div className="tab-content">
                    {activeTab === 1 && (
                      <SyntaxHighlighter language="python" style={twilight}>
                        {this.props.tab1}
                      </SyntaxHighlighter>
                    )}
                    {activeTab === 2 && (
                      <SyntaxHighlighter language="java" style={twilight}>
                        {this.props.tab2}
                      </SyntaxHighlighter>
                    )}
                    {activeTab === 3 && (
                      <SyntaxHighlighter language="cpp" style={twilight}>
                        {this.props.tab3}
                      </SyntaxHighlighter>
                    )}
                    {activeTab === 4 && (
                      <SyntaxHighlighter language="plaintext" style={twilight}>
                        {this.props.tab4}
                      </SyntaxHighlighter>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  
}

export default TogglePopup;
