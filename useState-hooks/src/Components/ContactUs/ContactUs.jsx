import React from "react";
import { Link, NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div>ContactUs</div>
      <NavLink to="/">Go to Home Page </NavLink>
      <Link to="/about-us"> Go to About Us</Link>
    </>
  );
};

export default ContactUs;
