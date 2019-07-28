import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SingnedIn = (props) => {
  const { auth, profile } = props

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      {(!auth.photoURL) ?
        <li ><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
        :
        <li><img src={auth.photoURL} alt="Profile" className="btn btn-floating pink lighten-1" /></li>}
    </ul>
  )
}
const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (disptach) => {
  return {
    signOut: () => disptach(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingnedIn)
