import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();

  return (
    <>
      <h1>
        Hello, I am User {fname} {lname} Page : we are calling it from URL as
        fname and lname{" "}
      </h1>
      <br />
      <h1>User location is : {location.pathname} </h1>

      {location.pathname === `/user/abid/ansari` ? (
        <button
          onClick={() => {
            alert("you are awesome");
          }}
        >Click me</button>
      ) : null}
    </>
  );
};

export default User;
