import React from 'react';
import './ContactItem.css';

const ContactItem = (props) => (
  <li className="contact-item">
    <img src={props.avatar} alt="contact"/>
    <a href="#" target="_blank" className="contact-name">{props.name}</a>
    <a href="#" className="contact-close">x</a>
  </li>
)

export default ContactItem;
