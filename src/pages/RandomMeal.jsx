import React from "react";
import Card0T640 from "../utilities/HomeCards0T640"
import Card640T1280 from "../utilities/HomeCards640T1280"
import Card1280 from "../utilities/HomeCards1280"

const RandomMeal = () => {
  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      {/* 0px - 640px */}
      <Card0T640 />

      {/* 640px - 1280px */}
      <Card640T1280 />

      {/* 1280px - ...px */}
      <Card1280 />

    </div>
  );
};

export default RandomMeal;
