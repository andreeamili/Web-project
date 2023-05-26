import React, { useState }  from 'react'
import './Services.css'
import adelinaImage from './pictures/Home_Fundal.jpg'
import ionelImage from './pictures/ionel-bucur2.jpg'
import danielImage from './pictures/daniel.jpg'
import gruiaImage from './pictures/gruia3.jpg'
import Footer from '../Footer'

function Services() {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

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
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick1 = () => {
    setClicked1(!clicked1);
  };
  const handleClick2 = () => {
    setClicked2(!clicked2);
  };
 
  const handleClick3 = () => {
    setClicked3(!clicked3);
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
         
           <strong  onClick={handleClick}>Bucur Ionel</strong>
           {clicked && (
            <p className='subtext'>
              Jumping session 100 RON
            </p>
          )}
         
        </p>
      </div>
      <div>
        <img className='adelina-image' src={adelinaImage} alt='Home Background' /></div>
      <div className='text'>
      <p className='space'>
          <strong>Agrement   Show jumping     Dressage</strong>
        </p>
        <p className={`text ${hovered1 ? "text-hovered" : ""}`}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}>
          <strong onClick={handleClick1}>Paralescu Adelina</strong>
          {clicked1 && (
            <p className='subtext'>
              Sedinta incepatori 30 min 70 ron -abonament 10 sedinte 630 RON <br></br>
              Sedinta incepatori 45 min 80 ron -abonament 10 sedinte 720 RON <br></br>
              Sedinta sarituri intermediar 30 min 80 ron -abonament 10 sedinte 720 RON  <br></br>
              Sedinta sarituri intermediar 45 min 90 ron -abonament 10 sedinte 810 RON  <br></br>
              Sedinta sarituri avansati 30 min 90 ron -abonament 10 sedinte 810 RON  <br></br>
              Sedinta sarituri avansati 45 min 100 ron -abonament 10 sedinte 900 RON  <br></br>
              Abonament sedinte sarituri incepatori + dresaj 45 min - 750   <br></br>
              Abonament sedinte sarituri intermediari + dresaj 45 min - 780   <br></br>
            </p>
          )}
          
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
          <strong onClick={handleClick2}>Gruia</strong>
          {clicked2 && (
            <p className='subtext'>
              Jumping session 100 RON
            </p>
          )}
         
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
           <strong onClick={handleClick3}>Bucur Ionut Daniel</strong>
          {clicked3 && (
            <p className='subtext'>
              Jumping session 100 RON
            </p>
          )}
        </p>
      </div>
    </div>

  );
}

export default Services
