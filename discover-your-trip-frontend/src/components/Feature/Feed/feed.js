import React, { Component } from 'react';
import './feed.css';

export default class Feed extends Component {
  render(){
    return(
      <div className="feed">
        <div>
          User1 gave Golden Tulip five stars!
        </div>
        <div>
          User2 gave Hotel London two stars!
        </div>
        <div>
          User3 gave Mall Cheap one star!
        </div>
      </div>
    )
  }
}
