import React,{useState} from 'react'
import NavBarr from '../NavBarr'
import "./Therapist.css"
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Therapist = () => {
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
    <img src="https://img.freepik.com/free-photo/mid-shot-woman-therapist-taking-notes-clipboard_23-2148759120.jpg?w=1380&t=st=1677588888~exp=1677589488~hmac=103f50d0efb0639210e365019215dfde4115541bb3c18286bec414236d7fd5e6" className='backgroundimg'/>
  <div class="overlay">
    <h2> Therapist Near Me!</h2>
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
  <div className='heading1 col  mt-5 '>Therapists<br/>
  <span className=' '>
  <p className=' summary-text1 mt-3'>Diagnoses and treats mental health disorders. Creates individualized treatment plans according to patient needs and circumstances. Meets with patients regularly to provide counseling, treatment and adjust treatment plans as necessary. Conducts ongoing assessments of patient progress.Establishes positive, trusting rapport with patients.
Diagnoses and treats mental health disorders.
Creates individualized treatment plans according to patient needs and circumstances.
Meets with patients regularly to provide counseling, treatment and adjust treatment plans as necessary.
Conducts ongoing assessments of patient progress.
Involves and advises family members when appropriate.
Refers patients to outside specialists or agencies when necessary.
Maintains thorough records of patient meetings and progress.
Follows all safety protocols and maintains client confidentiality.
</p>

</span></div>
  <div className=' col'> <img src="https://img.freepik.com/free-photo/medium-shot-woman-sitting-couch_23-2149927564.jpg?w=1380&t=st=1677589483~exp=1677590083~hmac=35b68de69a5806769fa59bd310324adcd0b1bad5cceb5d3d920e8e712cb7c601" className='image2 mt-5 mb-5 ' alt=""/> </div>
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

export default Therapist