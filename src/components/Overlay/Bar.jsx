import React,{useState} from 'react'
import "./Bar.css"
import search_icon from "../../assets/search_icon.png";
import { useNavigate } from "react-router-dom";

const Bar = () => {
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
    <>
        <div class="wrapper">
          <div class="search_box">
            <div class="dropdown">
              {/* <div class="default_option">All</div>  
            <ul>
              <li>All</li>
              <li>Recent</li>
              <li>Popular</li>
            </ul> */}
              <select
                name="dropdown"
                onChange={(e) => setdropdown(e.target.value)}
                // className=""
                // id="category-dropdown"
                required
              >
                <option value="select" selected>
                  Select Category
                </option>

                <option value="Life Coach">Life Coach</option>
                <option value="Therapist">Therapist</option>
               
                <option value="Child Specialist ">Child Specialist </option>
                <option value="Divorce Attorney">Divorce Attorney</option>
                <option value="Divorce Mediator"> Divorce Mediator</option>
                <option value="Financial Specialist"> Financial Specialist</option>
              </select>
              
            </div>

            <div class="search_field">
              <input
                type="text" 
                inputmode="numeric"
                class="input"
                placeholder="Zipcode"
                onChange={(e) => setZipcode(e.target.value)}
                required
              />
              <i class="fas fa-search" onClick={submitHandler}></i>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Bar