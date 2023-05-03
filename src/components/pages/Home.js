import React from 'react'
import homeImage from '../pages/pictures/Home_Fundal.jpg';
import downImage from './pictures/horse-down.jpg'
import './Home.css';

function Home() {
  
  return (
    <>
    <div className='home'>
      <div>
        <img className='home-image' src={homeImage} alt='Home Background' /></div>
      <div className='text-align '>
        <p>
        Welcome to the CSM Equestrian Club Sibiu website! We are a passionate community of horse lovers dedicated to improving
        our skills and participating in equestrian competitions and events both in Romania and abroad. We pride ourselves on
        having a team of experienced coaches who are dedicated to developing you as a rider, regardless of your current level
        of experience.
        </p>
        <p> 
        At CSM Equestrian Club Sibiu, we are passionate about all types of riding, from show jumping and dressage to 
        recreational riding. Whatever you enjoy doing on horseback, we will provide you with the support you need to develop 
        your skills and reach the next level.
        </p>
        <p>
        We are an inclusive community, welcoming both experienced riders and beginners who want to learn more about 
        equestrianism and horses. Additionally, we organize courses for children and young people with disabilities to help 
        them develop their passion for equestrianism and learn more about this wonderful activity.
        </p>
        <p>
        So if you are passionate about horses and riding and want to develop your skills and participate in equestrian 
        competitions and events, we look forward to welcoming you to CSM Equestrian Club Sibiu!
        </p>
        <p className='align-down'>So don't wait any longer<br></br> and join us!</p>

        </div>
       
    </div>
    </>
  );
}

export default Home
