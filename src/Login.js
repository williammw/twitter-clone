import React, { useState, Component } from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {googleSignInStart} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'



class Login extends Component {


  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="login">
      <div className="login__container">
        <img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png" alt=""/>
        <h1>Sign in to t portal</h1>
        <p>finance acting .com</p>
        <Button onClick={googleSignInStart}>Sign in with Google</Button>
      </div>

    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);