import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.navigate = this.navigate.bind(this);
  }

  navigate(hash) {
    window.location.hash = hash;
  }

  render() {
    return (
      <div className="menu-item" 
        onClick={this.navigate(this.props.hash)}>
        {this.props.children}
      </div>
    );
  }
}

export default MenuItem;
