import React from 'react'
import "./Authentication.css"

function Authentication() {
  return (
    <div className='authentication'>
      <div >
        <table className='tabel-login'>
          <div >
          <h3 className='text align-header'>Login</h3>
          <input type="text" placeholder="phone number" />
          <input type="password" placeholder="password" />
          <div className='login-btn text login-btn-font'>Login</div>
          <p className='text-forgotten'>Forgot password?</p>
          <p className='text-create'>If you don't have an account,</p>
          <p className='text-create'>you can create one!</p>
          </div>
          <div className='create-btn create-btn-font'>Create</div>
        </table>
      </div>
    </div>
  );
}

export default Authentication
