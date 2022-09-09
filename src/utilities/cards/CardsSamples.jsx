import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import ProfilePic from "../../assets/images/ProfilePic.webp";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";
import CardLarge from "./CardLarge";
import CardLittle from "./CardLittle";
import CardMobile from "./CardMobile";
import BreakfastImg from "../../assets/images/breakfastExample.jpg";
import DinnerImg from "../../assets/images/dinnerExample.jpg";
import LunchImg from "../../assets/images/lunchExample.jpg";
import CardThreeMobile from "./CardThreeMobile";

const Cards = ({ type, lock }) => {
  const { width} = useWindowDimensions()
  switch (type) {
    case "large":
      return <CardLarge lock={lock} />;
    case "little":
      return <CardLittle lock={lock} />;
    case "mobile":
      return <CardMobile lock={lock} />;
    case "three":
      return (
        <CardThreeMobile lock={lock} />
      );
    default:
      return "";
  }
};

export default Cards;
