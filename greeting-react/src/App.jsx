import React from "react";

function App() {
  const heading = {
    textAlign: "center",
    padding: "10px",
    margin: "200px 400px",
    borderRadius: "20px",
    boxSizing: "border-box",
  };

  let currDate = new Date(2022, 1, 22, 2).getHours();
  let greeting = " ";
  let cssStyle = {};
  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "fuchsia";
    heading.backgroundColor = "greenyellow";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good AfterNoon";
    cssStyle.color = "orangered";
    heading.backgroundColor = "yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "grey";
    heading.backgroundColor = "white";
  }
  return (
    <>
      <h1 style={heading}>
        Hello, <span style={cssStyle}> {greeting} </span> Abid
      </h1>
    </>
  );
}


export default App;
