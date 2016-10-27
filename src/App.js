import React, { Component } from 'react';
import { BrowserRouter, Match, Link } from 'react-router';

import Home from './home/Home';
import Tweet from './tweet/Tweet';
import About from './about/About';
import Menu from './menu/Menu';
import Search from './search/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ActiveLink loc="/menu" cn="App-span" activecn="App-span-active" icon="fa fa-bars fa-2x"/>
          <ActiveLink loc="/" cn="App-span" activecn="App-span-active" icon="fa fa-home fa-2x"/>
          <ActiveLink loc="/tweet" cn="App-span" activecn="App-span-active" icon="fa fa-twitter fa-2x"/>
          <ActiveLink loc="/about" cn="App-span" activecn="App-span-active" icon="fa fa-user fa-2x"/>
          <ActiveLink loc="/search" cn="App-span" activecn="App-span-active" icon="fa fa-search fa-2x"/>
          <hr color="gray"/>
          <Match pattern="/menu" component={Menu} />
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/tweet" component={Tweet} />
          <Match pattern="/about" component={About} />
          <Match pattern="/search" component={Search} />
        </div>
      </BrowserRouter>
    );
  }
}

const ActiveLink = ({loc, cn, activecn, icon}) => (
  <span>
    <Link activeOnlyWhenExact to={loc} 
      className={cn} 
      activeClassName={activecn}>
        <i className={icon}/>
      </Link>
  </span>
) 

export default App;
