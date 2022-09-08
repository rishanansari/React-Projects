import React from "react";
import { Link, NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
    <div>Home Page</div>
      <NavLink to="/about-us?fName='saif'&lName='Momin'">Go to About Us</NavLink>
      <Link to="/contact-us"> Go to Contact Us</Link>
    </>
  );
};

export default Home;
