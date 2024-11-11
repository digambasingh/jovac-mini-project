import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Signinandsignup from './components/signup&signin/Signinandsignup'
import About from "./components/about/About"
import ContactForm from './components/contact/ContactForm/ContactForm';
import Section1 from "./components/resource/Section1"
import Main from "./components/home/Main"
import {Feature}  from './components/features/Feature';
import Member from './components/team/Member';
import Blockweb from './components/dashbord/Blockweb';
import SetTime from './components/setTime/SetTime';
import Dashboard from './components/dashbord/Dashboard';
import Distruct from './components/dashbord/Distruct';



const App = () => {
  return (
    <>
    
    
      <BrowserRouter>
      <Routes>
<Route path="signin" element= <Signinandsignup/> />
<Route path="about" element= <About/> />
<Route path="contact" element=  <ContactForm/> />
<Route path="block" element=  <Blockweb/> />
<Route path="article" element=  <Section1/>  />
<Route path='feature' element= <Feature/> />
<Route path="/" element= <Main/> />
<Route path="/member" element= <Member/> />
<Route path="/settime" element= <SetTime/> />
<Route path="/dashboard" element= <Dashboard/> />
<Route path="/distruct" element= <Distruct/> />
      </Routes>
      </BrowserRouter>
      
      </>
  
  );
};

export default App;
