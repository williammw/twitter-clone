import React, { useState } from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { signInWithFirebaseAuth } from './redux/user.actions';
import { connect } from 'react-redux';


const Login = ({signInWithFirebaseAuth}) => {          
 
  return (

    <div className="login">
      <div className="login__container">
        <img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png" alt=""/>
        <h1>Sign in to t portal</h1>
      <h1></h1>
        <p>finance acting .com</p>
        <Button onClick={() => signInWithFirebaseAuth()}>Sign in with Google</Button>
      </div>

    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  signInWithFirebaseAuth : () => dispatch(signInWithFirebaseAuth())
})

export default connect(null,mapDispatchToProps)(Login)