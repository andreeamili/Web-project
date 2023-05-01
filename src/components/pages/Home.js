 import React from 'react'
 import homeImage from '../pages/pictures/Home_Fundal.jpg';
 import './Home.css';

 function Home() {
    
   return (
     <div>
       <img className='home-image' src={homeImage} alt='Home Background' />
     </div>
   );
 }
 
 export default Home
 