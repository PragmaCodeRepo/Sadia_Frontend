import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SearchButton from "../Button/SearchButton";

const Financial = () => {
  //   const [zipcode, setZipcode] = useState("");
  // const navigate = useNavigate();
  // const submitHandler = (e) => {
  //   if (zipcode === "" ) {
  //       notify();

  //       // alert("your response is blank please enter category and your zipcode ");
  //       // window.location.reload();
  //     }
  //     else if (zipcode.length < 5) {
  //       // alert("Zipcode must be 5 digit");
  //       notifyzip();
  //     }
  //     else{
  //   e.preventDefault();
  //   console.log(zipcode);

  //   navigate(`/zipcodeProfile/${zipcode}-Therapist`);
  //     }
  // };
  // const notify = () => toast(" please enter  your zip code");

  // const notifyzip = () => toast("Zipcode must be 5 digits ");
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
            src="https://img.freepik.com/free-photo/mid-shot-woman-therapist-taking-notes-clipboard_23-2148759120.jpg?w=1380&t=st=1677588888~exp=1677589488~hmac=103f50d0efb0639210e365019215dfde4115541bb3c18286bec414236d7fd5e6"
            className="backgroundimg"
          />
          <div class="overlay">
            <h2> Financial Planners in Chicagoland area</h2>
            <p></p>
            {/* bar */}
            {/* <div class="wrap">
              <div class="search">
                <input
                  type="text"
                  class="searchTerm"
                  placeholder="Enter your zip code"
                  onChange={(e) => setZipcode(e.target.value)}
                />
                <button type="submit" class="searchButton">
                  <i class="fa fa-search" onClick={submitHandler}></i>
                </button>
              </div>
            </div> */}
            <div className="SeachButtonforcategories" onClick={submitHandler}>
              <SearchButton />
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <div className="secondsection row">
          <div className="heading1 col  mt-5 ">
            Financial Consultants <br />
            <span className=" ">
              <p className=" summary-text1 mt-3 container">
                This section connects you with financial consultants to help you
                navigate financial issues during your divorce. These
                professionals can help you understand your financial position
                before and after the divorce.
              </p>
            </span>
          </div>
          <div className=" col">
            {" "}
            <img
              src="https://img.freepik.com/free-vector/investor-with-laptop-monitoring-growth-dividends-trader-sitting-stack-money-investing-capital-analyzing-profit-graphs-vector-illustration-finance-stock-trading-investment_74855-8432.jpg?w=1380&t=st=1677654812~exp=1677655412~hmac=e4cee7307e9864e94e05174210444002c3d03e0ebcf44f3266802650746aab12"
              className="image2 mt-5 mb-5 mx-5"
              alt=""
            />{" "}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Financial;
