import React from 'react'
import { Link } from 'react-router-dom'
import SingnedIn from './SingnedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  return (

    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        {auth.uid ? <SingnedIn profile={profile} /> : <SignedOut />}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar)
