import React, {useState} from 'react'
import "./Authentication.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import Loader from './Loader';

function Authentication() {
  
  let history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setIsLoading(false);
    const user = userCredential.user;
    
    toast.success("Login successful...")
    history(`/`);
  })
  .catch((error) => {
    setIsLoading(false);
    toast.error(error.message);
    setLoginMessage("Invalid password or email adress ")
  });
  };

  return (
    <>
    {isLoading && <Loader/>}
    <div className='authentication'>
    <div>
      <table className='tabel-login'>
        <div>
          <h3 className='text align-header'>Login</h3>
          <strong>{loginMessage && <p className="text-message">{loginMessage}</p>}</strong>
          <div className='margin'>Email</div>
          <input className='edit-input' type="text" placeholder="Email adress" value={email} required onChange={(e) => setEmail(e.target.value)} />
          <div className='margin'>Password</div>
          <input className='edit-input' type="password" placeholder="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <div className='login-btn text login-btn-font' onClick={handleLogin}>Login</div>
          <p className='text-create '>If you don't have an account,</p>
          <p className='text-create '>you can create one!</p>
        </div>
        <Link to='/create' >
          <div className='create-btn create-btn-font'>Create</div>
        </Link>
      </table>
    </div>
  </div>
  </>
  );
}

export default Authentication
