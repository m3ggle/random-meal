import React from "react";
import CardLittle from "./CardLittle";
import CardMobile from "./CardMobile";
import CardThreeMobile from "./CardThreeMobile";

const Cards = ({ type }) => {
  switch (type) {
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
