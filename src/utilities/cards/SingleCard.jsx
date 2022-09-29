import { motion } from "framer-motion";
import React, { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SpoonacularContext from "../../context/SpoonacularContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import { useLike } from "../../hooks/useLike";
import styles from "../../styles";

const SingleCard = ({ meal }) => {
  const { user, buyinglist, dispatch } = useContext(SpoonacularContext);
  const navigate = useNavigate();
  const { mealinformation, ingredients, liked } = meal;
  const { handleBuyinglist } = useBuyinglist();
  const { handleHeart } = useLike();

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
    dispatch({
      type: "UPDATE_USER_INFORMATION",
      payload: { ...userInfo },
    });
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
        onClick={() => navigate(`/mealdetails/${mealinformation.id}`)}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>

      {/* name and tag */}
      <div className="w-full md:w-[170px] md:bg-lightTextCol rounded-xl absolute top-[69.5%] md:top-[68%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] md:cardNameShadow z-20">
        <p
          className={`text-[20px] md:text-[16px] text-lightTextCol md:text-darkTextCol font-semibold whitespace-nowrap truncate`}
        >
          {mealinformation.title}
        </p>
        <div
          className={`hidden 700:flex gap-1 w-full overflow-hidden flex-nowrap`}
        >
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
                  } rounded-full ${styles.tag10}`}
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
        className="w-fit h-fit flex flex-col absolute top-[8%] left-[86%] 500:top-[12%] 500:left-[90%] md:left-[78%] md:top-[5%] xl:top-[6%] xl:left-[82%]"
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

export default SingleCard;
