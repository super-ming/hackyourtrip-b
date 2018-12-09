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
        <h3>Lounge Name</h3>
        <p>Airport Name, city, country</p>
        <p>Phone, lounge status, opening hrs</p>
        <p>Facilities</p>
        <p>Location, terminal</p>
        <p>Must bring ID. Can only bring two guests.</p>
        <p>Additional Info</p>
        <p>Guest currency, guest fee, fee notes</p>
        <p>Rating count, rating average</p>
        <p>Point</p>
      </div>
    )
  }
}
