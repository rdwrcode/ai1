import React from 'react';
import { Motion, spring } from 'react-motion';

import './TestSpring.css';

class TestSpring extends React.Component {
  render() {
    return (
      <Motion defaultStyle={{x: 0}} style={{x: spring(360)}}>
        {value => (
          <div className="testspring">
            <div className="testspring-block" style={{
              transform: `translate3d(${value.x}px, 0, 0) rotate(${value.x}deg)`}}>
            </div>
          </div>
        )}
      </Motion>
    )
  }
}

export default TestSpring;
