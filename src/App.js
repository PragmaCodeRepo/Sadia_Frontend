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
import { useEffect,useState } from "react";
import Spinner from "./components/Spinner";


function App() {
  const [loading, setloading] = useState(false)
  useEffect(()=>{
   setloading(true)
   setTimeout(()=>{
    setloading(false)

   },3000)

  },[])
  return (
    
    <CartProvider>
    {
      loading?<Spinner/>:
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile">
          <Route path=":id" element={<ProfileViewer />}></Route>
        </Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/thankyou" element={<Thankyou/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/zipcodeprofile">
          <Route path=":code" element={<ZipcodeProfile />} />
        </Route>

        <Route path="*" component={"Invalid Path"} />
      </Routes>
    }
      
      
    </CartProvider>
  );
}

export default App;
