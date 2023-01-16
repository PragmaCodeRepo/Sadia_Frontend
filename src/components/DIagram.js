import React from 'react'
import "./Diagram.css"
import image from "../assets/Vector.png"
import image1 from "../assets/organization-chart.png"
import image2 from "../assets/Maskgroup.png";
import Lineindicator from "../assets/LineIndicator.png"
import Lineindicator2 from "../assets/Lineindicator2.png"


const Diagram = () => {
  return (
    <>
    <div className='Howwework'>
     <div className='title'><h1>How does Pragma work?</h1></div>
     <div className='three-circle'>
        <div className='first-circle'>
         <div ><img src={image} alt="" className='svg-image' style={{marginLeft: "27px",
    marginTop:"21px"}}/></div>
      
        <img src={Lineindicator} alt=" " className="LineIndicator1"/>
        
      
         
            
        </div>
        <div className='second-circle'>
        <div ><img src={image1} alt="" className='svg-image'/></div>
        <img src={Lineindicator2} alt=" " className="LineIndicator1"/>
         
        </div>
        <div className='third-circle'>
        <div ><img src={image2} alt="" className='svg-image'/>
       
        </div>
       

        </div>
        
     </div>
        <span className='search'>
            <span >Search resource</span>
            <span style={{marginLeft:"-5rem"}}>Contact  resource</span>
            <span style={{marginLeft:"-2.3rem"}}> Peace  of mind</span>
        </span>
    </div>
    </>
  )
}

export default Diagram