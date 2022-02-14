import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Netflix = ()=>{
    return(<Card
        key={Sdata[1].id}  
        nimgsrc={Sdata[1].imgsrc}
        ndes={Sdata[1].des}
        ntitle={Sdata[1].title}
        nlink={Sdata[1].link}
      />)

}

export default Netflix;