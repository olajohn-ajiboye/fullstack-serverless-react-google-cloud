import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInWithGoogle } from '../../store/actions/authAction'

class GoogleLogin extends Component {

  render() {
    return (
      <button className="btn pink lighten-1 z-depth-0" onClick={() => this.props.signInWithGoogle()} >Google Login</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(signInWithGoogle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin)
