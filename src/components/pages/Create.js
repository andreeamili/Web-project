import React, { useState } from 'react';
import './Create.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import { Form } from 'react-bootstrap';
import Loader from './Loader'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../firebase/config";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, createUserDocument } from '../../firebase/config'
import { addDoc } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";


function Information() {
    let history = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (e) => {

        if (password !== cpassword) {
            toast.error("Password do not match.")
        }
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Email invalid');
        }
        if(age<0 || age>100){
            toast.error('Age invalid');
        }
        if(phone<0 || phone.length<10)
        {
            toast.error('Phone number invalid');
        }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                createUserDocument(user,{name},{age},{phone});
                console.log(user)
                setIsLoading(false)
                toast.success("Registration Successful...")
                history(`/authentication`)
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false)
            });
             

    }

    return (
        <>
            {isLoading && <Loader />}
            <div className='create'>
                <img className='create-image' src={homeImage} alt='Home Background' />
                <div className="create-wrapper">
                    <div className='text-header-create'>Create your account
                    </div>
                    <div className='margin text-create'>Name</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='text' placeholder='Enter name' required value={name} onChange={(e) => setName(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='margin text-create'>Email</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='text' placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='margin text-create'>Phone number</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='number' placeholder='Enter phone' required value={phone} onChange={(e) => setPhone(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='margin text-create'>Age</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='number' placeholder='Enter age' required value={age} onChange={(e) => setAge(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='margin text-create'>Password</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='password' placeholder='Enter password' required value={password} onChange={(e) => setPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='margin text-create'>Confirm password</div>
                    <Form className='edit-form'>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Control className='form-edit-create' type='password' placeholder='Enter password again' required value={cpassword} onChange={(e) => setCPassword(e.target.value)}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <div className='create-btn-c create-btn-size-c margin' onClick={handleSubmit}>Submit</div>
                </div>
            </div>
        </>
    );
}

export default Information
