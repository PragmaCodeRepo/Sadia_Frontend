import React from "react";
import "./AboutUs.css";
import NavBarr from "../NavBarr";
import Aboutusvector from "../../assets/Illustration.png";
import Img1 from "../../assets/image245.png";
import Img2 from "../../assets/image246.png";
import Img3 from "../../assets/image247.png";
import Img4 from "../../assets/image248.png";
import Img5 from "../../assets/image249.png";
import anjit_sir from "../../assets/anjit_sir.png";
import sadia_mam from "../../assets/sadia_mam.png";
import Footer from "../Footer";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

const AboutUs = () => {
  return (
    <>
      <NavBarr />
      <div className="container mt-5">
        {/* 1st part */}
        <div className="aboutus1stpage">
          {/* left side */}
          <div className="aboutus1page-left">
            <div className="title-box">
              <div className="pragma-title-aboutus"> Pragma</div>
              <div className="pragma-subtitle-aboutus">
                <span>A Solution Designed for the</span>{" "}
                <span>Divorce Process</span>
              </div>
              <div className="pragma-smalltitle-aboutus">
                <span>
                  Our solutions are designed to bring together a team of divorce
                  professionals that hold the highest standards in ethics and
                  services delivery
                </span>
                <br />
                {/* <div className="map-aboutus"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.6461963837514!2d-88.34103548426374!3d41.8143815773777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ee4bc0c771b93%3A0xe86874f5bc4483be!2s472%20Mount%20Ct%2C%20North%20Aurora%2C%20IL%2060542%2C%20USA!5e0!3m2!1sen!2sin!4v1673873081924!5m2!1sen!2sin" ></iframe></div>  */}
                <span className="telephone-icon">
                  <BsFillTelephoneFill /> &nbsp;630-926-0774{" "}
                </span>
                <span className="telephone-icon">
                  {" "}
                  <AiTwotoneMail /> &nbsp;Sadianazir@yahoo.com
                </span>
              </div>
            </div>
          </div>

          {/* Right side */}

          <div className="aboutus1page-right mt-5">
            <img src={Aboutusvector} alt="" className="aboutusvectorimg" />
          </div>
        </div>
        {/* 2nd page */}

        <div className="aboutus-content">
          <div className="aboutus-content-heading mb-3">About Us</div>
          <div className="aboutus-more-content">
            Pragma is a one stop platform and services solution to assist in the
            divorce process. <br />
            Pragma is a marketplace of highly rated services provider and
            matching them with the customers and providing the information about
            the process and level of resources available. Like dating and
            marriage, separation and divorce is a life changing experience but
            very unlike dating/marriage, couples growing apart can have a
            long-term negative impact on the couple involved as well as on their
            near and dear ones. Most couples seeking separation and divorce
            struggle with where to start and whom to turn to seek advise.
            Depending on who and where they turn to first can truly set the
            course for the entire journey that is filled with uncertainty of the
            process resulting in uninformed decisions that can be costly to the
            involved parties delivering suboptimal outcomes. Our mission is to
            develop a one-stop platform solution with relevant content, flexible
            for users to navigate and scalable to add additional content and
            services as we grow Pragma.
          </div>
        </div>
        {/* 4th page  */}
        {/* <div className="Meet-the team ">
          <div className="Meettheteam-title mt-5">Meet The Team</div>
          <div className="ajnit-sir mt-5">
            <div className="anjit-sir-pic-block">
              <img src={anjit_sir} alt="" className="anjit-sir-pic" />
            </div>
            <div className="anjit-sir-bio ">
              <div className="anjit-sir-bio-conent">
                Anjit is an executive leader with over 20 years of advisory
                experience.  Anjit has an undergraduate and masters in
                mechanical engineering and PHD in International Economics. Anjit
                keenly follows business transformations, business model changes,
                supply chain optimization as well as building high performance
                teams
              </div>
              <div className="anjit-sir-name"> Dr Anjit Bajwa</div>
              <div className="anjit-sir-sub-title">
                Founder and Chief Executive Officer
              </div>
            </div>
          </div>
          <div className="sadia-mam ">
            <div className="sadia-mam-bio">
              <div className="sadia-mam-bio-conent">
                Sadia is a business leader with over 20 years of experience in
                strategy, finance, systems, technology, and operations.
                <br />
                Sadia has a degree in Finance and masters in International Tax.
                <br />
                Sadia has a background in executive leadership, team building,
                process improvements and change management.
              </div>
              <div className="sadia-mam-name mt-5"> Sadia Nazir</div>
              <div className="sadia-mam-sub-title ">
                Founder and Chief Executive Officer
              </div>
            </div>
            <div className="sadia-mam-pic-block">
              <img src={sadia_mam} alt="" className="sadia-mam-pic" />
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <div className="aboutus-footer ">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
