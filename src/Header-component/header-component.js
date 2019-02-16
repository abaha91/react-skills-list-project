import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header-component.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <div className="header--photo"></div>
          <div className="header--name">Геннадий Абашкин</div>
          <div className="header--options">
              <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
              </IconButton>
          </div>
      </div>
  );
  }
}

export default Header;