import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const Card0T640 = ({
  id,
  title,
  image,
  fullMealInfo,
  callbackAddFavMeal,
  callbackRemoveFavMeal,
  callbackBuylist,
}) => {
  const navigate = useNavigate();
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    setLikeState(fullMealInfo?.liked);
  }, [fullMealInfo?.liked]);

  const handleClick = (msg) => {
    if (msg === "card") {
      navigate(`/mealdetails/${id}`);
    } else if (msg === "heart") {
      const auth = getAuth()
      if (auth.currentUser) {
        likeState ? callbackRemoveFavMeal(id) : callbackAddFavMeal(id, fullMealInfo);
        setLikeState((prevState) => !prevState);
      } else {
        toast.error("😤 Not logged in");
      }
    } else if (msg === "buy") {
      callbackBuylist(id, fullMealInfo);
    }
  };

  return (
    <motion.div
      id="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      state={fullMealInfo}
      className="relative w-[90%] h-[30%] md:h-[30%] rounded-[20px] bg-bgPrimaryCol bg-center bg-cover overflow-hidden DayMealsShadow cursor-pointer xl:w-[308px] xl:min-h-[423px] xl:max-h-[423px] xl:flex xl:justify-center py-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        id="overlay"
        onClick={() => handleClick("card")}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>

      <div className="w-full xl:w-[280px] xl:bg-lightTextCol rounded-xl absolute bottom-[0%] xl:bottom-[3%] flex flex-start px-4 xl:px-4 pt-8 pb-3 xl:py-3 flex-col gap-y-[6px] xl:cardNameShadow z-20">
        <p
          className={`${styles.paragraph20} whitespace-nowrap truncate text-lightTextCol xl:text-darkTextCol`}
        >
          {title}
        </p>
        <div
          className={`hidden xl:flex gap-2 w-full flex-wrap`}
        >
          {fullMealInfo.mealinformation.dishTypes.map((type) => {
            if (
              type === "Breakfast" ||
              type === "Lunch" ||
              type === "Dinner" ||
              type === "Vegeterian" ||
              type === "Vegan"
            ) {
              return (
                <div
                  key={uuidv4()}
                  className={`px-4 py-1 w-fit ${
                    type === "Dinner"
                      ? "tagDinner"
                      : type === "Lunch"
                      ? "tagLunch"
                      : "tagBreakfast"
                  } rounded-full ${styles.tag12}`}
                >
                  {type}
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* icons */}
      <div
        id="icons"
        className="w-fit h-fit flex flex-col absolute top-[8%] left-[86%] 500:top-[12%] 500:left-[90%]  xl:top-[6%] xl:left-[82%]"
      >
        <motion.div
          id="heart"
          onClick={() => handleClick("heart")}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 ${
            fullMealInfo?.liked ? "text-failure" : "text-iconTransCol"
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

export default Card0T640;
