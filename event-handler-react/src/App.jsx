import React,{useState} from 'react';
import "./index.css";




const App = () => {

  let purple = "yellow"
  const [bg, setBg] = useState(purple);
const [name, setName] = useState("Click Me");
  const bgChange = ()=>{

     setBg("red")
     setName("Ouch!! 😠")
  }

const bgDouble = ()=>{
setBg("purple")
setName("ayyo 😧")
}
  return (
  <>
<div style={{backgroundColor :  bg}}>
  <button onClick={bgChange} onDoubleClick={bgDouble}> {name} </button>
</div>
  </>
  )
};

export default App;