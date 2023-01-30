import React from 'react'
import "./Thankyou.css";
import NavBarr from "../NavBarr";
import Footer from '../Footer';

const Thankyou = () => {
  return (
    <>
    <NavBarr/>
    <section class="login-main-wrapper" >
      <div class="main-container">
          <div class="login-process">
              <div class="login-main-container">
                  <div class="thankyou-wrapper">
                      <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" className='thankyou-image' /></h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <a href="/">Back to home</a>
                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
    </section>
    <Footer/>

    </>
  )
}

export default Thankyou