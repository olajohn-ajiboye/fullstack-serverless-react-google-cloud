import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    email: '',
    password: ' ',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className="container mt-3">
        <form onSubmit={(e) => this.handleSubmit(e)} className="white mt-3">
          <h5 className="grey-text text-darken-3">
            Sign Up
          </h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">Firs Name</label>
            <input type="text" id="firstName" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
