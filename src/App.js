import React, { Component } from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Home from './home/Home';
import About from './about/About';
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul className="App-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr />
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
