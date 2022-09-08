import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
    <div className="navbar">
      <NavLink style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="navbar-item"  to="/">
       React About Us 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="navbar-item"  to="/service">
       React Service 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="navbar-item"  to="/search">
       React Search
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="navbar-item"  to="/user/abid/ansari">
       React user 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'white' })} className="navbar-item" to="/contact">
        React Contact Us
      </NavLink>
      </div>
      <br />

      <a href="/"> About Us</a>
      <a href="/contact"> Contact Us</a>
      <p>these 2 hyper link is from anchor tag so it will redirect your page with loading so we used link/navlink component from react router dom </p>
      <br/>
    </>
  );
};

export default Menu;




