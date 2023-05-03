import React from 'react'
import './About.css'
import aboutImage from './pictures/Home_Fundal.jpg'
 
function About() {
  return (
    <div className='about'>
      <div>
        <img className='about-image' src={aboutImage} alt='Home Background' /></div>
    </div>
  );
}

export default About