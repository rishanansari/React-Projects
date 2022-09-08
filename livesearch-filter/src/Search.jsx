import React,{useState} from 'react';
import Sresult from './Sresult';

const Search = () => {

    const [img, setImg] = useState("");
    const inputEvent = (event)=>{
        const data = event.target.value;
        setImg(data)
    }



  return (
      <>
    <h1>Hello, I am Search Page</h1>
    <br/>
    <div className='search'>
    <input type="search" placeholder='Enter Image Name' value={img} onChange={inputEvent}/>
    </div>
    {img === "" ? null :<Sresult name={img}/> }
    
    </>
  )
}

export default Search;