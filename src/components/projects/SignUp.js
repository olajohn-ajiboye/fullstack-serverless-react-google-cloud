import React, { Component } from 'react'

export default class CreateProject extends Component {
  state = {
    title: '',
    content: ' ',
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
            <label htmlFor="Title">Title</label>
            <input type="text" id="Title" onChange={(e) => this.handleChange(e)} />
          </div>
          <div className="input-field">
            <label htmlFor="content">content</label>
            <textarea name="content" id="" className="materialize-textarea" onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}
