import React, { useEffect, useState } from 'react';
import './Information.css';
import homeImage from '../pages/pictures/contact-background.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { db } from "../../firebase/config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

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
      }
      catch (err) {
        console.error(err);
      }
    };

    getUsersList();
  }, []);
  const member = usersList.find((user) => user.id === id);

  let history = useNavigate();

  const handleDelete = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete your account?');
    if (confirmation) {
      try {
        const user = auth.currentUser;
        await signOut(auth);
        await user.delete();
        await deleteDoc(doc(db, 'users', id));

        toast.success("Account deleted successfully...");
        history('/authentication');
      } catch (error) {
        toast.error(error.message);
      }
    }
  }
  const handlEdit = () => {
    history(`/edit/${member.id}`)
  }

  const handleLogout = () => {

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
            <div className='name-information'><strong>Subscriptions: </strong>{member.Subscription}<br></br>
            </div>
            <div className='name-information'><strong>Sessions left: </strong> {member.Remaining}<br></br>
            </div>
            <div className='name-information'> <strong>Favorite horse: </strong>{member.Horse}<br></br>
            </div>
            <div className='name-information'> <strong>Experience level: </strong>{member.Experience}<br></br>
            </div>
          </>)}
        <div onClick={() => handlEdit(member.id)} className='create-btn-info create-btn-info'>Edit</div>
        <div className='create-btn-info create-btn-info' onClick={() => handleLogout(member.id)}>Logout</div>
        <Link to='/other'>
          <div className='create-btn-info create-btn-info' >See others</div>
        </Link>
        <div className='create-btn-info create-btn-info' onClick={() => handleDelete(member.id)}>Delete account</div>
      </div>
    </div>
  );
}

export default Information