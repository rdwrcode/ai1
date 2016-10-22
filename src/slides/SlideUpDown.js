/* global $ */
import React from 'react';

import './SlideUpDown.css';
// this uses jQuery $ for slide up and down
class SlideUpDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slide: false};

    this.slide = this.slide.bind(this);
  }

  slide() {
    if (this.state.slide) {
      $(this.refs.slide).slideDown();
      this.setState({
        slide: false
      });
    } else {
      $(this.refs.slide).slideUp();
      this.setState({
        slide: true
      });
    }
  }

  render() {
    return ( 
      <div>
        <input type="button" value="clickme" onClick={this.slide}/> 
        <br / >
        <br />
        <div className="slide-up-down" ref="slide">< /div>
      </div>
    );  
  }
}

export default SlideUpDown;
