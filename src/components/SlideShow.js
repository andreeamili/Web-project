import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import img2 from './pages/pictures/poza2.jpg'
import img3 from './pages/pictures/poza3.jpg'
import img4 from './pages/pictures/poza4.jpg'
import img5 from './pages/pictures/poza5.jpg'
import img6 from './pages/pictures/poza6.jpg'
import img7 from './pages/pictures/poza7.jpg'
import img8 from './pages/pictures/poza8.jpg'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const slideImages = [
   
    {
        url: img7,
        caption: 'Slide 4'
      },
      {
        url: img5,
        caption: 'Slide 5'
      },
      {
        url: img6,
        caption: 'Slide 6'
      },
      {
        url: img4,
        caption: 'Slide 7'
      },
      {
        url: img8,
        caption: 'Slide 8'
      },
     
      {
        url: img2,
        caption: 'Slide 2'
      },
      {
        url: img3,
        caption: 'Slide 3'
      },
  ];

function SlideShow() {
  return (
    <div>
       <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              
              <img  className='size'   src={slideImage.url} />
                
              
            </div>
          ))} 
        </Slide>
    </div>
  )
}

export default SlideShow
