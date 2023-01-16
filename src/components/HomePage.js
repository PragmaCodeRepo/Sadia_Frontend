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
        <div className="title">
          <div className="title-quote">
            End-to-End solutions to{" "}
            <span className="double-shade">help you </span> <br />
            through your divorce <br />{" "}
            <span className="double-shade"> process </span>
          </div>
        </div>

        <div className="row" id="searchbar">
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
              <img src={search_icon} alt="" style={{ marginRight: "2rem" }} />
              Search
            </button>
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
      <Popup />
    </>
  );
};

export default HomePage;
