import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      testValue:state.myReducer.test
  }
}

const TakeValue = ({testValue}) => {
  return (
    <div>{testValue}</div>
  )
}

export default connect(mapStateToProps,null)(TakeValue)