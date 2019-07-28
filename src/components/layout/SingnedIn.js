import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SingnedIn = (props) => {

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating ponk lighten-1">John</NavLink></li>
    </ul>
  )
}
const mapDispatchToProps = (disptach) => {
  return {
    signOut: () => disptach(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SingnedIn)
