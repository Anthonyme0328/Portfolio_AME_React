import React from "react";
import { NavLink } from "react-router-dom"





const Navs = () => {
  return(
    // nav bar with links to each section of site
    <nav>
    <ul>
      {/* home, about, and contact page use NavLink */}
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/portfolio">Portfolio</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
)}


export default Navs;