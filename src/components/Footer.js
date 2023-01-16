import React from "react";
import "./Footer.css";
import logo_with_rectangle from "../assets/logo_with_rectangle.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <div className="pragma_text-with-logo">
            <img src={logo_with_rectangle} alt="" className="logo" />
            <h3>
              <span style={{fontSize:"45px"}}>Pragma</span>
            </h3>
          </div>

          <p class="footer-links">
            {/* <a href="#" >Home</a> */}
            <Link to="/">Home</Link>
            <Link to="/contactus">Contact us</Link>
            <Link to="/aboutus">About us</Link>

            {/* <a href="#" >Contact Us</a> */}

            {/* <a href="#" >About Us</a> */}

            <a href="#" >FAQ</a>
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>472 Mount Ct.</span> North Aurora, IL
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@pragma.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            A suite of products and services designed to provide focused and relevant information for the divorce process .
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="copyright-text">Copyright © 2022 certified</div>
      </footer>
    </>
  );
};

export default Footer;
