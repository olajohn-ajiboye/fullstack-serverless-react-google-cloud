import React, { useState } from 'react'

const SignIn = () => {
  const [emailPassword, setEmailPassword] = useState({email:"", password:""})
  const handleSubmit = (e) => {
    console.log(e)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="gret-text text-darken-3">

        </h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
