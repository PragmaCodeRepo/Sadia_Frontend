import NavBarr from "../NavBarr";
import "./ContactUs.css";
import Contactusbanner from "../../assets/Contactusbanner.png";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Thankyou from "./Thankyou";
import Popup from "../Popup";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";

const ContactUs = () => {
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [message, setmessage] = useState("");
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const form = useRef();
  const [done, setDone] = useState(false);
  const [name, setname] = useState("");

  const sendEmail = (e) => {
    // tostify

    if (name === "" || phonenumber === "" || email === "" || message === "") {
      notifyblank();

      ;
    } else if (email.length < 5) {
     
      notifyemail();
    }

    //email send
    else {
      console.log(setname);

      e.preventDefault();

      emailjs
        .sendForm(
          "service_nk0xn4i",
          "template_aqixkz3",
          form.current,
          "r-nootBn4togO_lU9"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const thankyou = () => {
    console.log("hii");
    navigate("/thankyou");
  };

  const notifyblank = () => toast("your response is empty please fill details");

  const notifyemail = () => toast("your response is empty please fill details");

  return (
    <>
      <NavBarr />
      <div className="banner-contact-us">
        <div className="contactus-banner-image">
          {/* <span className='contactus-banner-text ' >Contact Us</span> */}
        </div>
      </div>

      {/* contactus form */}
      <div className="formbox">
        <div className="contactus-title">
          <span className="contactus-main-title mt-5">Contact us</span>
          <span className="contactus-subtitle">for immediate assistance </span>
          <span
            className="contactus-subtitle"
            style={{ color: "#5380ff", fontStyle: "bold" }}
          >
            +1 331-707-2779
          </span>
          <span className="contactus-subtitle">or fill out the form below</span>
          {/* <span className='contactus-sub-title'>Feel Free to contact us any time. We will get back to you as soon as we can!.</span> */}
        </div>
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <form ref={form} onSubmit={sendEmail}>
              <div class="formbold-mb-5">
                <label for="name" class="formbold-form-label">
                  {" "}
                  Full Name <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Full Name"
                  class="formbold-form-input"
                  onChange={(e) => setname(e.target.value)}
                  // required
                />
              </div>
              <div class="formbold-mb-5">
                <label for="email" class="formbold-form-label">
                  {" "}
                  Email Address <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Enter your email"
                  class="formbold-form-input"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div class="formbold-mb-5">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Phone Number <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  class="formbold-form-input"
                  onChange={(e) => setphonenumber(e.target.value)}
                  // required
                />
              </div>

              <div class="formbold-mb-5 formbold-pt-3">
                <div class="formbold-mb-5">
                  <label for="phone" class="formbold-form-label">
                    {" "}
                    Your Message <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="user_message"
                    id="phone"
                    placeholder="Enter your message"
                    class="formbold-form-input yourmessage"
                    onChange={(e) => setmessage(e.target.value)}

                    // required
                  />
                </div>
              </div>

              <div>
                <button class="formbold-btn">Book My Consult</button>
              </div>
              {/* <span style={{textAlign:"center"}} className="Thankyou-alert">{done && "thanks for contacting us!" }</span> */}
              {done && thankyou()}
            </form>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ContactUs;
