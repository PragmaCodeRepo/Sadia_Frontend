import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Marriage.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

import SearchButton from "../Button/SearchButton";

const Marriage = () => {
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
            src="https://img.freepik.com/premium-photo/luxury-wedding-concept-wedding-rings-flowers_23-2148652001.jpg?w=1380"
            alt="Picture"
          />
          <div class="overlay">
            <h2> Marriage Counselors in chicagoland area</h2>
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
            Marriage Counselors
            <br />
            <span>
              <p className="summary-text1 mt-3 container ">
                This section is to help you connect with marriage counselors
                to help you resolve conflicts, improve communication, and
                strengthen your relationship.
              </p>
            </span>
          </div>
          <div className=" col">
            {" "}
            <img
              src="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1501.jpg?w=1380&t=st=1677484975~exp=1677485575~hmac=db5cb37a284b33539551e321f27c7637ace4ec036a5e8102113f1fdac1dd6a7c"
              className="image1"
              alt=""
            />{" "}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Marriage;
