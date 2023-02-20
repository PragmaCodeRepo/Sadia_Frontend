import React from "react";
import "./NoDataFound.css";
import image from "../assets/NoDataFound.png";

const NoDataFound = () => {
  return (
    <>
      <div class="empty-state">
        <div class="empty-state__content">
          <div class="empty-state__icon">
            <img src={image} alt="" className="NoDataFoundImage" />
          </div>
          <div class="empty-state__message">Coming soon .</div>
          <div class="empty-state__help">
            We are working on adding resources to your location.
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default NoDataFound;
