import { Route, Routes } from "react-router-dom";
import ProfileViewer from "./components/ProfileViewer";
import CartProvider from "../src/components/context/ProfileContextProvider";
import ZipcodeProfile from "./components/ZipcodeProfile";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import AnimatedCursor from "react-animated-cursor";
import Thankyou from "./components/ContactUs/Thankyou";
import FAQ from "./components/FAQ";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import ReactGA from "react-ga";
import Partner from "./components/Partner/Partner";

function App() {
  // const countEl=document.getElementById('count');
  // const TRACKING_ID="UA-257352567-1"
  const TRACKING_ID = "UA-257495687-1";
  ReactGA.initialize(TRACKING_ID);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  // function updateVisitCount() {
  //   fetch('https://api.countapi.xyz/update/pragma/pranjal/?amount=1')
  //   .then(res => res.json())
  //   .then(res => {
  //     countEl.innerHTML = res.value;

  //   })
  //   console.log("hh")
  // }
  return (
    <CartProvider>
      {/* {updateVisitCount()} */}
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile">
            <Route path=":id" element={<ProfileViewer />}></Route>
          </Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/thankyou" element={<Thankyou />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/Partner" element={<Partner />}></Route>
          <Route path="/zipcodeprofile">
            <Route path=":code" element={<ZipcodeProfile />} />
          </Route>

          <Route path="*" component={"Invalid Path"} />
        </Routes>
      )}
      {/* <p>This page was viewed</p>
<h1 id="count">0</h1>
<p>times</p> */}
    </CartProvider>
  );
}

export default App;
