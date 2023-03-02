import React,{useState} from 'react'
import NavBarr from '../NavBarr'
import "./Therapist.css"
import Footer from '../Footer';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Lifecoach = () => {
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

  const notify = () => toast(" please enter  your zip code");

  const notifyzip = () => toast("Zipcode must be 5 digits ");
  return (
    <>
       <div >
    <NavBarr/>
    
    <section class="showcase">
    <img src="https://img.freepik.com/free-photo/mental-health-care-sketch-diagram_53876-122822.jpg?w=1380&t=st=1677658192~exp=1677658792~hmac=606252f1aaf293a0556775b1ebe74a5860824982f187a16af9967a3468388f70" className='backgroundimg'/>
  <div class="overlay">
    <h2> Top Life Coach  services Near Me!</h2>
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
  <div className='heading1 col  mt-5 '>Life Coach Services<br/>
  <span className=' '>
  <p className=' summary-text1 mt-3 mx-5'>Life coaches are professionals who help individuals achieve their personal and professional goals by providing guidance, support, and motivation. Here are some topics related to life coaching that you may find helpful:

Goal setting - An introduction to the importance of setting specific and measurable goals, and how a life coach can help individuals clarify their goals and create an action plan to achieve them.

Self-awareness - A discussion of the importance of self-awareness in achieving personal and professional growth, and how a life coach can help individuals identify their strengths, weaknesses, and values.

Mindset and perspective - An explanation of how mindset and perspective can impact an individual's success, and how a life coach can help individuals develop a growth mindset and positive perspective.


</p>

</span></div>
  <div className=' col'> <img src="https://img.freepik.com/free-vector/young-man-practicing-yoga-exercises-mental-body-health_74855-20437.jpg?w=1380&t=st=1677658301~exp=1677658901~hmac=502ea7ac4fd4c83b9b1c8779b969288833b3a85f11ee8beb6641f2198a1fa4ca" className='image2 mt-5 mb-5 ' alt=""/> </div>
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

export default Lifecoach