import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';

const Todolist = (props)=>{

const[line, setLine]=useState(false)
const remvItem=()=>{
    setLine(true)
}
    return (
        <>
        <div className="todo">
        <Button id="todo_btn" onClick={remvItem}><DeleteIcon /></Button>
        <li style={{textDecoration : line?  "line-through" : "none"}}>{props.text}</li>
        </div>
        </>
        )

}

export default Todolist;