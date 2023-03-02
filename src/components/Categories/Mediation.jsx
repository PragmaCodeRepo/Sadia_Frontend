import React,{useState} from 'react'
import NavBarr from '../NavBarr'
import "./Therapist.css"
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Mediation = () => {
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
    <img src="https://img.freepik.com/free-photo/welcome-tell-us-something-about-your-work-experience_637285-8931.jpg?w=1380&t=st=1677737737~exp=1677738337~hmac=cfa7244826b27c900e13d4a321ec2773d5d1586483088386d791a7a212c2e01c" className='backgroundimg'/>
  <div class="overlay">
    <h2> Top Mediation Services Near Me!</h2>
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
  <div className='heading1 col  mt-5 '>Mediation<br/>
  <span className=' '>
  <p className=' summary-text1 mt-3'>Benefits of mediation. A discussion of the benefits of mediation over traditional litigation, including cost savings, time savings, and the preservation of relationships.

When to use mediation. A guide to when mediation is appropriate, including situations where parties have ongoing relationships, want to preserve privacy, or are looking for a mutually beneficial solution.

Finding a mediator. Tips for finding a qualified mediator, including looking for someone with relevant experience, a strong reputation, and a commitment to neutrality.
</p>

</span></div>
  <div className=' col'> <img src="https://img.freepik.com/free-photo/three-business-professionals-working-together-office_23-2147857317.jpg?w=1380&t=st=1677737984~exp=1677738584~hmac=e2ec9cba5f73f06b53dcb11d1deb23bde279b56154c8017593a5e315c23848ef" className='image2 mt-5 mb-5 ' alt=""/> </div>
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

export default Mediation