import React from 'react'
import { Link } from 'react-router-dom'
import SingnedIn from './SingnedIn'
import SignedOut from './SignedOut'
import { connect } from 'react-redux'

const Navbar = () => {
  return (

    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        <SingnedIn></SingnedIn>
        <SignedOut></SignedOut>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}
export default connect(mapStateToProps)(Navbar)
