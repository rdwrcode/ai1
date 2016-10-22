import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';

import './MenuWrapper.css';

class MenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    
    this.showLeft = this.showLeft.bind(this);
    this.showRight = this.showRight.bind(this);
  }

  showLeft() {
    console.log('left');
    this.refs.left.show();
  }

  showRight() {
    console.log('clicked');
    this.refs.right.show();
  }

  render() {
    return (
      <div>
        <button onClick={this.showLeft}>LeftMenu</button>
        <button onClick={this.showRight}>RightMenu</button>

        <Menu ref="left" alignment="left">
            <MenuItem hash="first-page">First Page</MenuItem>
            <MenuItem hash="second-page">Second Page</MenuItem>
            <MenuItem hash="third-page">Third Page</MenuItem>
        </Menu>

        <Menu ref="right" alignment="right">
            <MenuItem hash="first-page">First Page</MenuItem>
            <MenuItem hash="second-page">Second Page</MenuItem>
            <MenuItem hash="third-page">Third Page</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default MenuWrapper;
