import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useIcons } from "../../hooks/useIcons";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";

const Card0T640 = ({
  id,
  title,
  image,
  fullMealInfo,
  callbackAddFavMeal,
  callbackRemoveFavMeal,
  callbackBuylist,
}) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  // const { handleLike } = useIcons();
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    setLikeState(fullMealInfo?.liked);
  }, [fullMealInfo?.liked]);

  const handleClick = (msg) => {
    if (msg === "card") {
      navigate(`/mealdetails/${id}`);
    } else if (msg === "heart") {
      likeState ? callbackRemoveFavMeal(id) : callbackAddFavMeal(id);
      setLikeState((prevState) => !prevState);
    } else if (msg === "buy") {
      callbackBuylist(id, fullMealInfo)
    } else if (msg === "lock") {
      console.log("lock");
    }
  };

  return (
    <motion.div
      id="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      // onClick={() => handleClick("Card")}
      // onClick={() => navigate(`/mealdetails/${id}`)}
      state={fullMealInfo}
      className="relative mt-[-10px] 500:mt-0 w-full 500:w-[90%] h-[25%] md:h-[30%] rounded-t-[20px] 500:rounded-[20px] bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-20 cursor-pointer"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        id="overlay"
        onClick={() => handleClick("card")}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>
      <p
        onClick={() => handleClick("card")}
        className={`absolute bottom-[5%] left-[5%] right-[5%] ${
          width > 768 ? styles.heading24 : styles.heading20
        }  text-lightTextCol z-20`}
      >
        {title}
      </p>
      {/* icons */}
      <div
        id="icons"
        className="w-fit h-fit flex flex-col absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]"
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
        <motion.div
          id="lock"
          onClick={() => handleClick("lock")}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 text-iconTransCol cursor-pointer`}
        >
          <FaLock size="24px" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card0T640;
