import React from 'react';
import './OneBox.css';
import './SlideInLeft.css';

class OneBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicked: false,
      slided: false
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.slideHandler = this.slideHandler.bind(this);
  }

  changeHandler() {
    console.log(this.state.clicked);

    if(this.state.clicked) {
      this.setState({
        clicked: false
      });
    } else {
      this.setState({
        clicked: true
      });
    }
  }

  slideHandler() {
    if(this.state.slided) {
      this.setState({
        slided: false
      });
    } else {
      this.setState({
        slided: true
      });
    }
  }

  render(){
    return (
      <div className="cssmotion-onebox">
        {this.state.clicked ? 
          <div className="onebox onebox-transform onebox-transform-active"></div> :
          <div className="onebox onebox-transform"></div>
        }
        <button className="onebox-button" onClick={this.changeHandler}>Change</button>
        {this.state.slided ?
          <div className="onebox animated slideInLeft"></div> :
          <div></div>
        }
        <button className="onebox-button" onClick={this.slideHandler}>Slide</button>
      </div>
    )
  }
}

export default OneBox;
