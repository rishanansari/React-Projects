import React,{useState} from "react";

function App() {


const [fName, setFName] = useState("")
const [fullName, setFullName]=useState("")

const[edit,setEdit]=useState("edit")
const[editedFullName, setEditedFullName]=useState("")



const inputEvent = (event)=>{
  setFName(event.target.value)
}
const addname =()=>{
setFullName(fName)
setFName("")
}
const editEvent=(event)=>{
  setFullName(event.target.value)
}
const editbtn=()=>{
  setFullName("")
  setEdit("save")
  setEditedFullName(edit)
  setEdit("edit")

}


  return (
    <>
    <input type="text" placeholder="enter first name" onChange={inputEvent} value={fName} />
    <button onClick={addname}>Click to Add</button>
    <h1>hello world this is {fullName}{editedFullName} <input type="text" placeholder="enter edited name" onChange={editEvent} value={edit}/> <button onClick={editbtn}> {edit}</button></h1>
    </>
  );
}

export default App;
