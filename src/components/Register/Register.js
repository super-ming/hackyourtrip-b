import React, { Component } from 'react';
import './Register.css';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state= {
     email: '',
     password: '',
     name: '',
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }
  onSubmitRegister = () => {
    fetch('https://discover-your-trip.herokuapp.com/api/register', {
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
    })
  }
  render() {
    return (
      <article className="register">
        <main className="reg-cont">
          <div className="">
            <fieldset id="sign_up" className="">
              <legend className="reg-title">Register</legend>
              <div className="reg-name reg-sel">
                <label className="left-col" htmlFor="name">Name</label>
                <input className="right-col" 
                       onChange={(e) => this.onNameChange(e)}
                       type="text" 
                       name="name"  
                       id="name" />
              </div>
              <div className="reg-email reg-sel">
                <label className="left-col" htmlFor="email-address">Email</label>
                <input className="right-col" 
                       onChange={(e) => this.onEmailChange(e)}
                       type="email" 
                       name="email-address"  
                       id="email-address" />
              </div>
              <div className="reg-pass reg-sel">
                <label className="left-col" htmlFor="password">Password</label>
                <input className="right-col" 
                       onChange={(e) => this.onPasswordChange(e)}
                       type="password" 
                       name="password"  
                       id="password" />
              </div>
            </fieldset>
            <div className="">
              <input 
                onClick={this.onSubmitSignIn}
                className="reg-submit" 
                type="submit" 
                value="Register" />
            </div>
          </div>
        </main>
      </article>
    )
  }
}