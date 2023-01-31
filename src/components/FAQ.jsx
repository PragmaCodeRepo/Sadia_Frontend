import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./FAQ.css"

const FAQ = () => {
    const navigate = useNavigate();
    const faqHandler=()=>{
        navigate("/contactus")

    }
  return (
    <>
       <main>
    <div class="container">
      <h2 class="faq-heading mt-5 mb-5">Frequently asked questions</h2>

      <details class="faq-card">
        <summary>How to move on after divorce? <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">Join a divorce support group or find a compassionate therapist, and talk about what happened in your marriage," Dr. Gilbertson suggests. Even if therapy isn't your thing, call a friend who understands what you're going through and try to break down your thoughts and feelings. Hearing yourself explain your emotions can help make you feel a little more at ease</span>
      </details>
      <details class="faq-card">
        <summary>How to contact resouces? <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">Firsly you have visit us homepage of website after that you will a searchbar so you have to enter your resouce category and your zipcode after that you will get a bunch of resources so elect any one and contact them</span>
      </details>
      <details class="faq-card">
        <summary>How to manage child after divorce <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">Join a divorce support group or find a compassionate therapist, and talk about what happened in your marriage," Dr. Gilbertson suggests. Even if therapy isn't your thing, call a friend who understands what you're going through and try to break down your thoughts and feelings. Hearing yourself explain your emotions can help make you feel a little more at ease</span>
      </details>
      <details class="faq-card">
        <summary>How to move on after divorce? <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">Join a divorce support group or find a compassionate therapist, and talk about what happened in your marriage," Dr. Gilbertson suggests. Even if therapy isn't your thing, call a friend who understands what you're going through and try to break down your thoughts and feelings. Hearing yourself explain your emotions can help make you feel a little more at ease</span>
      </details>
      <details class="faq-card">
        <summary>How to move on after divorce? <span class="faq-open-icon">+</span></summary>
        <span class="faq-card-spoiler">Join a divorce support group or find a compassionate therapist, and talk about what happened in your marriage," Dr. Gilbertson suggests. Even if therapy isn't your thing, call a friend who understands what you're going through and try to break down your thoughts and feelings. Hearing yourself explain your emotions can help make you feel a little more at ease</span>
      </details>

      <h2 class="faq-heading">Still have questions?</h2>
      <p class="faq-aftertext">If you cannot find answer to your question in our FAQ, you can always<br/>
        <span className='contactus-link-faq' onClick={faqHandler}>contact us</span>. We will answer shortly!
      </p>
    </div>
  </main>
    </>
  )
}

export default FAQ