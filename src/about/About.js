import React from 'react';
import './About.css';
import logo from './logo.svg';

const About = () => (
  <div className="about">
    <div className="about-header">
      <img src={logo} className="logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  </div>
)

export default About;
