import { Route, Routes } from "react-router-dom";
import ProfileViewer from "./components/ProfileViewer";
import CartProvider from "../src/components/context/ProfileContextProvider";
import ZipcodeProfile from "./components/ZipcodeProfile";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import AnimatedCursor from "react-animated-cursor";


function App() {
  return (
    <CartProvider>
      {/* <AnimatedCursor className="Animated-cursor"
        innerSize={15}
        outerSize={15}
        color="0, 174, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "h1,h2,h3,h4,h5,h6",
        ]}
      /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile">
          <Route path=":id" element={<ProfileViewer />}></Route>
        </Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/zipcodeprofile">
          <Route path=":code" element={<ZipcodeProfile />} />
        </Route>

        <Route path="*" component={"Invalid Path"} />
      </Routes>
    </CartProvider>
  );
}

export default App;
