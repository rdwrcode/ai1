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
        <li><Link to="/netflix">Netflix</Link></li>
        <li><Link to="/zillow-group">Zillow Group</Link></li>
        <li><Link to="/yahoo">Yahoo</Link></li>
        <li><Link to="/modus-create">Modus Create</Link></li>
      </ul>

      <Match pattern="/:id" component={MenuItem} />
    </div>
  </BrowserRouter>
)

export default Menu;
