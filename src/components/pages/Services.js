import React, { useState }  from 'react'
import './Services.css'
import adelinaImage from './pictures/Home_Fundal.jpg'
import ionelImage from './pictures/ionel-bucur2.jpg'
import danielImage from './pictures/daniel.jpg'
import gruiaImage from './pictures/gruia3.jpg'

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
        <img className='ionel-image' src={ionelImage} alt='Home Background' /></div>
      <div className='ionel-text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p  className={`text ${hovered ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <strong>Bucur Ionel</strong>
        </p>
      </div>
      <div>
        <img className='adelina-image' src={adelinaImage} alt='Home Background' /></div>
      <div className='adelina-text'>
      <p className='space'>
          <strong>Agrement</strong>
        </p>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p className='space'>
          <strong>Dressage </strong>
        </p>
        <p className={`text ${hovered1 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}>
          <strong>Paralescu Adelina</strong>
        </p>
      </div>
      <div>
        <img className='gruia-image' src={gruiaImage} alt='Home Background' /></div>
      <div className='gruia-text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p className={`text ${hovered2 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}>
          <strong>Gruia</strong>
        </p>
      </div>
      <div>
        <img className='daniel-image' src={danielImage} alt='Home Background' /></div>
      <div className='daniel-text'>
        <p className='space'>
          <strong>Show jumping</strong>
        </p>
        <p className={`text ${hovered3 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}>
          <strong>Bucur Daniel</strong>
        </p>
      </div>
    </div>

  );
}

export default Services
