import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBuyinglistContext } from "../../../context/buyinglist/buyinglistContext";
import { useUserContext } from "../../../context/user/UserContext";
import { useBuyinglist } from "../../../hooks/useBuyinglist";
import { useLike } from "../../../hooks/useLike";
import styles from "../../../styles";

const MealdetailsTop = ({ meal, navigationBack }) => {
  //* context
  const { user, dispatchUser } = useUserContext();
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();

  //* states
  //* import fct/hooks
  const { handleBuyinglist } = useBuyinglist();
  const { handleHeart } = useLike();

  //* destructuring
  const { mealinformation, ingredients, liked } = meal;

  //* variables
  const navigate = useNavigate();

  //* on you go
  const handleNavigate = () => {
    navigationBack ? navigate(-1) : navigate("/");
  };

  const handleBuy = () => {
    const newBuyinglist = handleBuyinglist({
      buyinglist,
      title: mealinformation.title,
      ingredients,
    });
    dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
  };

  const handleHeartClick = () => {
    const { userInfo } = handleHeart(user, liked, meal);
    if (Object.keys(userInfo).length > 0) {
      dispatchUser({
        type: "UPDATE_USER_INFORMATION",
        payload: { ...userInfo },
      });
    }
  };

  return (
    <div
      className="relative h-[385px] w-full rounded-t-[30px] bg-cover bg-center"
      style={{ backgroundImage: `url(${mealinformation.image})` }}
    >
      <div className={`imgOverlayMealdetails h-full w-full`}></div>

      <div
        className={`absolute top-12 right-12 h-fit w-fit ${styles.flexCenter} flex-col gap-2 `}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNavigate}
          className={`${styles.flexCenter} h-11 w-11 cursor-pointer text-white`}
        >
          <FaTimes size="32px" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleHeartClick}
          className={`${styles.flexCenter} h-11 w-11 cursor-pointer ${
            liked ? "text-failure" : "text-iconTransCol"
          }`}
        >
          <FaHeart size="28px" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBuy}
          className={`${styles.flexCenter} h-11 w-11 cursor-pointer text-iconTransCol active:text-[#2B598C]`}
        >
          <FaShoppingCart size="28px" />
        </motion.div>
      </div>
    </div>
  );
};

export default MealdetailsTop;
