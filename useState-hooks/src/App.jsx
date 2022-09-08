import React, { useState } from "react";
// import "./index.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Components from "./Components";

const App = () => {
  //     // let count = "mario"
  //     // const [count, setCount] = useState("mario");

  //     // console.log(useState);
  //     // function IncNum() {
  //     //     setCount("liga")
  //     // }

  // const [name, setName] = useState({
  //     fName : "Abid",
  //     lName : "Ansari",
  //     myAge : 27
  // });

  // const [frndName, setFrndName] = useState({
  //     fName : "Adil",
  //     lName : "Khan",
  //     frndAge : 28
  // });

  // console.log(useState);
  // function IncNum() {
  //     setName({
  //         fName : "Adil",
  //         lName : "Khan",
  //         myAge : 28,
  //     });
  //     setFrndName({
  //         fName : "Abid",
  //         lName: "Ansari",
  //         frndAge : 27,
  //     })
  // }
  // //     const [name , setName] = useState("mario");
  // //     const [age, setAge] = useState(25);
  // // function IncNum() {
  // //     setName("abid")
  // //     setAge(30)
  // //     console.log(setAge);
  // // }

  //   return (
  //       <button>
  //  <h1 id='inc'> my name is {name.fName + name.lName} , i am {name.myAge} years old and my frnd name is {frndName.fName + frndName.lName}, he is {frndName.frndAge} years old.</h1>
  //  <button onClick={IncNum}> Click Me</button>

  // </>
  // )
  let navigate = useNavigate();
  const contactUsHandler = () => {
    navigate("/contact-us");
  };

  const aboutUsHandler=()=>{
    navigate("/about-us");
  }

  const invouceHandler =()=>{
    navigate("/invoices/1");
  }

  return (
    <>
      <button onClick={contactUsHandler}>Go to Contat Us Though logic</button>
      <button onClick={aboutUsHandler}>Go to About Us Though logic</button>
      <button onClick={invouceHandler}>Go toInvoice Page With Id </button>
      <Routes>
        <Route path="/" element={<Components.Home />} />
        <Route path="/about-us" element={<Components.AboutUs />} />
        <Route path="/contact-us" element={<Components.ContactUs />} />
        <Route path="/invoices/:invoiceId" element={<Components.Invoice />}
      />
      </Routes>
    </>
  );
};
export default App;
