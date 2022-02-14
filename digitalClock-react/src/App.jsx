import React,{useState} from 'react';
// import { useState } from 'react/cjs/react.development';
import "./index.css"






const App = () => {

let time = new Date().toLocaleTimeString();

const [currtime, setCurrTime] = useState(time);

function TimeChange() {
    let ctime = new Date().toLocaleTimeString(); //wapas se likhna pada q ki use wapas batana hi apde ga ki time click pr change karna hai or wahi ko variable use karna hai setCurrTime me jo yaha declare kare.
    setCurrTime(ctime) 
}

//if we want digital clock which update automatically use setinetrval - ---just remove button and call the function in setinterval with 1000 ms...----

setInterval(TimeChange,1000);

  return (
<>
<h1>{currtime}</h1>
{/* <button onClick={TimeChange}> Get Time </button> */}
</>
);
};

export default App;