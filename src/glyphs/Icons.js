import React from 'react';
import './Icons.css';

const colorGreen = {
  color: 'green'
};

const colorRed = {
  color: 'red'
};

const Icons = () => (
  <div>
    <h2>Icons</h2>
    <li>
      <i className="fa fa-android fa-2x" style={colorGreen}></i>
    </li>
    <li>
      <i className="fa fa-h-square fa-2x"></i>
    </li>
    <li>
      <i className="fa fa-wheelchair fa-2x"></i>
    </li>
    <li>
      <i className="fa fa-bullhorn fa-2x"></i>
    </li>
    <i className="fa fa-car fa-2x" style={colorRed}></i>
    <img className="icons-home" src="img_trans.gif" role="presentation"/>
    <img className="icons-next" src="img_trans.gif" role="presentation"/>
  </div>
)

export default Icons;
