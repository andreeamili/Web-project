import React from 'react'
import Video from '../Video';
import './Competitions.css'
import SlideShow from '../SlideShow';
import Footer from '../Footer';
 
function Competitions() {
  return (
    <div className='competitions'>
      <Video />
      <div className='text-competitions'>Our Performences</div>
      <div className='content-competitions'>
      Our club has had numerous champions over time in various equestrian disciplines. Among them are successful show jumpers,
       dressage riders, and eventing competitors. Many of these athletes have represented Romania at international competitions, 
       bringing home medals and honoring the country with their remarkable performances. CSM Equestrian Sibiu has thus become a 
       recognized name in the equestrian world in Romania and beyond.
      </div>
      <div className='content-competitions'>
      CSM Equestrian Sibiu has had many talented and successful riders over the years, who have achieved numerous remarkable
       results in equestrian competitions. Among the best are:
    </div>
    <div className='content-competitions'>
    Oana Maria Chitu - a successful show jumper who has won numerous victories and podiums at national and international 
    competitions. She represented Romania at the European Equestrian Championship in 2017 and finished 12th in the individual final.
    </div>
    <div className='content-competitions'>
    Andrei Gheorghe - a top show jumper who has won many important competitions, including the National Equestrian Championship in
     2019. He has also represented Romania in several international competitions and achieved good positions in the final rankings.
    </div>
    <div className='content-competitions'>
    Ramona Pop - a successful dressage rider who has achieved many victories and podiums at national and international competitions.
     She represented Romania at the Youth Olympic Games in 2014 and finished 11th in the individual final.
    </div>
    <div className='content-competitions'>
    These riders are just a few of the best athletes from CSM Equestrian Sibiu, who have achieved remarkable performances in
     different equestrian disciplines. Through their efforts and talent, they have brought fame and prestige to the club and the 
     country.
    </div>
    <SlideShow />
    </div>
  );
}

export default Competitions
