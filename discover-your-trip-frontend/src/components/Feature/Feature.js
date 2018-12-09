import React, { Component } from 'react';
import Lounges from './Lounges/Lounges';
import Cities from './Cities/Cities';
import Promotions from './Promotions/Promotions';
import './Feature.css';

export default class Feature extends Component {
  constructor() {
    super();
    this.state = {
      route: 'lounges',
      code: ''
    }
  }

  componentDidMount() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    // let code = btoa(`${process.env.REACT_APP_API_KEY}:${process.env.REACT_APP_API_SECRET}`);
    let code = 'bDd4eGZkNWU0OTBjMTc4ODRlNDY5MWE2NzcxMzVhZDQ5NWQyOmU0ZDlmZTY5OTM0YTQzNjQ4NWZkZWVkMmY2YmY2ZDA1';
    let scope = 'CITYGUIDES DCIOFFERS DCILOUNGES'
    fetch(corsProxy + `https://apis.discover.com/auth/oauth/v2/token?grant_type=client_credentials&scope=${scope}`, {
      method: "POST",
      headers: {
        'Authorization': 'Basic ' + code,
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cache-Control': 'no-cache',
      }
  })
  .then(resp => resp.json())
  .then(data => this.setState({ code:data.access_token }))
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
      info = <Lounges country={this.state.country} code={this.state.code} />
    } else if (this.state.route === 'cities') {
      info = <Cities country={this.state.country} code={this.state.code} />
    } else if (this.state.route === 'promotions') {
      info = <Promotions country={this.state.country} code={this.state.code} />
    }
    return (
      <div id="features">
        <p className="p">What would you like to learn more about</p>
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
