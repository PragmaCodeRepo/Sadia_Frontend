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
            What is divorce mediation? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">Divorce mediation is a process in which a neutral third party, the mediator, helps couples negotiate and reach agreements on various aspects of their divorce, such as property division, child custody, and spousal support.</span>
          </details>
          <details class="faq-card">
            <summary>
            What are the benefits of divorce mediation? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">Some benefits of divorce mediation include lower costs, quicker resolution, reduced conflict, and more control over the outcome of the divorce.</span>
          </details>
          <details class="faq-card">
            <summary>
            What is a collaborative divorce?{" "}
              <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler"> A collaborative divorce is a process in which both spouses work with a team of professionals, including attorneys, financial experts, and mental health professionals, to negotiate a divorce settlement outside of court.</span>
          </details>
          <details class="faq-card">
            <summary>
            What is a parenting plan? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">A parenting plan is a written agreement that outlines how divorced or separated parents will share custody and make decisions about their children's upbringing.</span>
          </details>
          <details class="faq-card">
            <summary>
            What is child support? <span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">Child support is a court-ordered payment that a non-custodial parent must make to the custodial parent to help cover the costs of raising their children.</span>
          </details>
          <details class="faq-card">
            <summary>
            How is child support calculated?<span class="faq-open-icon">+</span>
            </summary>
            <span class="faq-card-spoiler">Child support is typically calculated based on a formula that takes into account factors such as each parent's income, the number of children, and the amount of time each parent spends with the children.</span>
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
