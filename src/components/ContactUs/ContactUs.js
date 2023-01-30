
import NavBarr from '../NavBarr'
import "./ContactUs.css";
import Contactusbanner from "../../assets/Contactusbanner.png";
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Thankyou from './Thankyou';
import Popup from '../Popup';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";


const ContactUs = () => {
  const form = useRef();
    const [done,setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nk0xn4i', 'template_aqixkz3', form.current, 'r-nootBn4togO_lU9')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

        
    };


  return (
    <>
    <NavBarr/>
    <div className='banner-contact-us'>
     <div className='contactus-banner-image'>
     
      <span className='contactus-banner-text ' >Contact Us</span>
     </div>
      
    </div>


    {/* contactus form */}
    <div className='formbox'>
    <div class="formbold-main-wrapper">
        
  <div class="formbold-form-wrapper">
      
    <form ref={form} onSubmit={sendEmail}>
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="user_name"
          id="name"
          placeholder="Full Name"
          class="formbold-form-input"
          required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="phone" class="formbold-form-label"> Phone Number </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          class="formbold-form-input"
          required
        />
      </div>
      
      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="user_email"
          id="email"
          placeholder="Enter your email"
          class="formbold-form-input"
          required
        />
      </div>
      <div class="formbold-mb-5">
        <label for="phone" class="formbold-form-label"> Your Message</label>
        <input
          type="text"
          name="user_message"
          id="phone"
          placeholder="Enter your message"
          class="formbold-form-input"
          required
        />
      </div>
      

      <div class="formbold-mb-5 formbold-pt-3">
        <label class="formbold-form-label formbold-form-label-2">
          Address Details
        </label>
        <div class="flex flex-wrap formbold--mx-3">
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="user_address"
                id="area"
                placeholder="Enter area"
                class="formbold-form-input"
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="user_city"
                id="city"
                placeholder="Enter city"
                class="formbold-form-input"
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Enter state"
                class="formbold-form-input"
              />
            </div>
          </div>
          <div class="w-full sm:w-half formbold-px-3">
            <div class="formbold-mb-5">
              <input
                type="text"
                name="user_zipcode"
                id="post-code"
                placeholder="Post Code"
                class="formbold-form-input"
              />
            </div>
            
          </div>
          
          
        </div>
        
      </div>
      

      <div>
        <button class="formbold-btn">Submit</button>
      </div>
      {/* <span style={{textAlign:"center"}} className="Thankyou-alert">{done && "thanks for contacting us!" }</span> */}
      {done &&<Thankyou/>}
    </form>
    </div>
  </div>
</div>

     
    </>
  )
}

export default ContactUs