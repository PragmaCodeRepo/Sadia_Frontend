import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Partner.css";
import NavBarr from "../NavBarr";
import Footer from "../Footer";
import ReactGA from "react-ga";
const Partner = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const form = useRef();
  const [done, setDone] = useState(false);
  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [speciality, setspeciality] = useState("");
  const [location, setlocation] = useState("");
  const [practicename, setpracticename] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const sendEmail = (e) => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // validations
    if (
      fullname === "" ||
      email === "" ||
      speciality === "" ||
      location === "" ||
      practicename === "" ||
      phonenumber === ""
    ) {
      e.preventDefault();
      notifyblank();
    } else if (!email.match(validRegex)) {
      e.preventDefault();
      notifyemail();
    } else {
      //email send
      e.preventDefault();

      emailjs
        .sendForm(
          "service_nk0xn4i",
          "template_2bqmo96",
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
  const notifyblank = () => toast(" Please fill details");

  const notifyemail = () => toast("your email is invalid");
  return (
    <>
      <NavBarr />
      <header class="hero">
        <div class="hero-inner">
          <div class="hero-text">
            <h2> Join the Pragma community</h2>
            {/* <p>Donec lobortis magna at ligula tristique maximus. Suspendisse lacinia ligula lacus. Nunc id risus a dui bibendum finibus tincidunt eu magna. Suspendisse a dictum neque. Suspendisse sit amet diam et libero posuere pharetra. Sed vel magna nec dolor aliquam lobortis vitae id ante.</p> */}
            <form class="hero-form" action="/"></form>
          </div>

          <div class="hero-image">
            <img src="https://assets.codepen.io/495197/undraw_Newsletter_re_wrob.svg" />
          </div>
        </div>
      </header>

      <div className="formbox">
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
                  name="user_fullname"
                  id="name"
                  placeholder="Full Name"
                  class="formbold-form-input"

                 
                />
              </div>
              <div class="formbold-mb-5">
                <label for="email" class="formbold-form-label">
                  {" "}
                  Email Address <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_email"
                  id="email"
                  placeholder="Enter your email"
                  class="formbold-form-input"
                 
                />
              </div>
              <div class="formbold-mb-5">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Speciality <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_speciality"
                  id="phone"
                  placeholder="Speciality"
                  class="formbold-form-input"
                  

                  
                />
              </div>
              <div class="formbold-mb-5">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Practice Name <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_Practice_name"
                  id="phone"
                  placeholder="Practices Name"
                  class="formbold-form-input"
                  
                />
              </div>
              <div class="formbold-mb-5">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Location <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_location"
                  id="phone"
                  placeholder="Location"
                  class="formbold-form-input"
                  
                />
              </div>

              <div class="formbold-mb-5">
                <label for="phone" class="formbold-form-label">
                  {" "}
                  Phone Number <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="user_phonenumber"
                  id="phone"
                  placeholder="Enter your phone number"
                  class="formbold-form-input"
                  
                />
              </div>

              <div>
                <button class="formbold-btn">Become a Partner</button>
              </div>
              {/* <span style={{textAlign:"center"}} className="Thankyou-alert">{done && "thanks for contacting us!" }</span> */}
              {done && thankyou()}
            </form>
          </div>
        </div>
      </div>
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
      <Footer />
    </>
  );
};

export default Partner;
