import React from "react";
// import Button from "react-bootstrap/Button";
import { Card, Nav, Button } from "react-bootstrap";
import "./AllProfiles.css";
import { BsStarFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BsBook } from "react-icons/bs";

const AllProfiles = ({
  id,
  image,
  first_name,
  last_name,
  practice_names,
  designation,
  zip_code,
  address,
  speciality,
  onProfileShow,
  education,
  city,
  state,
  rating,
}) => {
  return (
    //     <>
    //       <div classNameName="profile-view ">
    //   {/* <h3 classNameName="title--profile">Text fadeIn bottom</h3> */}
    //   <div classNameName="content--profile">

    //       <div classNameName="content-overlay--profile" onClick={onProfileShow} ></div>
    //       <img classNameName="content-image--profile" src={image} alt=" "  />
    //       <div classNameName="content-details--profile fadeIn-bottom--profile">
    //         <h4 classNameName="content-title--profile">{first_name} {last_name}</h4>
    //         <p classNameName="content-text--profile">{address} {speciality}</p>
    //       </div>

    //   </div>
    // </div>
    //     </>
    <>
      <div
        className="card2 card mb-2 gradient-border"
        style={{
          maxWidth: "1200px",
          width: "1100px",
          height: "200px",
          background: "transparent",
          borderTop: "transparent",
          borderLeft: "transparent",
          borderRight: "transparent",
        }}
        onClick={onProfileShow}
      >
        <div className="row g-0 align-items-center">
          <div className="col-sm-4 col-5">
            <img
              src={image}
              className="img-fluid rounded-start"
              style={{
                borderRadius: "50%",
                height: "164px",
                marginTop: "-5px",
                marginLeft: "-11rem",
              }}
              alt="..."
            />
          </div>
          <div className="col-sm-8 col-7">
            <div className="card-body" style={{ marginLeft: "-20rem" }}>
              {/* <h5 className="card-title">{first_name}</h5> */}
              <p className="card-text">
                <p className="profile-title">
                  {first_name} {last_name},{designation}
                </p>{" "}

                
    
  
                
                <p className="rating">
                  
                  <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill />{" "}
                  &nbsp; (review 625){" "}
                </p>
                <p className="profile-speciality">
                  {speciality} <br />{" "}
                  <small className="text-muted" style={{ fontSize: "13px" }}>
                    <BsBook /> {education}
                  </small>
                </p>
                <p className="profile-city">
                  {" "}
                  <MdLocationOn /> {city},{state}
                </p>
              </p>
              {/* <p className="card-text d-none d-sm-block"><small className="text-muted"></small></p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProfiles;
