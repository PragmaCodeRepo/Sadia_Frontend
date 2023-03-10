import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search_icon from "../../assets/search_icon.png";
import "./SearchBarOverlay.css";

const SearchBarOverlay = () => {
  const navigate = useNavigate();
  const [zipcode, setZipcode] = useState("");
  const [dropdown, setdropdown] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(zipcode);
    console.log(dropdown);
    navigate(`/zipcodeProfile/${zipcode}-${dropdown}`);
  };
  return (
    <div className="se">
      <div className="row" id="searchbaroverlay">
        <input
          type="text"
          inputmode="numeric"
          placeholder="   zip code"
          onChange={(e) => setZipcode(e.target.value)}
          className="col"
          id="zipcode-boxoverlay"
        ></input>
        <select
          name="dropdown"
          onChange={(e) => setdropdown(e.target.value)}
          className="col"
          id="category-dropdownoverlay"
          required
        >
          <option value="select" selected>
            Category
          </option>

          <option value="Life Coach">Life Coach</option>
          <option value="Therapist">Therapist</option>
          <option value="Child specialist">Child specialist</option>
          <option value="Divorce Attorney">Divorce Attorney </option>
          <option value="Divorce Mediator">Divorce Mediator</option>
          <option value="Financial Specialist"> Financial Specialist</option>
        </select>

        <div className="col ">
          <button
            type="submit"
            id="search-buttonoverlay"
            onClick={submitHandler}
          >
            <img src={search_icon} alt="" style={{ marginRight: "2rem" }} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarOverlay;
