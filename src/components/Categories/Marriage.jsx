import React,{useState} from 'react'
import NavBarr from '../NavBarr'
import "./Marriage.css"
import ring from "../../assets/ring.jpg";
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Marriage = () => {
  const [zipcode, setZipcode] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    if (zipcode === "" ) {
        notify();
  
        // alert("your response is blank please enter category and your zipcode ");
        // window.location.reload();
      }
      else if (zipcode.length < 5) {
        // alert("Zipcode must be 5 digit");
        notifyzip();
      }
      else{
    e.preventDefault();
    console.log(zipcode);
   
    navigate(`/zipcodeProfile/${zipcode}-Therapist`);
      }
  };
  const notify = () => toast(" please enter category and your zip code");

  const notifyzip = () => toast("Zipcode must be 5 digits ");
  return (
    <>
    <div >
    <NavBarr/>
    
    <section class="showcase">
    <img src="https://img.freepik.com/premium-photo/luxury-wedding-concept-wedding-rings-flowers_23-2148652001.jpg?w=1380" alt="Picture"/>
  <div class="overlay">
    <h2> Top Marriage Counsellors Near Me!</h2>
    <p>
      
    </p>
    {/* bar */}
<div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="Enter your zip code"  onChange={(e) => setZipcode(e.target.value)}/>
      <button type="submit" class="searchButton">
        <i class="fa fa-search" onClick={submitHandler}></i>
     </button>
   </div>
</div>
  </div>
</section>
{/* 2nd section */}
<div className='secondsection row'>
  <div className='heading1 col  mt-5 '>Marriage Counsellors<br/>
  <span className='summary-text '>Marriage counselors are trained professionals who provide therapy to <br/> couples who areexperiencing difficulties in their marriage or relationship. <br/>The goal of marriage counseling is to help couples resolve conflicts,<br/> improve communication, and strengthen their relationship.

</span></div>
  <div className=' col'> <img src="https://img.freepik.com/free-vector/interview-concept-illustration_114360-1501.jpg?w=1380&t=st=1677484975~exp=1677485575~hmac=db5cb37a284b33539551e321f27c7637ace4ec036a5e8102113f1fdac1dd6a7c" className='image1' alt=""/> </div>
</div>

 <Footer/>
 <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>

    </>
    
    
  )
}

export default Marriage