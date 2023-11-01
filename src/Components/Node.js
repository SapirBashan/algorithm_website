import React from 'react';
import './Node.css';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  constructor(data, next) {
    Node(data);
    this.next = next;
  }

  render() {
    return (
      <div className="Node">
        <div className='Node-data'>{this.data}</div>
        <div className='Node-next'>&rarr;</div> {/* Use the Unicode right arrow character (→) */}
      </div>
    );
  }
}

export default Node;
