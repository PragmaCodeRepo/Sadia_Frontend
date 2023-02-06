import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import pragmaintro from "../../assets/Pragma.mp4";
import "./VideoPlayer.css";


const VideoPlayer = () => {
  return (
    <>
    <div className='container  intro-video-box mt-5 mb-5'> 
    
     <div className='Introduction-video-title mb-5 container'>WHO WE ARE</div>
     
      <Video  autoPlay loop className="videoo "
      
      onCanPlayThrough={()=>{
        console.log('video play')
        
      }}
      
      >
      <source src={pragmaintro} type="video/webm"
     
        
      />

      </Video>
      </div>
    </>
  )
}

export default VideoPlayer;