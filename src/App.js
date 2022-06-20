import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
// CSS FILES
import "./styles/Login.css";
import "./styles/Signup.css";
import "./styles/Forgot.css";
import "./styles/Reset.css";
import "./styles/Dashboard.css";
import "./styles/AboutUs.css";
import "./styles/ContactUs.css"
const App = () => {

  return (
    <>
        <Routes>
          <Route exact path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/forgotpassword" element={<Forgot/>} />
          <Route path="/resetpassword" element={<Reset/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />

        </Routes>
    </>
  );
}
export default App 