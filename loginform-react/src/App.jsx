import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    emailname : "",
    number: "",
  });


  const firstEvent = (event) => {
    // console.log(event.target.value),
    // setFullName(event.target.value);

    const value = event.target.value;
    const name = event.target.name;

    // const {name , value} = event.target;

  

    setFullName((e) => { //preValue(any name) pass karna hi pade ga parameter---------
      
      return {
        ...e,
        [name] : value,
        
      }

      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: e.lname,
      //     emailname : e.emailname,
      //     number:e.number,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: e.fname,
      //     lastname: value,
      //     emailname : e.emailname,
      //     number: e.number,
      //   };
      // }else if (name === "emailname") {
      //   return {
      //     fname: e.fname,
      //     lname: e.lname,
      //     emailname : value,
      //     number: e.number,
      //   };
      // }else if (name === "number") {
      //   return {
      //     fname: e.fname,
      //     lname: e.lname,
      //     emailname : e.emailname,
      //     number : value,
      //   };
      // }
    });
  };

  const eventSubmit = (e) => {
    e.preventDefault(); ////if remove this then start from from new (reload) again and input will show with local host name in search bar--------
    alert("form Submitted!!");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={eventSubmit}>
          <div>
            <h1>
              Hello, {fullname.fname} {fullname.lname}
            </h1>
            <p>{fullname.emailname}</p>
            <p>{fullname.number}</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fname"
              onChange={firstEvent}
              // value={fullname.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Password"
              name="lname"
              onChange={firstEvent}
              // value={fullname.lname}
            />
            <input
              type="email"
              placeholder="Enter Your Valid E-mail"
              name="emailname"
              onChange={firstEvent}
              // value={fullname.emailname}
            />
            <input
              type="number"
              placeholder="Enter Your 10 Digit Mobile Number"
              name="number"
              onChange={firstEvent}
              // value={fullname.mobnumber}
            />
            <br />
            <button type="submit"> Submit PLease ⛏️</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;