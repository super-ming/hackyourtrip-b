import React, { Component } from 'react';
import './Lounges.css';
import Details from '../Details/details';
import Feed from '../Feed/feed';

export default class Lounges extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      active: 'lounge',
      lounges: '',
      refine: null
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
    .then(data => this.setState({ lounges: [data] })).catch()
  }

  getLounges() {
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
    .then(data => this.setState({ lounges: [data] }))
  }

  handleCityInput(e) {
    this.setState({
      city: e.target.value
    })
  }

  showList(){
    console.log(this.state.lounges);
    if(this.state.lounges != null){
      return <div>{this.state.lounges}</div>
    /*  return(
        (this.state.lounges[0].result.forEach((lounge, index) => (
          <div className="lounge-list">{}</div>
        )))
      )*/
    } else {
      return
    }
  }

  render() {

    console.log(this.state.city);
    console.log(this.state.lounges);
    console.log(this.state.lounges)
    return (
      <div id="lounges">
        {this.state.loungeName}
        <div className="cityChoose">
          Find Lounges:
          <input onChange={(e) => this.handleCityInput(e)} placeholder={"Enter a city..."}></input>
          <button onClick={()=>this.getLounges()}>Refine</button>
        </div>
        <div className="window">
          { this.showList()
          }

          <Details active={this.state.active} lounges={this.state.lounges}>
          </Details>
          <Feed></Feed>
          </div>
      </div>
    )
  }
}
