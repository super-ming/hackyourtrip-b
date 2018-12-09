import React, { Component } from 'react';
import './App.css';
import Feature from './components/Feature/Feature';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Nav from './components/Nav/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        { this.state.route === 'home'
      ? <div> 
        <div id="intro">
          <p>
            Welcome to Discover your Trip
          </p>
          <span>Get Started</span>
        </div>
        <Feature />
        </div> 
        : (
          this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange}  />
        )
      }
      </div>
    );
  }
}

export default App;
