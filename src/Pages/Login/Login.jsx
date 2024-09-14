import React from 'react'
import './Login.css'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <section className='login_container'>
        <img className='login_image' src="./images/headphone.jpg" alt="" />
        <div className='login_form'>
          <h1 style={{fontSize:"36px"}}>Sign Up</h1>
          <p>Already have an account? <NavLink style={{textDecoration:"none",color:"#377DFF"}} to="/sign-in">Sign In</NavLink> </p>
          <form >

          </form>
        </div>
    </section>
  )
}

export default Login