import React,{useState} from "react";
import "./index.css";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"   ---give className= bootstrap classes to JSX element---


const App = () => {

  const [item, setItem] = useState("");
  const[listItem , setListItem] = useState([])

  const itemEvent = (event)=>{
    setItem(event.target.value)
  }

  const clickToAdd =()=>{
    setListItem((preVlaue)=>{
          return [...preVlaue,item] 
    })
    setItem("")
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
        <h1>ToDo List</h1>
        <input type="text" placeholder="Add An Item" onChange={itemEvent} value={item}/>
        <Button id="btn" onClick={clickToAdd}> <AddIcon/> </Button>

        <ol>
          {listItem.map((val)=>{
           return <Todolist text={val}/>
          })}
        </ol>
        </div>
      </div>
    </>
  );
};

export default App;
