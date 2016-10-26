import React from 'react';
import AllMenu from 'react-burger-menu';
//import './Menu.css';

const SlideMenu = AllMenu.slide;

class Menu extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: false
    }

    this.isMenuOpen = this.isMenuOpen.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  isMenuOpen(state) {
    console.log(state);
    return state.isOpen;
  }

  buttonHandler() {
    event.preventDefault();
    console.log('button clicked');
  }

  render() {
    return (
      <div className="menu-wrapper" id="menu-wrapper">
        <button className="bm-cross-button" onClick={this.buttonHandler}>Menu</button>
        <SlideMenu className="bm-burger-bars" width={400} onStateChange={this.isMenuOpen}>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </SlideMenu>
      </div>
    )
  }
}

export default Menu;
