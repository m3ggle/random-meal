import React from "react";
import CardLarge from "./CardLarge";
import CardLittle from "./CardLittle";
import CardMobile from "./CardMobile";
import CardThreeMobile from "./CardThreeMobile";

const Cards = ({ type }) => {
  switch (type) {
    case "large":
      return <CardLarge />;
    case "little":
      return <CardLittle />;
    case "mobile":
      return <CardMobile />;
    case "three":
      return <CardThreeMobile />;
    default:
      return "";
  }
};

export default Cards;
