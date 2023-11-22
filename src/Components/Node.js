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
        <motion.div
          animate={{ backgroundColor: this.props.color }} // Set the background color from props
          transition={{ duration: this.props.colorDuration || this.props.duration }}

          //the class name should be this props.className but the default is node
          className= {this.props.className || "Node"}
        >
          {this.props.data}
         </motion.div>
        {this.props.showPointer && <div className='pointer'>&rarr;</div>}
      </motion.div>
    );
  }

  setState = {
    data: this.props.data,
    pointers: this.props.pointers,
    Xmovment: this.props.Xmovment,
    Ymovment: this.props.Ymovment,
    color: this.props.color,
    duration: this.props.duration,
    showPointer: this.props.showPointer,
    colorDuration: this.props.colorDuration,
  }
}

export default Node;