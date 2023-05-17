import React from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from './Members.js';
import { Link,useNavigate } from 'react-router-dom';

function Information() {
  const member =  Members.find((item) => item.id === "2");

    let history= useNavigate();

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete your account?');
      
        if (confirmation) {
          const index = Members.findIndex((e) => e.id === id);
          if (index !== -1) {
            Members.splice(index, 1);
          }
      
          history('/authentication');
        }
      }
  return (
    <div className='account'>
      <img className='account-image' src={homeImage} alt='Home Background' />
      <div className="account-wrapper">
      <div className='text-header'>Your account
        </div>
        <div className='information'>Account informations
        </div>

        <div className='name'><strong>Name: </strong>{member.Name}<br></br>
        </div>
        
        <div className='name'><strong>Phone: </strong>{member.Phone}<br></br>
        </div>
       
        <div className='name'><strong>Nr abonamente: </strong>{member.Subscription}<br></br>
        </div> 
        <div className='name'><strong>Nr sedinte ramase: </strong> {member.Remaining}<br></br>
        </div>
        <div className='name'> <strong>Sedinte fara abonament: </strong>{member.Sessions}<br></br>
        </div>
        <div className='name'> <strong>Cal preferat: </strong>{member.Horse}<br></br>
        </div>
        <div className='name'> <strong>Nivel de experienta: </strong>{member.Experience}<br></br>
        </div>
       <Link to='/edit'>
        <div className='create-btn create-btn-size' onClick={()=>alert(member.id)}>Edit</div>
        </Link>
        <div className='create-btn create-btn-size' onClick={()=>handleDelete(member.id)}>Delete account</div>
      </div>
    </div> 
  );
}

export default Information
