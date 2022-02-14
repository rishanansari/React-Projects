import React, { useState } from "react";
import "./index.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import History from "@material-ui/icons/History";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// import Clock from "react-digital-clock";
// import Countdown from 'react-countdown';

const App = () => {
  const [inputVal, setInputVal] = useState(0);

  const increase = () => {
    setInputVal(inputVal + 1);
  };
  const decrease = () => {
    setInputVal(inputVal - 1);
    if (inputVal === 0) {
      alert("sorry 👽");
      setInputVal(0);
    }
  };
  const Reset = () => {
    setInputVal(0);
  };
  {
    /* <Countdown date={Date.now() + 10000000} /></h2> */
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h2 className="clock">{/* <Clock /> */}</h2>
          <h1> {inputVal} </h1>
          <Tooltip title="Add">
            <Button id="inc-main" onClick={increase} variant="contained">
              Increament (MUI)
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button id="dec-main" onClick={decrease} variant="contained">
              decreament(MUI)
            </Button>
          </Tooltip>
          <button id="inc" onClick={increase}>
            <AddIcon />
          </button>
          <button id="dec" onClick={decrease}>
            <DeleteIcon />
          </button>
          <button id="reset" onClick={Reset}>
            <History />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
