import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar, Footer, FirstSlider, SecSlider, MainComponent, MainComps } from "./Component";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
// import Menus from "./Pages/menus";
import SwiggyCorporateMenu from "./Pages/SwiggyCorporate";
import Help from "./Pages/Help";
import OtherOffer from "./Pages/OtherOffer";
import SignIn from "./Pages/Signin";

function App() {
  return (
      <>
      {/* Navbar appears on all pages */}
      <NavBar />

      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/menus" element={<Menus />} /> */}
        <Route path="/help" element={<Help />} />
        <Route path="/swiggycorporate" element={<SwiggyCorporateMenu />} />
        <Route path="/other" element={<OtherOffer />} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer /> 
      </>
  );
}

export default App;
