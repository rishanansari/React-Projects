import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Amazon = ()=>{
    return(<Card
        key={Sdata[3].id}  
        nimgsrc={Sdata[3].imgsrc}
        ndes={Sdata[3].des}
        ntitle={Sdata[3].title}
        nlink={Sdata[3].link}
      />)

}

export default Amazon;