import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SearchButton from "../Button/SearchButton";

const ChildSupport = () => {
  
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
            src="https://img.freepik.com/free-photo/holding-hands_1112-1468.jpg?w=996&t=st=1677652131~exp=1677652731~hmac=6f944a844793c492424f4c45a40fa1d4a6cfaf2167f61170b85d236dcdf43337"
            className="backgroundimg"
          />
          <div class="overlay">
            <h2>  Child Support services  in Chicagoland area </h2>
            <p></p>
            {/* bar */}
            <div className="SeachButtonforcategories" onClick={submitHandler}>
              <SearchButton />
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <div className="secondsection row">
          <div className="heading1 col  mt-5 ">
            Child Support Services
            <br />
            <span className=" ">
              <p className=" summary-text1 container mt-3 ">
                This section provides you information on various programs And
                services offered by the government and private organizations to
                help you provide financial support for your children.
              </p>
            </span>
          </div>
          <div className=" col">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/happy-mother-enjoying-while-spending-time-with-her-small-son-home_637285-10990.jpg?w=1380&t=st=1677651940~exp=1677652540~hmac=8c56824a133f4523316339599a7e55d97866efc92166304f41fe38ba90f3e3be"
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

export default ChildSupport;
