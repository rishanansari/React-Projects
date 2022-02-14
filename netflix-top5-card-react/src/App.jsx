import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import Sdata from "./Sdata";

const App = () => {
  return (
    <>
      <Heading />
      {Sdata.map((val) => {
        return (
          <Card
            imgscr={val.imgsrc}
            des={val.des}
            title={val.title}
            link={val.link}
          />
        );
      })}

      <Card
        imgscr="https://picsum.photos/250/300"
        des="A Original Netflix Series"
        title="Dark"
        link="https://www.google.com"
      />
      <Card
        imgscr="https://picsum.photos/250/300"
        des="A Original Netflix Series"
        title="Dark"
        link="https://www.google.com"
      />
    </>
  );
};

export default App;

{
  /* <Card
        imgscr={Sdata[3].imgsrc}
        des={Sdata[3].des}
        title={Sdata[3].title}
        link={Sdata[3].link}
      /> */
}
