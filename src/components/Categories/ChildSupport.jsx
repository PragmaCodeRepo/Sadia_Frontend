import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ChildSupport = () => {
  const [zipcode, setZipcode] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    if (zipcode === "") {
      notify();

      // alert("your response is blank please enter category and your zipcode ");
      // window.location.reload();
    } else if (zipcode.length < 5) {
      // alert("Zipcode must be 5 digit");
      notifyzip();
    } else {
      e.preventDefault();
      console.log(zipcode);

      navigate(`/zipcodeProfile/${zipcode}-Therapist`);
    }
  };
  const notify = () => toast(" please enter  your zip code");

  const notifyzip = () => toast("Zipcode must be 5 digits ");
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
            <h2> Top Child Support services Near Me!</h2>
            <p></p>
            {/* bar */}
            <div class="wrap">
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
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <div className="secondsection row">
          <div className="heading1 col  mt-5 ">
            Child Support Services
            <br />
            <span className=" ">
              <p className=" summary-text1 mt-3 mx-5">
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
