import React from "react";
import "./Footer.css";
import logo_with_rectangle from "../assets/logo_with_rectangle.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import faq from "./../assets/faq.jpg";
const Footer = () => {
  const newDate = new Date();
  const currentYear = newDate.getFullYear();

  const navigate = useNavigate();
  const helphandler = () => {
    navigate("/contactus");
  };
  const faqhandler = () => {
    navigate("/faq");
  };

  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <div className="pragma_text-with-logo">
            <img src={logo_with_rectangle} alt="" className="logo" />
            <h3>
              <span style={{ fontSize: "45px" }}>Pragma</span>
            </h3>
          </div>

          <p class="footer-links">
            {/* <a href="#" >Home</a> */}
            <Link to="/" id="footerlink">
              Home
            </Link>
            <Link to="/contactus" id="footerlink">
              Contact us
            </Link>
            <Link to="/aboutus" id="footerlink">
              About us
            </Link>
          </p>
          <div>
            <img src={faq} alt="" className="faq-image" onClick={faqhandler} />
          </div>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-phone"></i>
            <p>+1 331-707-2779</p>
          </div>

          <div className="mail-section">
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">info@pragma.how</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about mt-5">
            <span>About the company</span>A suite of products and services
            designed to provide focused and relevant information before, during,
            and after the divorce process is completed.
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

        <div className="copyright-text">
          Copyright © {currentYear} certified
        </div>
      </footer>
      <div class="help-button-wrapper" onClick={helphandler}>
        <button class="help-button">
          <span>?</span>
          Get Help
        </button>
      </div>
    </>
  );
};

export default Footer;
