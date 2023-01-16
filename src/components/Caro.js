import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsStarFill } from "react-icons/bs";
import {RiDoubleQuotesL} from "react-icons/ri"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import "./Caro.css";

const Caro = () => {
  return (
    <>
    
    <div className="testimonial-title">Testimonials</div>
     <div className="container">
      <Swiper
        style={{ height: "550px" }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content">
          <div className="doublequote"> <RiDoubleQuotesL/></div>
          <br/>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              JohnMiles
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              Pranjal
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <div className="doublequote"> <RiDoubleQuotesL/></div>
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              Manish
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              yashu
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /><BsStarFill /><BsStarFill /><br/>
              JohnMiles
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              vish
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>

            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              nandita
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              pranjal
              
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="content">
        <div className="doublequote"> <RiDoubleQuotesL/></div>
            I was going through a difficult time in my life with a dysfunctional
            marriage and Mark helped me to make sense of my situation.
            <br />
            I attended 5 sessions and having Mark as my therapist helped me to
            lift a huge mental weight off myself as he was very easy to talk to.
            <br />
            He also sent me emails to provide a summary of what we had discussed
            and some activities to help me think and progress.
            <br /> Would gladly recommend him to others which is why I am happy
            to write this.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="content-name">
            <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /><br/>
              vishal
              
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Caro;
