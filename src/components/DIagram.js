import React from "react";
import "./Diagram.css";
import image from "../assets/Vector.png";
import image1 from "../assets/organization-chart.png";
import image2 from "../assets/Maskgroup.png";
import Lineindicator from "../assets/LineIndicator.png";
import Lineindicator2 from "../assets/Lineindicator2.png";

const Diagram = () => {
  return (
    <>
      <div className="Howwework">
        <div className="titleHowwework ">How does Pragma work?</div>
        <div className="three-circle">
          <div className="first-circle">
            <div>
              <img
                src={image}
                alt=""
                className="svg-image"
                style={{ marginLeft: "27px", marginTop: "21px" }}
              />
            </div>

            <img src={Lineindicator} alt=" " className="LineIndicator1" />
          </div>
          <div className="second-circle">
            <div>
              <img src={image1} alt="" className="svg-image" />
            </div>
            <img src={Lineindicator2} alt=" " className="LineIndicator2" />
          </div>
          <div className="third-circle">
            <div>
              <img src={image2} alt="" className="svg-image" />
            </div>
          </div>
        </div>
        <span className="search">
          <span className="seachresouces">Search resource</span>
          <span>Contact resource</span>
          <span> Peace of mind</span>
        </span>
      </div>
    </>
  );
};

export default Diagram;
