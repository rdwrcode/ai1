import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Home from './home/Home';
import CSSMotion from './animation/CSSMotion';
import Menu from './sidebar/Menu';
import About from './about/About';
import NotFound from './NotFound';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ul className="App-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cssmotion">CSSMotion</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr />
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/cssmotion" component={CSSMotion} />
          <Match pattern="/menu" component={Menu} />
          <Match pattern="/about" component={About} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
