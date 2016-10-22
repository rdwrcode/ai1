import React, { Component } from 'react';
//import Contact from './contact/Contact';
//import Arc from './progress/Arc';
import Fun from './fun/Fun';
import Github from './github/Github';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Fun />
        <Github />
      </div>
    );
  }
}

export default App;
