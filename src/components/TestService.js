import React, { useState } from "react";
import Overlay from "react-overlay-component";
import "./TestService.css";
import Marriage_Counsellor from "../assets/MarriageCounsellor.png";
import Lawyers from "../assets/Attorneys.png";
import ChildSupport from "../assets/ChildSupport.png";
import Mediation from "../assets/Mediation.png";
import LifeCoaches from "../assets/LifeCoach_new.jpg";
import Financial from "../assets/Financial.png";
import SearchBarOverlay from "./Overlay/SearchBarOverlay";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TestService = () => {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
  };
  return (
    <>
      <div className="ourtestservices-title">
        Our Services
        <br />
        {/* <p className="ourtestservices-sub-title">
            Find a right resource for all your divorce needs
          </p> */}
      </div>

      <div className="container">
        <div className="row testservicerow" style={{ marginTop: "1rem" }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div
              className="card testcard mt-3"
              // onClick={() => {
                
              //   setOverlay(true);
              // }}
              onClick={handleShow}
            >
              <img
                className="card-img"
                src={Marriage_Counsellor}
                alt="Bologna"
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Marriage Counselors </h4>
                {/* <h6 className="card-subtitle mb-2">Top-rated counsellors are here </h6> */}
                <p className="card-text"> </p>
                <div className="link d-flex"></div>
              </div>
            </div>
            {/* <Overlay
            className='over-lay'
              configs={configs}
              isOpen={isOpen}
              closeOverlay={closeOverlay}
              
            >
              {" "}
              <SearchBarOverlay />
              <Bar/>
            </Overlay> */}
            <Modal show={show} onHide={handleClose} style={{marginTop:"17%",marginLeft:"-6rem"}} >
        
        <Modal.Body style={{backgroundColor:"white", width:"54rem",height:"10rem"}}><div style={{marginTop:"30px",marginLeft:"10px"}}> <SearchBarOverlay/></div></Modal.Body>
        
      </Modal>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div
              className="card testcard mt-3"
              // onClick={() => {
              //   setOverlay(true);
              // }}
              onClick={handleShow}
            >
              <img className="card-img" src={Lawyers} alt="Bologna" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Lawyers</h4>
                {/* <h6 className="card-subtitle mb-2">Top-rated counsellors are here </h6> */}
                <p className="card-text"> </p>
                <div className="link d-flex"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div
              className="card testcard mt-3"
              // onClick={() => {
              //   setOverlay(true);
              // }}
              onClick={handleShow}
            >
              <img className="card-img" src={ChildSupport} alt="Bologna" />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <h4 className="card-title">Child Support</h4>
                {/* <h6 className="card-subtitle mb-2">Top-rated counsellors are here</h6> */}
                <p className="card-text"> </p>
                <div className="link d-flex"></div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="row ">
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div
                  className="card testcard mt-4"
                  // onClick={() => {
                  //   setOverlay(true);
                  // }}
                  onClick={handleShow}
                >
                  <img className="card-img" src={Mediation} alt="Bologna" />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Mediators </h4>
                    {/* <h6 className="card-subtitle mb-2">Top-rated Mediators are here</h6> */}
                    <p className="card-text"> </p>
                    <div className="link d-flex"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div
                  className="card testcard mt-4"
                  // onClick={() => {
                  //   setOverlay(true);
                  // }}
                  onClick={handleShow}
                >
                  <img className="card-img" src={LifeCoaches} alt="Bologna" />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Life Coaches </h4>
                    {/* <h6 className="card-subtitle mb-2">Top-rated LifeCoaches are here</h6> */}
                    <p className="card-text"> </p>
                    <div className="link d-flex"></div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                <div
                  className="card testcard mt-4"
                  // onClick={() => {
                  //   setOverlay(true);
                  // }}
                  onClick={handleShow}
                >
                  <img
                    className="card-img"
                    src="https://thumbs.dreamstime.com/b/financial-plan-25087121.jpg"
                    alt="Bologna"
                  />
                  <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 className="card-title">Financial Planning</h4>
                    {/* <h6 className="card-subtitle mb-2">Top-rated Financial Planners are here </h6> */}
                    <p className="card-text"> </p>
                    <div className="link d-flex"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestService;
