import React, { useState } from "react";
import Overlay from "react-overlay-component";
import "./OurServices.css";
import Attorneys from "../assets/Attorneys.png";
import Therapist from "../assets/Therapist.png";
import ChildSupport from "../assets/ChildSupport.png";
import Financial from "../assets/Financial.png";
import Mediation from "../assets/Mediation.png";
import Marriage_Counsellor from "../assets/MarriageCounsellor.png";
import SearchBarOverlay from "./Overlay/SearchBarOverlay";

const OurServices = () => {
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
      <div className="ourservices">
        <div className="ourservices-title">
          Our Services
          <br />
          <p className="ourservices-sub-title">
            Find a right resource for all your divorce needs
          </p>
        </div>

        <div class="container-service ">
          {/* <h3 class="title-service">Text fadeIn bottom</h3> */}
          <div className="ourservicecard container">
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img
                class="content-image-service"
                src={Marriage_Counsellor}
                alt=""
              />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Marriage Counselors </h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
            <Overlay
              configs={configs}
              isOpen={isOpen}
              closeOverlay={closeOverlay}
            >
              {" "}
              <SearchBarOverlay />
            </Overlay>
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img class="content-image-service" src={Mediation} alt="" />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Life Coaches </h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img class="content-image-service" src={Therapist} alt="" />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Mediators</h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img class="content-image-service" src={Attorneys} alt="" />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Lawyers</h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img class="content-image-service" src={ChildSupport} alt=" " />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Child Support</h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
            <div
              class="content-service"
              onClick={() => {
                setOverlay(true);
              }}
            >
              <div class="content-overlay-service"></div>
              <img
                class="content-image-service"
                src={Marriage_Counsellor}
                alt=""
              />
              <div class="content-details-service fadeIn-bottom-service">
                <h4 class="content-title-service">Reputation Management</h4>
                <p class="content-text-service">This is a short description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
