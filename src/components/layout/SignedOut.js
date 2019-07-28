import React from 'react'
import { NavLink } from 'react-router-dom'
import GoogleLogin from '../auth/GoogleLogin'

const SignedOut = () => {
  return (
    <ul className="right">
      <li><NavLink to="/signin">Login</NavLink></li>
      <li><GoogleLogin /></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )
}

export default SignedOut
