import React from "react";
import { useState } from "react";
import Card0T640 from "../utilities/HomeCards0T640";
// import Card640T1280 from "../utilities/HomeCards640T1280"
import Card1280 from "../utilities/HomeCards1280";

const RandomMeal = () => {
    const [example] = useState([
      {
        id: 12,
        title: "Morbi ac diam pretium",
        imageUrl:
          "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
      },
      {
        id: 123,
        title: "Egestas nec commodo",
        imageUrl:
          "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      },
      {
        id: 1234,
        title: "Mattis imperdiet blandit aenean ",
        imageUrl:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
    ]);
  
  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      <Card0T640 exampleData={example} />
      <Card1280 exampleData={example} />
    </div>
  );
};

export default RandomMeal;
