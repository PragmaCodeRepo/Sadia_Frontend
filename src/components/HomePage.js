import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Footer from "./Footer";
import TestService from "./TestService";
import NavBarr from "./NavBarr";
import { RiArrowDropDownLine } from "react-icons/ri";
import VideoPlayer from "./Video/VideoPlayer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";


const HomePage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const navigate = useNavigate();
  const [zipcode, setZipcode] = useState("");
  const [dropdown, setdropdown] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (zipcode === "" || dropdown === "Select Category") {
      notify();

      // alert("your response is blank please enter category and your zipcode ");
      // window.location.reload();
    } else if (zipcode.length < 5) {
      // alert("Zipcode must be 5 digit");
      notifyzip();
    } else navigate(`/zipcodeProfile/${zipcode}-${dropdown}`);
  };
  const notify = () =>
    toast(" please enter category and your zip code");

  const notifyzip = () => toast("Zipcode must be 5 digits ");

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
            <span className="double-shade">Navigate</span> divorce together{" "}
            <br />
            <span>
              {" "}
              towards a <span className="double-shade"> better</span>{" "}
            </span>{" "}
            <br />
            <span>
              {" "}
              <span className="double-shade">tomorrow</span>{" "}
            </span>
            <br />{" "}
            
          </div>
        </div>

        <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

        <div class="wrapper">
          <div class="search_box">
            <div class="dropdown">
              <select
                name="dropdown"
                onChange={(e) => setdropdown(e.target.value)}
                required
              >
                <option value="select" selected>
                  Select Category
                </option>

                <option value="Life Coach">Life Coach</option>
                <option value="Therapist">Therapist</option>

                <option value="Child Specialist ">Child Specialist </option>
                <option value="Divorce Attorney">Divorce Attorney</option>
                <option value="Divorce Mediator"> Divorce Mediator</option>
                <option value="Financial Specialist">
                  {" "}
                  Financial Specialist
                </option>
              </select>
              <RiArrowDropDownLine />
            </div>

            <div class="search_field">
              <input
                type="text"
                inputmode="numeric"
                class="input"
                placeholder="Zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                required
              />
              <i class="fas fa-search" onClick={submitHandler}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Our services section */}

      {/* <OurServices /> */}
      <TestService />

      {/* How Pragma Works */}
      {/* <Diagram /> */}
      <VideoPlayer />

      {/* Testimonial Section */}

      {/* <Caro /> */}
      <Footer />
      

      {/* <AxiosTest/> */}
      {/* custom alert */}
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

      {/* Overlay testing */}

      {/* <NoDataFound/> */}
      {/* <Popup /> */}
    </>
  );
};

export default HomePage;
