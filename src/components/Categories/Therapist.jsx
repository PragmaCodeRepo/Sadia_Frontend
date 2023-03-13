import React, { useState, useEffect } from "react";
import NavBarr from "../NavBarr";
import "./Therapist.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SearchButton from "../Button/SearchButton";

const Therapist = () => {
  const [zipcode, setZipcode] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    navigate(`/zipcodeProfile/60290-Therapist`);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h2> Therapists in Chicagoland area</h2>
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
            Therapists
            <br />
            <span className=" ">
              <p className=" summary-text1 mt-3 container">
                This section provides information on mental health professionals
                who can help you navigate the emotional and psychological
                challenges of divorce. A divorce therapist can help with the
                following: <ul> <li> Help manage the emotional challenges of divorce,
                including grief, anger, and depression.</li> <li>Assist in developing
                effective communication skills to help navigate difficult
                conversations with spouse or co-parent.</li> <li> Provide guidance and
                support to you as a parent as you navigate the challenges of
                co-parenting.</li>   <li>Assist in developing strategies for managing
                conflict and negotiating settlements during the divorce process.</li> 
                <li>Help develop a plan for moving forward and rebuilding lives
                after divorce.</li>
                 
                </ul>
              </p>
            </span>
          </div>
          <div className=" col mt-5 mb-5 mx-5">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/medium-shot-woman-sitting-couch_23-2149927564.jpg?w=1380&t=st=1677589483~exp=1677590083~hmac=35b68de69a5806769fa59bd310324adcd0b1bad5cceb5d3d920e8e712cb7c601"
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

export default Therapist;
