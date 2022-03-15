import React from "react";
import { NavLink } from "react-router-dom"
import Viking from "./assets/viking_logo.png"





const Navs = () => {
  return(
    // nav bar with links to each section of site
    
    <nav style={{listStyleType: "none", margin: "2rem", padding: "0", fontSize: "4rem", justifyContent: "space-around", backgroundColor: "hsl(25, 0%, 86%)", height: "10rem" }}>
    
    <ul>
    <NavLink to="/about"><img className="clearfix" src= {Viking} alt="logo" style={{ height: "10rem", width: "8rem", float: "right", padding: "1rem"}}></img></NavLink>
      {/* home, about, and contact page use NavLink */}
      <li style={{display: "inline", margin: "1rem"}}><NavLink to="/about">{`|About|`}</NavLink></li>
      <li style={{display: "inline", margin: "1rem"}}><NavLink to="/portfolio">{`|Portfolio|`}</NavLink></li>
      <li style={{display: "inline", margin: "1rem"}}><NavLink to="/contact">{`|Contact|`}</NavLink></li>
    </ul>
   
    
  </nav>
)}


export default Navs;