import Hero from "./Hero";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn1 from "./landingPages/signIn1/SignIn1";
import SignIn2 from "./landingPages/signIn2/SignIn2";
import SignUp from "./landingPages/signUp/SignUp";
import SignUpOtp from "./landingPages/signUpOTP/SignUpOtp";
import SignInOTP from "./landingPages/signInOTP/SignInOTP";
import SignIn3 from "./landingPages/signIn3/SignIn3";
import VehicleListing from "./landingPages/vehicleListing/VehicleListing";
import Index from "./landingPages/vehicle-listing2/Index";
import Index2 from "./landingPages/vehicle-listing3/Index2";
import History from "./landingPages/history/History";
import Contact from "./landingPages/contacts/Contact";
import Favourites from "./landingPages/favourites/Favourites";
import Profile from "./landingPages/profile/Profile";
import './App.css'

function App() {
  
  return (
    <>
    <div className="layout">
     
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/SignIn1" element={<SignIn1 />} />
          <Route path="/SignIn2" element={<SignIn2 />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignUpOtp" element={<SignUpOtp />} />
          <Route path="/SignInOtp" element={<SignInOTP />} />
          <Route path="/SignIn3" element={<SignIn3 />} />
          <Route path="/VehicleListing" element={<VehicleListing />} />
          <Route path="/vehicle-listing2" element={<Index />} />
          <Route path="/vehicle-listing3" element={<Index2 />} />
          <Route path="/history" element={<History />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/profile' element={<Profile />} />


        </Routes>
      </Router>
      </div>



    
    </>
    
  );
}

export default App;
