import React from 'react'
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className='error'>
    <h1>Error 404</h1>
    <p>Page not found</p>
    <NavLink to="/"> back to home</NavLink>
    
    </div>
  )
}

export default Error;