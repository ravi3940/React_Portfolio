import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from  "./components/Home.jsx";

import Exprience from "./components/Exprience.jsx";
import Skill from "./components/Skill.jsx";
import Project from "./components/Project.jsx";
import Contact from  "./components/Contact.jsx";
import AOS from "aos";
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
    <Navbar />
     <div className="container">
       <Home />
       <Exprience />
       <Skill/>
       <Project/>
       <Contact/>
     </div>
    </>
  );
}

export default App;
