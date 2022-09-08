import React, { useEffect } from "react";
import axios from "axios";

const Inc = () => {
  const [inc, setInc] = React.useState(0);

  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((errer) => {
        console.lod(errer);
      });
  }, []);

  const inchandler = () => {
    setInc(inc + 1);
  };

  return (
    <>
      {data.length > 0 &&
        data.map((val) => {
          return <div>{JSON.stringify(val)}</div>;
        })}
      <div>{inc}</div>
      <button onClick={inchandler}>Increment</button>
    </>
  );
};
export default Inc;
