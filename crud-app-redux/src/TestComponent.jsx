import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { testAction } from './Redux/Action';

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: (value) => {
            dispatch(testAction(value))
        }
    }
}

const TestComponent = ({testAction}) => {
    useEffect(() => {
    
    }, [])
    
  return (
      <>
    <div>TestComponent</div>
    <button onClick={()=>testAction("this is test")}>test Action</button>
    </>
  )
}


export default connect(null,mapDispatchToProps)(TestComponent)