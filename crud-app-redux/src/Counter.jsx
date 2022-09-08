import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { testAction } from './Redux/Action';
import { incrementCount } from "./Redux/Action";

const mapStateToProps = (state) => {
  console.log("====================================");
  console.log(state);
  console.log("====================================");

  return {
    count: state.myReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (value) => {
      console.log("====================================");
      console.log("value", value);
      console.log("====================================");
      dispatch(incrementCount(value));
    },
  };
};

const Counter = ({ count, incrementCount }) => {
  const incrementHandler = () => {
    incrementCount(count + 1);
  };

  return (
    <>
      <div>TestComponent</div>
      <button onClick={incrementHandler}>INCREAMENT</button>
      {/* <button onClick={()=>dcreament("this is test")}>DECREAMENT</button> */}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
