import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    const { isSignedIn, onRouteChange } = this.props;
    if(isSignedIn) {
      return (
        <nav>
          <p onClick={() => onRouteChange('signin')} className=''>
            Sign Out
          </p>
        </nav>
      );
    } else {
      return (
        <nav>
          <p onClick={() => onRouteChange('signin')} className=''>
            Sign In
          </p>
          <p onClick={() => onRouteChange('register')} className=''>
            Register
          </p>     
        </nav>
      );
    }
  }
}