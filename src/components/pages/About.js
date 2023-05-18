import React, { useState,useEffect }  from 'react'
import './About.css'
import aboutUsImage from './pictures/contact-background.jpg'
import Samir from './pictures/Samir.jpg'
import Sara from './pictures/Sara.jpg'
import Rozi from './pictures/Rozi.jpg'
import Bacardi from './pictures/Bacardi.jpg'
import Pauline from './pictures/Pauline.jpg'
import Footer from '../Footer'

function About() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(slideIndex => (slideIndex + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='about'>
      <img className='about-us-image' src={aboutUsImage} alt='Home Background' />
      <div className='text-about'>About us</div>
      <div className='content-about'>Our club represents a sports association in Romania, specialized in practicing equestrian sports.
        It was founded in 2012. We develops and promotes equestrian sports among children and adults, as well as supports and trains athletes
        for national and international competitions.</div>
      <div className='content-about'>We have a modern sports facility with a dressage arena, jumping arena, training area for young
        horses, and a recreational area. We also offer training and instruction services for all levels of experience, from beginners
        to high-performance athletes.</div>
      <div className='content-about'>Our club has achieved remarkable results in national and international competitions, and our
        athletes are recognized in the equestrian world for their achievements. Additionally, our community is active and engaged,
        promoting a passion for equestrian sports and educating young people in the spirit of sporting values.</div>
      <div className='content-about align'>And even if you're not passionate about this sport or curious to experience what it's like to team
        up with a partner who doesn't speak the same language as you, you can always come and visit our horses who are waiting for
        you with open arms and hope that you'll bring them a reward for the hard work they put in for us every day.</div>
        <div className='content-about align'>
        These were just a few of our horses, graceful and powerful animals that delight our eyes and inspire our admiration.
         Whether they are used in equestrian sports, agriculture, or simply as pets, horses are truly special and deserve all our
          attention.
        </div>
       <div className='gallery '>
       
                <img className='image1 new-margin1-1' src={Sara} alt='antrenor' />
                <img className='image2 new-margin2 blur-image' src={Bacardi} alt='antrenor' />
                <img className='image1 new-margin1' src={Samir} alt='antrenor' />
                <img className='image2 new-margin2 blur-image' src={Rozi} alt='antrenor' />
                <img className='image2 new-margin2 blur-image' src={Pauline} alt='antrenor' />
        </div>
        <Footer />
    </div>

  );
}


export default About

