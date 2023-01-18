import React from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import "./UserViewer.css";
import { MdLocationOn } from "react-icons/md";
import { RiStethoscopeLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import NavBarr from "./NavBarr";
import single_profile_banner from "../assets/single_profile_banner.png";
import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"


const UserViewer = (props) => {
  function createMarkup() {
    return { __html: props.mapaddress };
  }
  return (
    <>
      {/* card testing */}
      {/* <div className="whole container mt-5">
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
      {/* <div dangerouslySetInnerHTML={createMarkup() } />

        </div>
      {/* </div> */}
      <div className="NavbarSingleProfile">
        <NavBarr />
      </div>

      <div className="background-single-profile">
        <div className="bannertext">{props.speciality}</div>

        <img
          src={single_profile_banner}
          alt=""
          className="single_profile_banner"
          style={{ width: "100%",height:"22rem"}}
        />
      </div>
      <div className="single-profile-card container">
        <div className="imageplusemail">
          <div>
            <img src={props.image} alt="" className="single-profile-image" />
          </div>
          <div className="single-profile-mail"><AiOutlineMail/>&nbsp; {props.email_address}</div>
          <div className="single-profile-phone"> <BsTelephone/>&nbsp;{props.mobile_number}</div>
        </div>

        <div className="single=profile-card-content">
          <div className="card-content-sec ">
            <span className="single-profile-name">{props.first_name} {props.last_name}, &nbsp;<span className="single-profile-designation-name">{props.designation}</span> </span>
            <span className="single-profile-practices-names mt-1 mb-1">{props.practice_names}</span>
            <span className="single-profile-city" > {props.city} , &nbsp;<span className="single-profile-designation-state">{props.state}</span> </span>
          </div>
        </div>
      </div>

      {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
    </>
  );
};

export default UserViewer;
