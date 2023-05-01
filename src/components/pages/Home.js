 import React from 'react'
 import homeImage from '../pages/pictures/Home_Fundal.jpg';
 import './Home.css';

 function Home() {
    
   return (
     <div className='home'>
       <img className='home-image' src={homeImage} alt='Home Background' />
          <p className='text-align '>
       Welcome to the CSM Equestrian Club Sibiu website! We are a passionate community of horse lovers dedicated to improving
        our skills and participating in equestrian competitions and events both in Romania and abroad. We pride ourselves on
        having a team of experienced coaches who are dedicated to developing you as a rider, regardless of your current level
        of experience.</p>


     </div>
   );
 }
 
 export default Home
 