import React from "react";
import "./index.css";



function Card(props){
  
    return(
     <>
      <div className="cards">
      <div className="card">
        <div className="img_card">
          <img src={props.imgscr} alt="randompic" className="img__card"/>
        </div>
        <div className="card_info">
          <span>{props.des}</span>
          <h2>{props.title}</h2>
          <a href={props.link} target="_blank">
          <button>Watch Now</button>
          </a>
        </div>
      </div>
      </div>
      </>
    )
  };
  export default Card;