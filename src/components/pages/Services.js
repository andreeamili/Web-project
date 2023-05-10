
import React, { useState }  from 'react'
import './Services.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import adelinaImage from './pictures/Home_Fundal.jpg'
import ionelImage from './pictures/ionel-bucur2.jpg'
import danielImage from './pictures/daniel.jpg'
import gruiaImage from './pictures/gruia3.jpg'
import Adelina from './Adelina';

function Services() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter1 = () => {
    setHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };
  const handleMouseEnter3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  return (
    <div className='services'>
      <div>
        <img className='ionel-image' src={ionelImage} alt='Home Background' />
      </div>
      <div className='text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p  className={`text ${hovered ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <Link to='/ionel' className='edit-link'>
          <span> <strong>Bucur Ionel</strong></span>
          </Link>
         
        </p>
      </div>
      <div>
        <img className='adelina-image' src={adelinaImage} alt='Home Background' /></div>
      <div className='text'>
      <p className='space'>
          <strong>Agrement  Show jumping    Dressage</strong>
        </p>
        <p className={`text ${hovered1 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}>
          <Link to='/adelina' className='edit-link'>
          <span><strong>Paralescu Adelina</strong></span>
          </Link>
          
        </p>
      </div>
      <div>
        <img className='gruia-image' src={gruiaImage} alt='Home Background' /></div>
      <div className='text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p className={`text ${hovered2 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}>
          <Link to='/gruia' className='edit-link'>
          <span><strong>Gruia</strong></span>
          </Link>
         
        </p>
      </div>
      <div>
        <img className='daniel-image' src={danielImage} alt='Home Background' /></div>
      <div className='text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p className={`text ${hovered3 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}>
          <Link to='/daniel' className='edit-link'>
          <span> <strong>Bucur Ionut Daniel</strong></span>
          </Link>
        </p>
      </div>
    </div>

  );
}

export default Services
