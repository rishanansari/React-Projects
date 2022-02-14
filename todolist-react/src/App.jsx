import React, { useRef, useState } from "react";
import "./index.css";
import Todolist from "./Todolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const itemEvent = (event) => {
    setInputList(event.target.value);
    if(event.target.value){
      setErrorMessage("")
    }else{
      setErrorMessage("Please enter value")
    }
    
  };

  const inputArray = () => {
    
     
    if(inputList){
       // setItems((prevValue) => {
      //   console.log("hello prevoius",prevValue);
      //   return [...prevValue, inputList];
      // });
      const dublicateArr = [...items, inputList];
      // console.log("items",myNewArr);
      setItems(dublicateArr);

      setInputList("");
      setErrorMessage("");
    }else{
      setErrorMessage("Please enter value")
    }
  };

  const deleteItems = (id) => {
    // setItems((oldItems) => {
    //   return oldItems.filter((arrElem, index) => {
    //     return index !== id;
    //   });
    // });
    const newArr = items.filter((value, index) => {
      return index !== id;
    });
    console.log("deleted", items);
    console.log("newArr", newArr);
    setItems(newArr);
  };
  return (
    <>
      {console.log("enderItems", items)}
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={inputArray} className="btn"> +
          </button>
          <br />
          <div>{errorMessage}</div>
          <ol>
            {/* <li> {inputList}</li> */}
            {items.map((itemval, index) => {
              return (
                <Todolist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
