import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SpoonacularContext from "../../context/SpoonacularContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import { useLike } from "../../hooks/useLike";
import styles from "../../styles";

const Card0T640 = ({ meal }) => {
  //* context
  const { user, buyinglist, dispatch } = useContext(SpoonacularContext);

  //* states
  //* import fct/hooks
  const navigate = useNavigate();
  const { handleBuyinglist } = useBuyinglist();
  const { handleHeart } = useLike();

  //* destructuring
  const { mealinformation, ingredients, liked } = meal;

  //* variables
  //* on you go
  const handleBuy = () => {
    const newBuyinglist = handleBuyinglist({
      buyinglist,
      title: mealinformation.title,
      ingredients,
    });
    dispatch({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
  };

  const handleHeartClick = () => {
    const { userInfo } = handleHeart(user, liked, meal);
    if (Object.keys(userInfo).length > 0) {
      dispatch({
        type: "UPDATE_USER_INFORMATION",
        payload: { ...userInfo },
      });
    }
  };

  return (
    <motion.div
      id="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      state={meal}
      className="relative w-[90%] h-[30%] md:h-[30%] rounded-[20px] bg-bgPrimaryCol bg-center bg-cover overflow-hidden DayMealsShadow cursor-pointer xl:w-[308px] xl:min-h-[423px] xl:max-h-[423px] xl:flex xl:justify-center py-0"
      style={{ backgroundImage: `url(${mealinformation.image})` }}
    >
      <div
        id="overlay"
        onClick={() => navigate(`/mealdetails/${mealinformation.id}`)}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>

      <div className="w-full xl:w-[280px] xl:bg-lightTextCol rounded-xl absolute bottom-[0%] xl:bottom-[3%] flex flex-start px-4 xl:px-4 pt-8 pb-3 xl:py-3 flex-col gap-y-[6px] xl:cardNameShadow z-20">
        <p
          className={`${styles.paragraph20} whitespace-nowrap truncate text-lightTextCol xl:text-darkTextCol`}
        >
          {mealinformation.title}
        </p>
        <div className={`hidden xl:flex gap-2 w-full flex-wrap`}>
          {mealinformation.dishTypes.map((type) => {
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
          onClick={() => handleHeartClick()}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 ${
            liked ? "text-failure" : "text-iconTransCol"
          } cursor-pointer`}
        >
          <FaHeart size="24px" />
        </motion.div>
        <motion.div
          onClick={() => handleBuy()}
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
