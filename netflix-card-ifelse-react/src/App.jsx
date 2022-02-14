import React from "react";
import Amazon from "./Amazon";
import Card from "./Card";
import Netflix from "./Netflix";
import Sdata from "./Sdata";

// --------------------------------------------------------------------
const favSeries = "amazon";

// const FavS = ()=>{
// if (favSeries === "netflix") {
//    return <Netflix/>
// }else{
//     return <Amazon/>
// }
// }
// ----------upside code conditional if else and compnent FavS call in side as a----------
// -----------------------------------------------------------------------

const App=()=>{
    return(
    <>
    <h1 className="heading">The List of Top 5 Netflix Series</h1>



  {/* <FavS/>  */}
  {favSeries === "amazon" ? <Netflix/> : <Amazon/>}  ---- this one line code using ternaary operator
</>
)
}

export default App;