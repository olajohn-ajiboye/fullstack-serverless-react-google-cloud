import React from 'react'
import { NavLink } from 'react-router-dom'

const SingnedIn = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating ponk lighten-1">John</NavLink></li>
    </ul>
  )
}

export default SingnedIn
