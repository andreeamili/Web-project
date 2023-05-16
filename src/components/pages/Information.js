import React from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from './Members.js';

function Information() {
  const member =  Members.find((item) => item.id === "1");
  return (
    <div className='account'>
      <img className='account-image' src={homeImage} alt='Home Background' />
      <div className="account-wrapper">
      <div className='text-header'>Your account
        </div>
        <div className='information'>Contact informations
        </div>

        <div className='name'><strong>Name: </strong>{member.Name}<br></br>
        </div>
        
        <div className='name'><strong>Phone: </strong>{member.Phone}<br></br>
        </div>
       
        <div className='name'><strong>Nr abonamente: </strong>{member.Subscription}<br></br>
        </div> 
        <div className='name'><strong>Nr sedinte: </strong> {member.Sessions}<br></br>
        </div>
        <div className='name'> <strong>Cal preferat: </strong>{member.Horse}<br></br>
        </div>
        <div className='name'> <strong>Nivel de experienta: </strong>{member.Experience}<br></br>
        </div>
       
        <div className='create-btn create-btn-size'>Edit</div>
        <div className='create-btn create-btn-size'>Delete account</div>
      </div>
    </div> 
  );
}

export default Information
