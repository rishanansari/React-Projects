import React,{useState} from "react";
import LocationCityIcon from '@material-ui/icons/LocationCity';

const App = () => {

const [city, setCity] = useState("")

const inputval = (event)=>{

  setCity(event.target.value)
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="search">
            <input
              type="search"
              alt="cityname"
              placeholder="Enter City Name"
              className="seacrhbar"
              onChange={inputval}
            />
          </div>
          <div className="temp_info">
            <h1 className="location"><LocationCityIcon/> {city} </h1>
            <h2 className="degree"> 5.52&deg;C</h2>
            <h3 className="temp_variation"> max-temp 5.52&deg;c | min-temp 5.5&deg;c</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
