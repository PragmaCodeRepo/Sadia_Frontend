import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo_bg.png";
import "./HomePage.css";
import Nav from "react-bootstrap/Nav";
import search_icon from "../assets/search_icon.png";
import Footer from "./Footer";
import Caro from "./Caro";
import Diagram from "./DIagram";
import OurServices from "./OurServices";
import Popup from "./Popup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import TestService from "./TestService";
import NavBarr from "./NavBarr";
import {RiArrowDropDownLine} from "react-icons/ri"
import Spinner from "./Spinner";

const HomePage = () => {
  const navigate = useNavigate();
  const [zipcode, setZipcode] = useState("");
  const [dropdown, setdropdown] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(zipcode);
    console.log(dropdown);
    navigate(`/zipcodeProfile/${zipcode}-${dropdown}`);
  };

  return (
    <>
      <NavBarr />
      <div className="banner">
        {/* <img src={new_bg} alt="" className="banner-image" /> */}
        {/* End-to-end solutions to help clients through their divorce process  */}
        {/* A client focused approach providing families with all the tools needed to move through divorce */}
        {/* Navigating divorce, together towards a better tomorrow */}
        <div className="title">
          <div className="title-quote">
         <span className="double-shade">Navigate</span>  divorce together{" "}
            <br/><span > towards a <span className="double-shade">  better</span>  </span> <br />
           <span >  <span className="double-shade" >tomorrow</span> </span> 
             <br />{" "}
            {/* <span className="double-shade"> move divorce    </span> */}
          </div>
        </div>

        {/* <div className="row container" id="searchbar">
          <input
            type="number"
            placeholder=" Enter zip code"
            onChange={(e) => setZipcode(e.target.value)}
            className="col"
            id="zipcode-box"
          ></input>
          <select
            name="dropdown"
            onChange={(e) => setdropdown(e.target.value)}
            className="col"
            id="category-dropdown"
            required
          >
            <option value="select" selected>
              Select Category
            </option>

            <option value="Marriage">Marriage</option>
            <option value="Life Coaches">Life Coaches</option>
            <option value="Child support services">
              Child support services
            </option>
            <option value="Therapist Services">Therapist Services</option>
            <option value="Financial analyses">Financial analyses</option>
            <option value="Attorneys"> Attorneys</option>
            <option value="Mediation services"> Mediation services</option>
          </select>

          <div className="col ">
            <button type="submit" id="search-button" onClick={submitHandler}>
              <img  id="search-iconn" src={search_icon} alt="" style={{ marginRight: "10px" }}  />
              Search
            </button>
          </div>
        </div> */}

        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

        <div class="wrapper">
          <div class="search_box">
            <div class="dropdown">
              {/* <div class="default_option">All</div>  
            <ul>
              <li>All</li>
              <li>Recent</li>
              <li>Popular</li>
            </ul> */}
              <select
                name="dropdown"
                onChange={(e) => setdropdown(e.target.value)}
                // className=""
                // id="category-dropdown"
                required
              >
              
                <option value="select" selected>
                  Select Category 
                </option>

                <option value="Marriage">Marriage</option>
                <option value="Life Coaches">Life Coaches</option>
                <option value="Child support services">
                  Child support services
                </option>
                <option value="Therapist Services">Therapist Services</option>
                <option value="Financial analyses">Financial analyses</option>
                <option value="Attorneys"> Attorneys</option>
                <option value="Mediation services"> Mediation services</option>
                
              </select>
              <RiArrowDropDownLine/>
              
            </div>
            
            <div class="search_field">
              <input type="text" class="input" placeholder="Zipcode" onChange={(e) => setZipcode(e.target.value)} />
              <i class="fas fa-search" onClick={submitHandler}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Our services section */}

      {/* <OurServices /> */}
      <TestService />

      {/* How Pragma Works */}
      <Diagram />

      {/* Testimonial Section */}

      <Caro />
      <Footer />
      
      
      {/* Overlay testing */}

      {/* <NoDataFound/> */}
      {/* <Popup /> */}
    </>
  );
};

export default HomePage;
