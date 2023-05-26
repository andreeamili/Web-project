import React, { useState , useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [userName, setUserName] = useState("");
  const [id, setId]=useState("");
  const showSidebar = () => setSidebar(!sidebar);
  //Monitor currently sign in user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       const uid = user.uid;
       setId(uid);
       console.log(user); 
       setUserName(user.Name);
      } else {
        setUserName("cacaca")
      }
    });
  },[])
  console.log(id)
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <h1 className='left-side'>
            <span>CSM</span>
            <div className="left-side-icon">
            <GiIcons.GiHorseHead/>
            </div>
          </h1>
          <div className="left-side-subtitle">Sibiu Equestrian Base</div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose /> 
              </Link>
              
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                  
                </li>
              );
            })}

            <li hey="6" className="nav-text">
              {userName !== "cacaca" ?(
                <Link  to={`/information/${id}`}>
                  <AiIcons.AiOutlineUserAdd />
                  <span>Hi, {userName} </span>
                </Link>
              ):(
                <Link to="/authentication">
                  <AiIcons.AiOutlineUserAdd />
                  <span>My account </span>
                </Link>
              )}
              
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

