import React from "react";
// import "./CardTesting.css"

const CardTesting = () => {
  return (
    <>
      <div class="container">
        <h3 class="title">Text fadeIn bottom</h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img
              class="content-image"
              src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
            />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default CardTesting;
