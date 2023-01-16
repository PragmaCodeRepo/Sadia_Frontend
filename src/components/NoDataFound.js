import React from "react";
import "./NoDataFound.css";
import image from "../assets/NoDataFound.png";
import Footer from "./Footer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/logo_bg.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";

const NoDataFound = () => {
  return (
    <>
      <div class="empty-state">
        <div class="empty-state__content">
          <div class="empty-state__icon">
            <img src={image} alt="" className="NoDataFoundImage" />
          </div>
          <div class="empty-state__message">
            No resources added to your location .
          </div>
          <div class="empty-state__help">
            But We are Working on it and deploy the resourcs asap.
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default NoDataFound;
