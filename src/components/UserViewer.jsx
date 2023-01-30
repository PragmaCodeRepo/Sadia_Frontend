import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import "./UserViewer.css";
import { MdLocationOn } from "react-icons/md";
import NavBarr from "./NavBarr";
import single_profile_banner from "../assets/single_profile_banner.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import Footer from "./Footer";
import { SlSocialLinkedin } from "react-icons/sl";



import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link, } from "react-router-dom";

const UserViewer = (props) => {
  const [isActive, setisActive] = useState(false);
  const [toggleState, setToggleState] = useState(1);



  function createMarkup() {
    return { __html: props.mapaddress };
  }
  function Tabs() {
    const toggleTab = (index) => {
      setToggleState(index);
    };
  }
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const changestyle = (e) => {
    setisActive(!isActive);
    let btnName = e.target.name
    
    // if (isActive === true) {
    //   setstyle("cont2");
    // }

  };
 

  
  

  return (
    <>
      
      <div className="NavbarSingleProfile">
        <NavBarr />
      </div>

      <div className="background-single-profile">
        <div className="bannertext">
          Profile of{" "}
          <span className="double-shade">
            {props.first_name} {props.last_name}
          </span>
        </div>

        <img
          src={single_profile_banner}
          alt=""
          className="single_profile_banner"
          style={{ width: "100%", height: "22rem" }}
        />
      </div>

      <div className="single-profile-card container">
        <div className="imageplusemail">
          <div>
            <img src={props.image} alt="" className="single-profile-image" />
          </div>
          
         <div className="mail-plus-phone-plus-linkdin">

          <div className="single-profile-mail">
            <AiOutlineMail />
            &nbsp; {props.email_address}
          </div>
          <div className="single-profile-phone">
            {" "}
            <BsTelephone />
            &nbsp;{props.mobile_number}
          </div>

         {/* <Link to={props.linkdin_profile}></Link> */}
         <a href={props.linkdin_profile}><div className="linkdin-icon"><SlSocialLinkedin/> </div></a>
          </div>


        </div>

        <div className="single=profile-card-content">
          <div className="card-content-sec ">
            <span className="single-profile-name">
              {props.first_name} {props.last_name}, &nbsp;
              <span className="single-profile-designation-name">
                {props.designation}
              </span>{" "}
            </span>
            <span className="single-profile-practices-names mt-1 mb-1">
              {props.practice_names}
            </span>
            <span className="single-profile-city">
              <MdLocationOn /> {props.city} , &nbsp;
              <span className="single-profile-designation-state">
                {props.state}
              </span>{" "}
            </span>

            <span className="Single-Profile_rating mt-3">
              <HiStar /> <HiStar /> <HiStar /> <HiStar />
              <HiStar />
              <HiStar /> ({props.rating}){" "}
            </span>
          </div>
        </div>
        
         <div className="single-Profile-2nd-section">
          <div className="buttons mt-5">
           
            <button className="buttonn mt-3" >Introduction</button>
            <button className={`buttonn mt-3 ${isActive && "button-css"}`} onClick={(e) => changestyle(e)} name='education'>
              Education
            </button>
            <button className="buttonn mt-3  ">Speciality</button>
            <button className="buttonn mt-3">Office Location</button>
          </div>
          <div className="Introduction mt-5">
            <div className="intro-text container"> {props.introduction}</div>
          </div>
          <div className={`Education ${isActive && 'cont2'}`}>
            <div className="education-text"> {props.education}</div>
          </div>
          <div className="Speciality ">
            <div className="speciality-text "> {props.speciality}</div>
          </div>
          <div className="office-location container">
            <div className="office-map  ">
              {" "}
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
        </div> 
      </div>
     

      {/* <div className="container mt-5">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Introduction
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
          style={{cursor:"pointer"}}>
          Education
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
          style={{cursor:"pointer"}}>
          Speciality
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
         style={{cursor:"pointer"}}>
          Office location
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
           <div className="Introduction">
            <div className="intro-text"> {props.introduction}</div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className={`Education ${isActive && 'cont2'}`}>
            <div className="education-text"> {props.education}</div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="Speciality ">
            <div className="speciality-text "> {props.speciality}</div>
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
        <div className="office-location container">
            <div className="office-map  ">
              {" "}
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
          </div>
      </div>
    </div> */}
      <Footer />
    </>
  );
};

export default UserViewer;
