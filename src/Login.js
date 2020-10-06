import React, { useState } from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
// import { useStateValue } from './StateProvider'
// import {actionTypes} from './reducer'
function Login() {
  // const[state,dispatch] = useStateValue()
  const signIn = e =>{
    e.preventDefault();
    // auth.signInWithPopup(provider)
    // .then(result => {
    //   dispatch({
    //       type:actionTypes.SET_USER,
    //       user:result.user

    //   })
    // }).catch( (error) =>{
    //   alert(error.message)
    // })
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Logo.png" alt=""/>
        <h1>Sign in to t portal</h1>
        <p>finance acting .com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>

    </div>
  )
}

export default Login
