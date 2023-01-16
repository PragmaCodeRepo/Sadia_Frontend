import React,{useState} from 'react';
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
    <div className='se'>
        <div className="row" id="searchbaroverlay">
          <input
            type="number"
            placeholder="  Enter your zip code"
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
              Select your Category
            </option>

            <option value="Marriage">Marriage</option>
            <option value="Life Coaches">Life Coaches</option>
            <option value="Child support services">
              Child support services
            </option>
            <option value="Therapist Services">Therapist Services</option>
            <option value="Financial analyses">Financial analyses</option>
            <option value="Attorneys"> Attorneys</option>
            <option value="Mediation services"> Mediation services</option>
          </select>

          <div className="col ">
            <button type="submit" id="search-buttonoverlay" onClick={submitHandler}>
              <img src={search_icon} alt="" style={{ marginRight: "2rem" }} />
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default SearchBarOverlay