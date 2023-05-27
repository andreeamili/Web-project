import React, { useEffect, useState } from "react";
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from "./Members";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function Edit() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subscription, setSubscription] = useState('');
    const [remaining, setRemaining] = useState('');
    const [sessions, setSessions] = useState('')
    const [experience, setExperience] = useState('');
    const [horse, setHorse] = useState('');
    


    let history = useNavigate();
    useEffect (()=>{
        setName(localStorage.getItem('Name'))
        setPhone(localStorage.getItem('Phone'))
        setSubscription(localStorage.getItem('Subscription'))
        setSessions(localStorage.getItem('Sessions'))
        setExperience(localStorage.getItem('Experience'))
        setHorse(localStorage.getItem('Horse'))
        setRemaining(localStorage.getItem('Remaining'))
        setAge(localStorage.getItem('Age'))
        setEmail(localStorage.getItem('Email'))
    },[])
    const handleSubmit = async(e) => {
        e.preventDefault();
           const userDoc= doc(db,'esers',id);
            updateDoc(userDoc, {Name:name},{Age:age},{Phone:phone},{Subscription:subscription},
            {Remaining:remaining},{Sessions:sessions},{Experience:experience},{Horse:horse});
            history(`/information/${id}`);
        
        }
    return (
        <div className="edit-container">
            <img className='edit-image' src={homeImage} alt='Home Background' />
            <div className="edit-wrapper">
                <div className='text-header-edit'>Your account</div>
                <div className='information-edit'>Edit informations</div>
                <div className="edit-informations">
                <Form className='edit-form'>Name
                    <Form.Group className='edit-row' controlId='formName'>
                        <Form.Control className="format-from" type='text' placeholder='Enter name' value={name} required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Email
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='text' placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Phone
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='number' placeholder='Enter phone' value={phone} required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Age
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='number' placeholder='Enter age' value={age} required onChange={(e) => setAge(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Subscription
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='number' placeholder='Enter subscription' value={subscription} required onChange={(e) => setSubscription(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Remaining
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='number' placeholder='Enter remaining' value={remaining} required onChange={(e) => setRemaining(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Sessions
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='numeric' placeholder='Enter sessions' value={sessions} required onChange={(e) => setSessions(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Experience
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='text' placeholder='Enter experience' value={experience} required onChange={(e) => setExperience(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Favorite horse
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='text' placeholder='Enter favorite horse' value={horse} required onChange={(e) => setHorse(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                
                <div className='create-btn-edit create-btn-font-edit'onClick={handleSubmit}>Update</div>
                </div>

            </div>
        </div>
    );
}
export default Edit
