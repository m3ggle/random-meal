import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useBuyinglistContext } from "../../context/buyinglist/buyinglistContext";
import { useUserContext } from "../../context/user/UserContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import { useLike } from "../../hooks/useLike";
import styles from "../../styles";

const Card0T640 = ({ meal }) => {
  //* context
  const { user, dispatchUser } = useUserContext();
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();

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
    <motion.div
      id="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      state={meal}
      className="DayMealsShadow relative h-[30%] w-[90%] cursor-pointer overflow-hidden rounded-[20px] bg-bgPrimaryCol bg-cover bg-center py-0 md:h-[30%] xl:flex xl:max-h-[423px] xl:min-h-[423px] xl:w-[308px] xl:justify-center"
      style={{ backgroundImage: `url(${mealinformation.image})` }}
    >
      <div
        id="overlay"
        onClick={() =>
          navigate(`/mealdetails/${mealinformation.id}`, {
            state: { navigateBack: true },
          })
        }
        className="imgOverlayRandomMeal absolute top-0 left-0 z-10 h-full w-full"
      ></div>

      <div className="flex-start xl:cardNameShadow absolute bottom-[0%] z-20 flex w-full flex-col gap-y-[6px] rounded-xl px-4 pt-8 pb-3 xl:bottom-[3%] xl:w-[280px] xl:bg-lightTextCol xl:px-4 xl:py-3">
        <p
          className={`${styles.paragraph20} truncate whitespace-nowrap text-lightTextCol xl:text-darkTextCol`}
        >
          {mealinformation.title}
        </p>
        <div className={`hidden w-full flex-wrap gap-2 xl:flex`}>
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
                  className={`w-fit px-4 py-1 ${
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
        className="absolute top-[8%] left-[86%] flex h-fit w-fit flex-col 500:top-[12%] 500:left-[90%]  xl:top-[6%] xl:left-[82%]"
      >
        <motion.div
          onClick={() => handleHeartClick()}
          whileTap={{ scale: 0.94 }}
          className={`h-[34px] w-[34px] ${styles.flexCenter} z-20 ${
            liked ? "text-failure" : "text-iconTransCol"
          } cursor-pointer`}
        >
          <FaHeart size="24px" />
        </motion.div>
        <motion.div
          onClick={() => handleBuy()}
          whileTap={{ scale: 0.94 }}
          className={`h-[34px] w-[34px] ${styles.flexCenter} z-20 cursor-pointer text-iconTransCol active:text-[#2B598C]`}
        >
          <FaShoppingCart size="24px" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card0T640;
