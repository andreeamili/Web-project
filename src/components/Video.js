import React from "react";
import video from "../components/pages/videos/Horse_Video.mp4";
import './Video.css'

const Video = () => {
    return (
    <div >
      <video className="full-width-video" autoPlay loop>
        <source src={video} type="video/mp4" />
     </video>
    </div>
    );
  };
  
  export default Video;