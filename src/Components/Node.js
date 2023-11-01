import React from 'react';
import './Node.css';

class Node extends React.Component {
  render() {
    return (
      <div className="Node">
        <div className='Node-next'>&rarr;</div>
        <div className='Node-data'>{this.props.data}</div>
      </div>
    );
  }

  setState = {
    data: this.props.data,
    pointers: this.props.pointers
  }
}

export default Node;
