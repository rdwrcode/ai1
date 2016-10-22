import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BackgroundImage from './BackgroundImage';

import './SlideInOut.css';
  
class SlideInOut extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let page = this.props.pathname.substr(1);
    console.log(page);
    
    if (!page) page = 'home';
    return (
      <div>
       <ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
        >
          <BackgroundImage page={page} key={page} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default SlideInOut;
