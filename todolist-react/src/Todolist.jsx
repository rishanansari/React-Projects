import React from 'react';

const Todolist = (props) => {



  return (
    <>
    <div className='todo'>
    <button className='todo_btn' onClick={()=>{
      props.onSelect(props.id)
    }}> x </button>
  <li> {props.text}</li>
  </div>
  </>
  )
};

export default Todolist;