import React, { Component } from 'react';
import './header-component.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <div className="header--photo"></div>
          <div className="header--name">Геннадий Абашкин</div>
          <div className="header--options">
          </div>
      </div>
  );
  }
}

export default Header;