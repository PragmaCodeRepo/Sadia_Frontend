import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SearchButton from "../Button/SearchButton";

const Mediation = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate(`/zipcodeProfile/60290-Therapist`);
  };

  return (
    <>
      <div>
        <NavBarr />

        <section class="showcase">
          <img
            src="https://img.freepik.com/free-photo/welcome-tell-us-something-about-your-work-experience_637285-8931.jpg?w=1380&t=st=1677737737~exp=1677738337~hmac=cfa7244826b27c900e13d4a321ec2773d5d1586483088386d791a7a212c2e01c"
            className="backgroundimg"
          />
          <div class="overlay">
            <h2> Mediation Services in Chicagoland area</h2>
            <p></p>
            {/* bar */}
            <div className="SeachButtonforcategories" onClick={submitHandler}>
              <SearchButton />
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <div className="secondsection row">
          <div className="heading1 col  mt-5 container">
            Mediators
            <br />
            <span className=" ">
              <p className=" summary-text1 container mt-3">
                This section provides you information on mediators in your area.
                A mediator is appropriate in situations where parties have
                ongoing relationships, want to preserve privacy, or are looking
                for a mutually beneficial solution. This route to divorce can
                provide significant cost and time savings.
              </p>
            </span>
          </div>
          <div className=" col">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/three-business-professionals-working-together-office_23-2147857317.jpg?w=1380&t=st=1677737984~exp=1677738584~hmac=e2ec9cba5f73f06b53dcb11d1deb23bde279b56154c8017593a5e315c23848ef"
              className="image2 mt-5 mb-5 "
              alt=""
            />{" "}
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
      </div>
    </>
  );
};

export default Mediation;
