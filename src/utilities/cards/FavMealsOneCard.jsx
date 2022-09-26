import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../../styles";

const FavMealsOneCard = ({ meal, callbackRemoveFavMeal, callbackBuylist }) => {
  const { mealinformation, nutrients, ingredients, instructions, liked } = meal;
  const navigate = useNavigate();

  const handleClick = (msg) => {
    if (msg === "card") {
      navigate(`/mealdetails/${mealinformation.id}`);
    } else if (msg === "heart") {
      const auth = getAuth();
      if (auth.currentUser) {
        callbackRemoveFavMeal(mealinformation.id);
      } else {
        toast.error("😤 Not logged in");
      }
    } else if (msg === "buy") {
      callbackBuylist(mealinformation.id, meal);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-90% md:w-[193px] h-[160px] md:h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${mealinformation.image})` }}
    >
      <div
        id="overlay"
        onClick={() => handleClick("card")}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>

      {/* name and tag */}
      <div className="w-full md:w-[170px] md:bg-lightTextCol rounded-xl absolute top-[69.5%] md:top-[77%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] md:cardNameShadow z-20">
        <p
          className={`text-[20px] md:text-[16px] text-lightTextCol md:text-darkTextCol font-semibold whitespace-nowrap truncate`}
        >
          {mealinformation.title}
        </p>
      </div>

      {/* icons */}
      <div
        id="icons"
        className="w-fit h-fit flex flex-col absolute top-[8%] left-[86%] 500:top-[12%] 500:left-[90%] md:left-[78%] md:top-[5%] xl:top-[6%] xl:left-[82%]"
      >
        <motion.div
          id="heart"
          onClick={() => handleClick("heart")}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 ${
            liked ? "text-failure" : "text-iconTransCol"
          } cursor-pointer`}
        >
          <FaHeart size="24px" />
        </motion.div>
        <motion.div
          id="buy"
          onClick={() => handleClick("buy")}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 text-iconTransCol cursor-pointer active:text-[#2B598C]`}
        >
          <FaShoppingCart size="24px" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FavMealsOneCard;
