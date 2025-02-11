import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import SwiggyCorporateMenu from "./Pages/SwiggyCorporate";
import Help from "./Pages/Help";
import OtherOffer from "./Pages/OtherOffer";
import Login from "./auth/Login";
import SignUpPage from "./auth/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help" element={<Help />} />
        <Route path="/swiggycorporate" element={<SwiggyCorporateMenu />} />
        <Route path="/other" element={<OtherOffer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
