import React from 'react'
import "./Authentication.css"

function Authentication() {
  return (
    <div className='authentication'>
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="username" />
      <div className='login-btn'>Login</div>
      <p className='text'>Or Login using</p>
      <div className='alt-login'>
      </div>
    </div>
  );
}

export default Authentication
