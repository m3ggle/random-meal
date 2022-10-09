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

const CardThree = ({ meal }) => {
  //* context
  const { user, dispatchUser } = useUserContext();
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();

  //* states
  //* import fct/hooks
  const { handleBuyinglist } = useBuyinglist();
  const { handleHeart } = useLike();
  const navigate = useNavigate();

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
    dispatchUser({
      type: "UPDATE_USER_INFORMATION",
      payload: { ...userInfo },
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cardShadow relative flex h-[100px] w-full cursor-pointer overflow-hidden rounded-xl bg-cover bg-center 500:h-[167px] 700:h-[264px] 700:w-[193px] 700:justify-center"
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

      {/* name and tag */}
      <div className="flex-start 700:cardNameShadow absolute top-[55%] z-20 flex w-full flex-col gap-y-[2px] rounded-xl px-[10px] py-3 500:top-[69.5%] 700:top-[68%] 700:w-[170px] 700:bg-lightTextCol">
        <p
          className={`truncate whitespace-nowrap text-[20px] font-semibold text-lightTextCol 700:text-[16px] 700:text-darkTextCol`}
        >
          {mealinformation.title}
        </p>
        <div
          className={`hidden w-full flex-nowrap gap-1 overflow-hidden 700:flex`}
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
                  className={`w-fit px-4 py-1 ${
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
        className={`absolute top-[8%] left-[86%] flex h-fit w-fit flex-col 500:top-[8%] 500:left-[87%] 700:left-[78%] 700:top-[5%] ${styles.flexCenter}`}
      >
        <motion.div
          onClick={() => handleHeartClick()}
          whileTap={{ scale: 0.94 }}
          className={`h-[34px] w-[34px] ${styles.flexCenter} z-20 ${
            liked ? "text-failure" : "text-iconTransCol"
          } cursor-pointer`}
        >
          <FaHeart size="22px" />
        </motion.div>
        <motion.div
          onClick={() => handleBuy()}
          whileTap={{ scale: 0.94 }}
          className={`h-[34px] w-[34px] ${styles.flexCenter} z-20 cursor-pointer text-iconTransCol active:text-[#2B598C]`}
        >
          <FaShoppingCart size="22px" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardThree;
