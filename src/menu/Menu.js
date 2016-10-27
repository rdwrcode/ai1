import React from 'react';
import { BrowserRouter, Match, Link } from 'react-router';

import './Menu.css';

const MenuItem = ({ params }) => {
  return (
    <div>
      {params.id === 'menu'
        ? <span></span>
        : <h3>ID: {params.id}</h3> 
      }
    </div>
  )
}

const Menu = () => (
  <BrowserRouter>
    <div className="Menu">
      <h2>Accounts</h2>
      <ul className="Menu-list">
        <li><ActiveLink loc="/test" label="test"/></li>
        <li><ActiveLink loc="/google" label="google"/></li>
        <li><ActiveLink loc="/yahoo" label="yahoo"/></li>
        <li><ActiveLink loc="/netflix" label="netflix"/></li>
      </ul>
      
      <Match pattern="/:id" component={MenuItem} />
    </div>
  </BrowserRouter>
)

const OldSchoolMenuLink = ({ onClick, href, isActive, label }) => (
  <div className={isActive ? 'active' : ''}>
    {isActive ? '> ' : ''}
    <a href={href} onClick={onClick}>
      {label}
    </a>
  </div>
)

const ActiveLink = ({ loc, label }) => (
  <Link to={loc}>{({isActive, onClick, href}) => <OldSchoolMenuLink
    label={label}
    onClick={onClick}
    href={href}
    isActive={isActive}/>}
  </Link>
)

export default Menu;
