import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <span>About</span>
        <span>Discover</span>
        <span>Contact</span>
      </nav>
    )
  }
}