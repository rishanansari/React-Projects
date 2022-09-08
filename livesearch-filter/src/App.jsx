import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";
import Service from "./Service";
import User from "./User";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<About name="Ansari"/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/search" element={<Search />} />
        <Route path="/user/:fname/:lname" element={<User />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      {/* <About/>
        <Contact/> */}
    </>
  );
};

export default App;
