import React from 'react'
import "./Authentication.css"
import { Link } from 'react-router-dom';
import Members from './Members.js';
function Authentication() {
  const searchName = 'Militaru Andreea'; // numele căutat

  const member = Members.find((item) => item.Name === searchName);

  let memberId = null;

  if (member) {
    memberId = member.id;
  }
  return (
    <div className='authentication'>
      <div >
        <table className='tabel-login'>
          <div >
            <h3 className='text align-header'>Login</h3>
            <input type="text" placeholder="number" />
            <input type="password" placeholder="password" />
            <Link to='/authentication/information' >
            <div className='login-btn text login-btn-font'>Login</div>
            </Link>
            <p className='text-forgotten'>Forgot password?</p>
            <p className='text-create'>If you don't have an account,</p>
            <p className='text-create'>you can create one!</p>
          </div>
          <Link to='/create' >
            <div className='create-btn create-btn-font'>Create</div>
          </Link>
        </table>
      </div>
    </div>
  );
}

export default Authentication
