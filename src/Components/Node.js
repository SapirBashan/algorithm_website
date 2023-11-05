import React from 'react';
import './Node.css';
import {motion} from 'framer-motion';

class Node extends React.Component {
  render() {
    return (
      <motion.div 
      animate={{x: this.props.Xmovment, y: this.props.Ymovment}}
      transition={{duration: this.props.duration}}
        >
        <div className='Node'>{this.props.data}</div>
        <div className='pointer'>&rarr;</div>
      </motion.div>
    );
  }

  setState = {
    data: this.props.data,
    pointers: this.props.pointers,
    Xmovment: this.props.Xmovment,
    Ymovment: this.props.Ymovment,
    duration: this.props.duration
  }
}

export default Node;