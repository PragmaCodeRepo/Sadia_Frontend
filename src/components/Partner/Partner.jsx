import React from 'react'
import "./Partner.css"

const Partner = () => {
  return (
    <>
        <header class="hero">
  <div class="hero-inner">
    
    <div class="hero-text">
      <h2>Become a partner, join the community pragma</h2>
      <p>Donec lobortis magna at ligula tristique maximus. Suspendisse lacinia ligula lacus. Nunc id risus a dui bibendum finibus tincidunt eu magna. Suspendisse a dictum neque. Suspendisse sit amet diam et libero posuere pharetra. Sed vel magna nec dolor aliquam lobortis vitae id ante.</p>
      <form class="hero-form" action="/">
        <div class="hero-form-input">
          <input class="hero-email-input" type="email"  placeholder="Email Address" required/>
          <input class="hero-form-submit" type="submit"  value="Submit"/>
        </div>        
      </form>
    </div>
    
    <div class="hero-image">
     
      <img src="https://assets.codepen.io/495197/undraw_Newsletter_re_wrob.svg" />
    </div>
    
  </div>
</header>
    </>
  )
}

export default Partner