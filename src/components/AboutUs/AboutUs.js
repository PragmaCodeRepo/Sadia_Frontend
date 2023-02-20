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

                <span className="telephone-icon">
                  <BsFillTelephoneFill /> &nbsp;+1 331-707-2779{" "}
                </span>
                <span className="telephone-icon mb-5">
                  {" "}
                  <AiTwotoneMail /> &nbsp;info@pragma.how
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
        <div className="our-mission-content mb-5">
          <div className="our-mission-heading">Our Mission</div>
          <div className="our-mission-main-content">
            Our mission is to help our clients have a clear picture of their
            full divorce process.
            <br /> This means they can turn to us to guide them through every
            step of their divorce journey
          </div>
        </div>

        <div className="aboutus-content">
          <div className="aboutus-content-heading mb-3">About Us</div>
          <div className="aboutus-more-content">
            {/* Pragma is a one stop platform and services solution to assist in the
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
            services as we grow Pragma. */}
            Pragma is founded by two friends who went through their own divorce
            and realized that the divorce process in the United States is
            broken. One key problem with the current system is lack of
            transparency to allow families to make informed decisions. Most
            families seeking separation and divorce struggle with where to start
            and whom to turn for some advice. Depending on who they turn to
            first can truly set the course for the entire journey that can be
            costly delivering suboptimal outcomes. We work with our clients to
            empower them with knowledge to get the confidence for navigating
            their divorce. Our solutions only provide a team of professionals
            that meet the highest standards in professionalism, ethics, and
            services delivery.
          </div>
        </div>
        {/* 4th page  */}
         <div className="Meet-the team ">
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
          </div> 
         </div> 
      </div>
      <div className="aboutus-footer ">
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
