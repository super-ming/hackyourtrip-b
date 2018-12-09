import React, { Component } from 'react';
import './App.css';
import Feature from './components/Feature/Feature';
import Nav from './components/Nav/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div id="intro">
          <p>
            Welcome to Discover your Trip
          </p>
          <span>Get Started</span>
        </div>
        <Feature />
      </div>
    );
  }
}

export default App;
