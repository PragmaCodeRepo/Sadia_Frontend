import React from "react";
import {Button} from "react-bootstrap";

import Card from 'react-bootstrap/Card';
import "./UserViewer.css";
import { MdLocationOn } from "react-icons/md";
import { RiStethoscopeLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";

const UserViewer = (props) => {
  function createMarkup() {
    return {__html: props.mapaddress};
  }
  return (
    <>
      {/* <div className="container">
        <h3>
          {props.first_name} {props.last_name}
          <br />
        </h3>
        email address={props.email_address}
        <br />
        mobile_number={props.mobile_number}
        <br />
        speciality={props.speciality}
        <br />
        designation={props.designation}
        <br />
        education={props.education}
        <br />
        address={props.address}
        <br />
        city={props.city}
        <br />
        zipcode={props.zip_code}
        <br />
        <img src={props.image} alt="" />
        <br />
      </div> */}

      {/* card testing */}
      <div className="whole container mt-5">
        <div className="left">
        <Card style={{ width: '25rem',height:"40rem" }}>
      <Card.Img variant="top" src={props.image} style={{height:"293px"}} id="singleProfileImage" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <div className="singleProfileContent">
        <div className="single-profile-name">{props.first_name} {props.last_name},<span className="designationspan">{props.designation}</span></div>
        <div className="singleProfilePracticesName"> {props.practice_names}</div>
        <div className="singleprofile-cityand-state"><MdLocationOn/>&nbsp;&nbsp; {props.city},{props.state},{props.zip_code}</div>
        <div className="singleprofile-speciality"><RiStethoscopeLine/> &nbsp; &nbsp;{props.speciality}</div>
        <div className="singleprofile-mobilenumber"><BsFillTelephoneFill/>&nbsp; &nbsp;(+120){props.mobile_number} | <span className="linkdin"><TiSocialLinkedin/></span></div>
        </div>

        <Card.Text>
          
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
        <div className="right">
         {/* <h1>{props.map_link}</h1>  */}
        {/* <iframe src={props.map_link} /> */}
        <div dangerouslySetInnerHTML={createMarkup() } />

        </div>
      </div>
      
    
 

      
    </>
  );
};

export default UserViewer;
