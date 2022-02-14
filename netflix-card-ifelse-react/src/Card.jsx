import React from "react";
import "./index.css";
import Image from "./Image";


function Card(props){
  
  return(
   <>
    <div className="cards">
    <div className="card">
      <div className="img_card">
        <Image imgsrc={props.nimgsrc}/>
      </div>
      <div className="card_info">
        <span>{props.ndes}</span>
        <h2>{props.ntitle}</h2>
        <a href={props.nlink} target="_blank">
        <button>Watch Now</button>
        </a>
      </div>
    </div>
    </div>
    </>
  )
};
export default Card;


