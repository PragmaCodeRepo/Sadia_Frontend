import React from "react";

import { Link, useNavigate } from "react-router-dom";
import "./FAQ.css";
import Footer from "./Footer";
import NavBarr from "./NavBarr";

const FAQ = () => {
  const navigate = useNavigate();
  const faqHandler = () => {
    navigate("/contactus");
  };
  return (
    <>
      <NavBarr />
      <main>
        <div class="container">
          <h2 class="faq-heading mt-5 mb-5">Frequently asked questions</h2>

          <details class="faq-card">
            <summary>
              How to move on after divorce? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">coming soon</span>
          </details>
          <details class="faq-card">
            <summary>
              How to contact resouces? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">coming soon</span>
          </details>
          <details class="faq-card">
            <summary>
              How to manage child after divorce{" "}
              <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">coming soon</span>
          </details>
          <details class="faq-card">
            <summary>
              How to move on after divorce? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">coming soon</span>
          </details>
          <details class="faq-card">
            <summary>
              How to move on after divorce? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">coming soon</span>
          </details>

          <h2 class="faq-heading">Still have questions?</h2>
          <p class="faq-aftertext">
            If you cannot find an answer to your question in FAQ's, you can
            always
            <br />
            <span className="contactus-link-faq" onClick={faqHandler}>
              contact us
            </span>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default FAQ;
