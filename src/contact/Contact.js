import React from 'react';
import Request from 'react-http-request';
//import ContactItem from './ContactItem';

import './Contact.css';

class Contact extends React.Component {
  
  render() {

    //let randomOffset = Math.floor(Math.random()*500);
    //const url='https://api.github.com/users/rdwrcode';
    //let reqUrl = 'https://api.github.com/users?since=' + randomOffset;

    return (
      <Request
        url='https://api.github.com/users?since=700'
        method='get'
        accept='application/json'
        verbose={true}
      >
        {
          ({error, result, loading}) => {
            if (loading) {
              return <div>loading...</div>;
            } else {
              console.log(result.text[0]);
              console.log(result.text[1]);
              return <div>{ JSON.stringify(result.text) }</div>;
            }
          }
        }
      </Request>
    );
  }
}

export default Contact;
