import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';

import Home from './home/Home';
import Tweet from './tweet/Tweet';
import About from './about/About';
import Menu from './menu/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <span className="App-span"><Link to="/menu"><i className="fa fa-bars fa-2x"/></Link></span>
          {' '}
          <span className="App-span"><Link to="/"><i className="fa fa-home fa-2x"/></Link></span>
          {' '}
          <span className="App-span"><Link to="/tweet" activeStyle={{ color: 'red' }}><i className="fa fa-twitter fa-2x"/></Link></span>
          {' '}
          <span className="App-span"><Link to="/about" activeStyle={{ color: 'red' }}><i className="fa fa-user fa-2x"/></Link></span>
          {' '}
          <span className="App-span"><i className="fa fa-search fa-2x"/></span>
          <hr/>

          <Match exactly pattern="/" component={Home} />
          <Match pattern="/tweet" component={Tweet} />
          <Match pattern="/about" component={About} />
          <Match pattern="/menu" component={Menu} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
