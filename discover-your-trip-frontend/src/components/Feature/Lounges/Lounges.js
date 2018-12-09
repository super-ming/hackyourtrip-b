import React, { Component } from 'react';
import './Lounges.css';
import Details from '../Details/details';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

export default class Lounges extends Component {
  constructor() {
    super();
    this.state = {
      city: 'chicago',
      lounges: ''
    }
  }

  componentDidMount() {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    fetch(corsProxy + `https://apis.discover.com/dci-lounges/v2/lounges?radius=20&city=${this.state.city}&lang=en-us&sortdir=asc `, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.props.code,
        'x-dfs-api-plan': 'DCILOUNGES_SANDBOX',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => this.setState({ lounges: data }))
  }

  handleCityInput(e) {
    this.setState({
      country: e.target.value
    })
  }

  render() {
    console.log(this.state.lounges)
    return (
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          City:
          <input onChange={(e) => this.handleCityInput(e)}></input>
        </div>
        <div className="window d-flex">
          <ImageCarousel />
          <Details name={this.state.route}/>
        </div>
      </div>

    )
  }
}
