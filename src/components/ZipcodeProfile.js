import React, { useContext, useState, useEffect } from "react";
import ProfileContext from "../components/context/ProfileContext";
import { useNavigate } from "react-router-dom";
import AllProfiles from "./AllProfiles";
import "./ZipcodeProfile.css";
import { useParams } from "react-router-dom";
import NoDataFound from "./NoDataFound";
import Popup from "./Popup";
import NavBarr from "./NavBarr";
import Footer from "./Footer";
import ReactPaginate from "react-paginate";

const Profile = () => {
  const { profiles } = useContext(ProfileContext);
  const { code } = useParams();
  const zipcode = code.split("-")[0];
  const speciality = code.split("-")[1];
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const checkProfile = (profile) => {
    if (
      profile["zip_code"] === +zipcode &&
      profile["speciality"] === speciality
    ) {
      return true;
    } else return false;
  };

  const navigate = useNavigate();

  const profileShowHandler = (item) => {
    navigate(`/profile/${item.id}`);
  };
  const data = profiles.filter(checkProfile);
  const displayUsers = data
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((curElem) => {
      return (
        <div className=" text-center outcome container">
          <AllProfiles
            key={curElem.id}
            id={curElem.id}
            image={curElem.image}
            first_name={curElem.first_name}
            last_name={curElem.last_name}
            speciality={curElem.speciality}
            designation={curElem.designation}
            address={curElem.address}
            zip_code={curElem.zip_code}
            practices_names={curElem.practices_names}
            city={curElem.city}
            state={curElem.state}
            rating={curElem.rating}
            introduction={curElem.introduction}
            education={curElem.education}
            onProfileShow={profileShowHandler.bind(null, curElem)}
          />
        </div>
      );
    });
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <NavBarr />
      <div style={{ background: "#f3f7f9" }}>
        {data.length === 0 && <NoDataFound />}
        {/* pagination */}
        {data.length !== 0 && (
          <div class="slider">
            <div class="caption">
              Top-Rated and Highly Recommended&nbsp;
              <div class="text-box">
                <div>Therapist</div>
                <div>Lawyers</div>
                <div>Mediatators</div>
                <div>Financial</div>
                <div>ChildCare </div>
                <div>LifeCoaches </div>
              </div>
            </div>
          </div>
        )}

        {data.length !== 0 && displayUsers}

        {data.length !== 0 && (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        )}

        {/* <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}> <NoDataFound/></Overlay> */}
        <Footer />
      </div>
    </>
  );
};

export default Profile;
