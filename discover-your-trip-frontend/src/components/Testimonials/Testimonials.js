import React, { Component } from 'react';
import './Testimonials.css';

export default class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      displayedTest: 1
    }
  }

  componentDidMount() {
    this.showTestimonials(this.state.displayedTest)
  }

  showTestimonials(n) {
  }

  render() {
    return (
      <div>
        <div id="carousel">
        </div>
      </div>
    )
  }
}