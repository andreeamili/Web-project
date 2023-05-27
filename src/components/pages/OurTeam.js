import React from 'react'
import './OurTeam.css'
import teamImage from './pictures/echipa2.jpg'
import Image1b from './pictures/Bucur.jpg'
import Image2b from './pictures/bucur-antrenor.jpeg'
import image1a from './pictures/adelina-antrenor1.jpg'
import image2a from './pictures/adelina-antrenor2.jpg'
import image1g from './pictures/gruia-antrenor1.jpg'
import image2g from './pictures/gruia3.jpg'
import image1d from './pictures/daniel-antrenor1.jpg'
import image2d from './pictures/daniel-antrenor2.jpg'

function OurTeame() {
    return (
        <div className='our-team'>
            <img className='team-image' src={teamImage} alt='Team image' />
            <div className='text-team'>Our Team</div>
            <div className='content-team'>We are an equestrian club dedicated to developing a passion for this sport among children
                and adults, and preparing athletes for national and international competitions. Our team of coaches consists of
                experienced equestrians who share a common passion for this sport and for the education of young athletes.
            </div>
            <img className='image1' src={Image1b} alt='antrenor' />
            <img className='image2 blur-image' src={Image2b} alt='antrenor' />
            <div className='content-team'>
                <strong>Ionel Bucur </strong>is the head coach of the club and has over 20 years of experience in equestrian sports. He specializes in
                dressage and jumping, and his athletes have achieved remarkable results in national and international competitions.
            </div>
            <img className='image1' src={image1a} alt='antrenor' />
                <img className='image2 blur-image' src={image2a} alt='antrenor' />
                <div className='content-team'>
                <strong>Adelina Bucur </strong> is an equestrian coach and sports psychologist with over 10 years of experience in preparing 
                high-performance athletes. She focuses on developing athletes' psychological skills, such as confidence, 
                concentration, and stress management.
                </div>
                <img className='image1' src={image1g} alt='antrenor' />
                <img className='image2 blur-image' src={image2g} alt='antrenor' />
                <div className='content-team'>
                <strong>Gruia </strong>is one of the best equestrian coaches in Romania, with over 25 years of experience in the field. He 
                specializes in dressage and jumping and has trained numerous national and international champions.
                </div>
                <img className='image1' src={image1d} alt='antrenor' />
                <img className='image2 blur-image' src={image2d} alt='antrenor' />
                <div className='content-team'>
                <strong>Daniel Bucur </strong>is an equestrian coach with over 15 years of experience in the field. He specializes in 
                preparing athletes for jumping and has made multiple contributions to the development of equestrian sports in Romania.
                </div>
                <div className='text-margin'>
                Our team of coaches is prepared to offer training and coaching services for all levels of experience, from 
                beginners to high-performance athletes. We are proud to have such a team of professionals who bring with them 
                experience, knowledge, and dedication to the development of equestrian sports in Romania.
                </div>
        </div>
    );
}

export default OurTeame
