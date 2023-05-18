import React, {useState} from 'react'
import "./Authentication.css"
import { Link } from 'react-router-dom';
import Members from './Members.js';
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const searchName = 'Militaru Andreea'; // numele căutat

  const member = Members.find((item) => item.Name === searchName);

  let memberId = null;

  if (member) {
    memberId = member.id;
  }
  let history = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    const member = Members.find((item) => item.Phone === phone && item.Password === password);
  
    if (member) {
      setLoginMessage('Login successful!'); 
    history(`/information`);
  } else {
    setLoginMessage('Invalid password or phone number '); 
  }
  };

  return (
    <div className='authentication'>
    <div>
      <table className='tabel-login'>
        <div>
          <h3 className='text align-header'>Login</h3>
          <strong>{loginMessage && <p className="text-message">{loginMessage}</p>}</strong>
          <input type="number" placeholder="Phone number" value={phone} required onChange={(e) => setPhone(e.target.value)} />
          <input type="password" placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <div className='login-btn text login-btn-font' onClick={handleLogin}>Login</div>
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
