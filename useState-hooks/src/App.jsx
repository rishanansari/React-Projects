import React,{useState} from 'react';
import "./index.css"


const App = () => {

    // let count = "mario"
    // const [count, setCount] = useState("mario");

    // console.log(useState);
    // function IncNum() {
    //     setCount("liga")
    // }

const [name, setName] = useState({
    fName : "Abid",
    lName : "Ansari",
    myAge : 27
});

const [frndName, setFrndName] = useState({
    fName : "Adil",
    lName : "Khan",
    frndAge : 28
});

console.log(useState);
function IncNum() {
    setName({
        fName : "Adil",
        lName : "Khan",
        myAge : 28,
    });
    setFrndName({
        fName : "Abid",
        lName: "Ansari",
        frndAge : 27,
    })
}
//     const [name , setName] = useState("mario");
//     const [age, setAge] = useState(25);
// function IncNum() {
//     setName("abid")
//     setAge(30)
//     console.log(setAge);
// }

  return (
      <>
 <h1 id='inc'> my name is {name.fName + name.lName} , i am {name.myAge} years old and my frnd name is {frndName.fName + frndName.lName}, he is {frndName.frndAge} years old.</h1>
 <button onClick={IncNum}> Click Me</button>

</>
)
};
export default App;