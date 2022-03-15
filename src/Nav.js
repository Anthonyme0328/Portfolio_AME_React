import React from "react";
import { NavLink } from "react-router-dom"





const Navs = () => {
  return(
    // nav bar with links to each section of site
    <nav style={{listStyleType: "none", margin: "2rem", padding: "0", fontSize: "4rem", justifyContent: "space-around" }}>
    <ul>
      {/* home, about, and contact page use NavLink */}
      <li style={{display: "inline"}}><NavLink to="/about">{`About|`}</NavLink></li>
      <li style={{display: "inline"}}><NavLink to="/portfolio">{`Portfolio|`}</NavLink></li>
      <li style={{display: "inline"}}><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
)}


export default Navs;