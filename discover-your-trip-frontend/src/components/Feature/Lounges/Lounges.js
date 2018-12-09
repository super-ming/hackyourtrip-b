import React, { Component } from 'react';
import './Lounges.css';

export default class Lounges extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }

  render() {
    return (
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          City: 
          <input onChange={(e) => this.handleCityInput(e)}></input>
        </div>
      </div>
    )
  }
}