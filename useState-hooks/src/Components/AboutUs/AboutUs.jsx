import React,{useEffect} from 'react'
import { Link, NavLink,useLocation,useSearchParams } from "react-router-dom";
const AboutUs = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log('====================================');
        console.log("searchParams",searchParams.get("fName"));
        console.log('====================================');
    }, [])
    
   
   
  return (
    <>
    <div>About Us</div>
    <NavLink to="/">Go to Home Page </NavLink>
    <Link to="/contact-us"> Go to Contact Us</Link>
  </>
  )
}

export default AboutUs