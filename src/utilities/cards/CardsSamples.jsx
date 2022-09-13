import React from "react";
import CardLarge from "./CardLarge";
import CardLittle from "./CardLittle";
import CardMobile from "./CardMobile";
import CardThreeMobile from "./CardThreeMobile";

const Cards = ({ type, lock }) => {
  switch (type) {
    case "large":
      return <CardLarge lock={lock} />;
    case "little":
      return <CardLittle lock={lock} />;
    case "mobile":
      return <CardMobile lock={lock} />;
    case "three":
      return <CardThreeMobile lock={lock} />;
    default:
      return "";
  }
};

export default Cards;
