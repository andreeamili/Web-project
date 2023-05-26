import React, { useEffect, useState } from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import Members from './Members.js';
import { Link,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Information() {
  const { id } = useParams();
 

  
  const [usersList, setUsersList] = useState([]);
  const usersCollectionRef = collection(db, 'users')
  useEffect(() => {
      const getUsersList = async () => {
          try {
              const data = await getDocs(usersCollectionRef);
              const filteredData = data.docs.map((doc) => ({
                  ...doc.data(),
                  id: doc.id
              }));
              setUsersList(filteredData);
              console.log(filteredData )
              console.log("ce e in baza ")
          }
          catch (err) {
              console.error(err);
          }
      };

      getUsersList();
  },[]);
  console.log(usersList )
  console.log(" ce e in lista")
  const member = usersList.find((user) => user.id === id);
  console.log(usersList);
  console.log("ceva")

    let history= useNavigate();

    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure you want to delete your account?');
      
        if (confirmation) {
          const index = member.findIndex((e) => e.id === id);
          if (index !== -1) {
            member.splice(index, 1);
          }
      
          history('/authentication');
        }
      }
    const handleLogout = () =>{

      signOut(auth).then(() => {
        toast.success("Logout successfully...");
        history("/authentication");
      }).catch((error) => {
        toast.error(error.messsage);
      });
    } 
  return (
    <div className='infomrations'>
      <img className='infomration-image' src={homeImage} alt='Home Background' />
      <div className="information-wrapper">
      <div className='text-header-information'>Your account
        </div>
        <div className='information-account'>Account informations
        </div>
        
        {usersList.length > 0 && (
          <>
        <div className='name-information'><strong>Name: </strong>{member.Name.name}<br></br>
        </div>
        <div className='name-information'><strong>Phone: </strong>{member.Phone.phone}<br></br>
        </div>
        <div className='name-information'><strong>Age: </strong>{member.Age.age}<br></br>
        </div>
        <div className='name-information'><strong>Nr abonamente: </strong>{member.Subscription}<br></br>
        </div> 
        <div className='name-information'><strong>Nr sedinte ramase: </strong> {member.Remaining}<br></br>
        </div>
        <div className='name-information'> <strong>Sedinte fara abonament: </strong>{member.Sessions}<br></br>
        </div>
        <div className='name-information'> <strong>Cal preferat: </strong>{member.Horse}<br></br>
        </div>
        <div className='name-information'> <strong>Nivel de experienta: </strong>{member.Experience}<br></br>
        </div>
        </>)}
       <Link to='/edit'>
        <div className='create-btn-info create-btn-info'>Edit</div>
        </Link>
        <div className='create-btn-info create-btn-info' onClick={()=>handleLogout(member.id)}>Logout</div>
        <Link to='/other'>
        <div className='create-btn-info create-btn-info' >See others</div>
        </Link>
        <div className='create-btn-info create-btn-info' onClick={()=>handleDelete(member.id)}>Delete account</div>
      </div>
    </div> 
  );
}

export default Information