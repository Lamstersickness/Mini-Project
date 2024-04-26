import React from 'react';
import './Navbar.css';
import logo from "./logwat.jpg";

function Navbar() {
  return (
    <div className="reg">
      <h1 id="comp">Autodoc ENT</h1>
      <a className="nav-link" href="/PPS2.html" target="_main"><h3 className="abc">Home</h3></a>
      <a className="nav-link" href="/about.html" target="_main"><h3 className="abc">About</h3></a>
      <div className="navbar-logo">
        <img src={logo}/>
      </div>
      <a className="nav-link" href="/feedback.html" target="_main"><h3 className="abc">Feedback</h3></a>
      <a className="nav-link" href="/LoginREG.html" target="_main"><h3 className="abc">Register Now</h3></a>
    </div>
  );
}

export default Navbar;
