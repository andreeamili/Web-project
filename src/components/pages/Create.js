import React, {useState} from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from './Members.js';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';

function Information() {
    let history= useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (name && age && phone && password) {
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name,
          b = age,
          c = password,
          d = phone;
  
        Members.push({
          id: uniqueId,
          Name: a,
          Age: b,
          Phone: d,
          Password: c,
          Subscription: "0",
          Remaining: "0",
          Sessions: "0",
          Experience: "beginner",   
          Horse: "None"
        });
        history('/authentication');
      } 
      

    }

    return (
        <div className='account'>
            <img className='account-image' src={homeImage} alt='Home Background' />
            <div className="account-wrapper">
                <div className='text-header'>Create your account
                </div>
                <Form className='edit-form'>
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='text' placeholder='Enter name' required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter phone' required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter age' required onChange={(e) => setAge(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='password' placeholder='Enter password' required onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Link to='/information'>
                    <div className='create-btn create-btn-size' onClick={handleSubmit}>Submit</div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Information
