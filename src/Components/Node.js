import React from 'react';
import './Node.css';

class Node {
  constructor(props) {
    super(props);
    this.state = {
      pointers: [null],
      data: props.data,
    };
  }

  render() {
    return (
      <div className="Node">
        <div className='Node-next'>&rarr;</div> {/* Use the Unicode right arrow character (→) */}
        <div className='Node-data'>{this.state.data}</div>
      </div>
    );
  }
}

export default Node;
