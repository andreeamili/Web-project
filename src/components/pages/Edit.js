import React, { useEffect, useState } from "react";
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from "./Members";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Edit.css'
import Footer from "../Footer";

function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(localStorage.getItem("id"));
    const [subscription, setSubscription] = useState('');
    const [remaining, setRemaining] = useState('');
    const [sessions, setSessions] = useState('')
    const [experience, setExperience] = useState('');
    const [horse, setHorse] = useState('');
    var index = Members.map(function(e) { 
        return e.id 
        
        } )
        .indexOf(id); 


    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            let a = Members.find(m => m.id == localStorage.getItem("id"))
            a.Name = name;
            a.Phone = phone;
            a.Age = age;
            a.Subscription = subscription;
            a.Sessions = sessions;
            a.Experience = experience;
            a.Horse = horse;
            a.Remaining = remaining;
            history('/information');
        
        }
    useEffect (()=>{
        setName(localStorage.getItem('Name'))
        setPhone(localStorage.getItem('Phone'))
        setSubscription(localStorage.getItem('Subscription'))
        setSessions(localStorage.getItem('Sessions'))
        setExperience(localStorage.getItem('Experience'))
        setHorse(localStorage.getItem('Horse'))
        setRemaining(localStorage.getItem('Remaining'))
        setId(localStorage.getItem('Id'))
        setAge(localStorage.getItem('Age'))
    },[])
    return (
        <div className="edit-container">
            <img className='edit-image' src={homeImage} alt='Home Background' />
            <div className="edit-wrapper">
                <div className='text-header'>Your account</div>
                <div className='information'>Edit informations</div>
                <div className="edit-informations">
                <Form className='edit-form'>Name
                    <Form.Group className='edit-row' controlId='formName'>
                        <Form.Control type='text' placeholder='Enter name' value={name} required onChange={(e) => setName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Phone
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter phone' value={phone} required onChange={(e) => setPhone(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Age
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter age' value={age} required onChange={(e) => setAge(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Subscription
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter subscription' value={subscription} required onChange={(e) => setSubscription(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Remaining
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='number' placeholder='Enter remaining' value={remaining} required onChange={(e) => setRemaining(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Sessions
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='numeric' placeholder='Enter sessions' value={sessions} required onChange={(e) => setSessions(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Experience
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='text' placeholder='Enter experience' value={experience} required onChange={(e) => setExperience(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Favorite horse
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control type='text' placeholder='Enter favorite horse' value={horse} required onChange={(e) => setHorse(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                
                <div className='create-btn create-btn-font'onClick={handleSubmit}>Update</div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Edit
