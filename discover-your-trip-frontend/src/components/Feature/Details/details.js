import React, { Component } from 'react';
import './details.css';

export default class Details extends Component {
  constructor(props){
    super(props)
    this.state = {
      route: props.route
    }
  }
  render(){
    return(
      <div className="details">
        <h3>{this.props.route}</h3>
        <p>{this.props.route}</p>
      </div>
    )
  }
}
