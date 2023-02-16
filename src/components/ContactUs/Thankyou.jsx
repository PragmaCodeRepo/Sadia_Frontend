import React,{useEffect} from "react";
import "./Thankyou.css";
import NavBarr from "../NavBarr";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
const Thankyou = () => {
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
 
  },[])
  return (
    <>
      <NavBarr />

      <div class="content" style={{ height: "10rem" }}>
        <div class="wrapper-1 ">
          <div class="wrapper-2">
            {/* <h1>Thank you !</h1> */}
            <p>Thankyou for contacting us.We will contact you within 24 hour. </p>
            {/* <p>you should receive a confirmation email soon </p> */}
            <Link to="/">
              <button class="go-home">Home</button>
            </Link>
          </div>
        </div>
      </div>

      <div style={{height:"20rem"}}></div><Footer/>

      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script|Source+Sans+Pro"
        rel="stylesheet"
      ></link>
    </>
  );
};

export default Thankyou;
