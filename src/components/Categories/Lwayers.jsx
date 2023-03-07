import React, { useState } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SearchButton from "../Button/SearchButton";

const Lwayers = () => {
  
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
            src="https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30462.jpg?w=1380&t=st=1677649655~exp=1677650255~hmac=3f6f96e141b492abc4827f13eba4d0cdba8a5ee1607ae22f6c687300e0db24fc"
            className="backgroundimg"
          />
          <div class="overlay">
            <h2>  Lawyers  in Chicagoland area</h2>
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
            Lawyers
            <br />
            <span className=" ">
              <p className=" summary-text1 mt-3 container ">
                This section is to guide you navigate through options for the
                legal representation for your divorce proceedings.During your
                first consult, be sure to ask about issuessuch as property
                division, child custody and support, and alimony. In addition,
                ask about the divorce process, steps involved in obtaining a
                divorce and different types of divorce, such as contested and
                uncontested divorce.
              </p>
            </span>
          </div>
          <div className=" col">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/closeup-shot-person-writing-book-with-gavel-table_181624-57173.jpg?w=1380&t=st=1677650332~exp=1677650932~hmac=00297a2d612426a758dc1c56e950ac02f6e17e562eb7461819635940e2fd1504"
              className="image2 mt-5 mb-5 mx-5 "
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

export default Lwayers;
