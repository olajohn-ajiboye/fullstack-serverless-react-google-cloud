import React from 'react'
import { Link } from 'react-router-dom'
import SingnedIn from './SingnedIn'
import SignedOut from './SignedOut'

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

export default Navbar
