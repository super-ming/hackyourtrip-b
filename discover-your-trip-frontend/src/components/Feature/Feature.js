import React, { Component } from 'react';
import Lounges from './Lounges/Lounges';
import Cities from './Cities/Cities';
import Promotions from './Promotions/Promotions';
import './Feature.css';

export default class Feature extends Component {
  constructor() {
    super();
    this.state = {
      route: 'lounges'
    }
  }

  handleLounges() {
    this.setState({
      route: 'lounges'
    })
  }

  handleCities() {
    this.setState({
      route: 'cities'
    })
  }

  handlePromotions() {
    this.setState({
      route: 'promotions'
    })
  }

  render() {
    let info;
    if (this.state.route === 'lounges') {
      info = <Lounges country={this.state.country} />
    } else if (this.state.route === 'cities') {
      info = <Cities country={this.state.country} />
    } else if (this.state.route === 'promotions') {
      info = <Promotions country={this.state.country} />
    }
    return (
      <div id="features">
        <p>What would you like to learn more about</p>
        <div id="button-container">
          <button onClick={() => this.handleLounges()}>Discover Lounges</button>
          <button onClick={() => this.handleCities()}>Discover Cities</button>
          <button onClick={() => this.handlePromotions()}>Discover Promotions</button>
        </div>
          {info}
      </div>
    )
  }
}
