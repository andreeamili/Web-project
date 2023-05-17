import React, {useState} from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from './Members.js';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

function Information() {
    const member = Members.find((item) => item.id === "2");

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Phone, setPhone] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValue = e.target.value;
        setName(nameValue);
        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = Name, b = Age, c = Password, d = Phone;

        Members.push({ id: uniqueId, Name: a, Age: b, Phone: d, Password: c })

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
                    <div className='create-btn create-btn-size' onClick={() => handleSubmit}>Submit</div>
                </Link>
            </div>
        </div>
    );
}

export default Information
