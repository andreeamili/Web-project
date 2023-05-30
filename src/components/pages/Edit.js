import React, { useEffect, useState } from "react";
import homeImage from '../pages/pictures/contact-background.jpg';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css'
import { db } from "../../firebase/config";
import { doc,  updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Footer from "../Footer";

function Edit() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [subscription, setSubscription] = useState('');
    const [remaining, setRemaining] = useState('');
    const [experience, setExperience] = useState('');
    const [horse, setHorse] = useState('');
    

    let history = useNavigate();
    const isValidExperience = (value) => {
        const validOptions = ['Beginner','beginner', 'Intermediate','intermediate', 'Advanced','advanced', 'professional','P{rofessional'];
        return validOptions.includes(value);
      };
     
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(name.length<0)
        {
            toast.error('Name invalid');
            return;
        }
        if(phone<0 || phone.length<10 || phone.length>=11)
        {
            toast.error('Phone number invalid');
            return;
        }
        if(age<0 || age>100){
            toast.error('Age invalid');
            return;
        }
        if(subscription<0)
        {
            toast.error('Subscription invalid');
            return;
        }
       
        if(age<0 || age>100){
            toast.error('Age invalid');
            return;
        }
        
        if(subscription<0)
        {
            toast.error('Subscription invalid');
            return;
        }
        if(remaining<0)
        {
            toast.error('Sessions left invalid');
            return;
        }
        if (!isValidExperience(experience)) {
            // Handle invalid experience value (display an error message, etc.)
            toast.error('Invalid experience level');
            return;
          }
        if(horse === "")
        {
            toast.error('Favorite horse invalid');
            return;
        }
        
           const userDoc= doc(db,'users',id);
           await updateDoc(userDoc, {
            "Name.name": name,
            "Age.age": age,
            "Phone.phone": phone,
            Subscription: subscription,
            Remaining: remaining,
            Experience: experience,
            Horse: horse
        });
            history(`/information/${id}`);
        
        }
    return (
        <>
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
                <Form className='edit-form'>Sessions left
                    <Form.Group className='mb-3' controlId='formName'>
                        <Form.Control className="format-from" type='numeric' placeholder='Enter sessions' value={remaining} required onChange={(e) => setRemaining(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Form className='edit-form'>Experience level
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
        <Footer/>
        </>
    );
}
export default Edit
