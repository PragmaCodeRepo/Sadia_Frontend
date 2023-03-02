import React,{useState} from 'react'
import NavBarr from '../NavBarr'
import "./Therapist.css"
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Lwayers = () => {
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
    <img src="https://img.freepik.com/free-photo/court-hammer-books-judgment-law-concept_144627-30462.jpg?w=1380&t=st=1677649655~exp=1677650255~hmac=3f6f96e141b492abc4827f13eba4d0cdba8a5ee1607ae22f6c687300e0db24fc" className='backgroundimg'/>
  <div class="overlay">
    <h2> Top Lawyers Near Me!</h2>
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
  <div className='heading1 col  mt-5 '>Lawyers<br/>
  <span className=' '>
  <p className=' summary-text1 mt-3'>verview of Divorce: Provide an overview of the divorce process, including the different types of divorce, such as contested and uncontested, and the steps involved in obtaining a divorce. Explain the legal requirements for divorce, including residency and grounds for divorce.

Services: Detail the services you provide as a divorce lawyer, including legal representation, mediation, negotiation, and litigation. Explain how you can help clients with issues such as property division, child custody and support, alimony,
</p>

</span></div>
  <div className=' col'> <img src="https://img.freepik.com/free-photo/closeup-shot-person-writing-book-with-gavel-table_181624-57173.jpg?w=1380&t=st=1677650332~exp=1677650932~hmac=00297a2d612426a758dc1c56e950ac02f6e17e562eb7461819635940e2fd1504" className='image2 mt-5 mb-5 mx-5 ' alt=""/> </div>
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

export default Lwayers