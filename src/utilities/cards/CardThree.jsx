import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import SpoonacularContext from "../../context/SpoonacularContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import { useLike } from "../../hooks/useLike";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";

const CardThree = (meal) => {
  const { user, buyinglist, dispatch } = useContext(SpoonacularContext);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const { mealinformation, ingredients, liked } = meal.meal;

  const { handleBuyinglist } = useBuyinglist();
  const { handleHeart } = useLike();
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    setLikeState(liked);
  }, [liked]);

  const handleBuy = () => {
    const newBuyinglist = handleBuyinglist({buyinglist, title: mealinformation.title, ingredients});
    dispatch({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
  };

  const handleHeartClick = () => {
    console.log(liked);
    const { userInfo, mealInfo } = handleHeart(user, likeState, meal.meal);
    
    dispatch({
      type: "UPDATE_USER_INFORMATION",
      payload: { ...userInfo },
    });
  };



  //   const handleClick = (msg) => {
  //     if (msg === "card") {
  //       navigate(`/mealdetails/${id}`);
  //     } else if (msg === "heart") {
  //       const auth = getAuth();
  //       if (auth.currentUser) {
  //         likeState
  //           ? callbackRemoveFavMeal(id)
  //           : callbackAddFavMeal(id, fullMealInfo);
  //         setLikeState((prevState) => !prevState);
  //       } else {
  //         toast.error("😤 Not logged in");
  //       }
  //     } else if (msg === "buy") {
  //       callbackBuylist(id, fullMealInfo);
  //     }
  //   };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full 700:w-[193px] h-[100px] 500:h-[167px] 700:h-[264px] bg-cover bg-center flex 700:justify-center rounded-xl relative cardShadow overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${mealinformation.image})` }}
    >
      <div
        id="overlay"
        onClick={() => navigate(`/mealdetails/${mealinformation.id}`)}
        className="absolute top-0 left-0 w-full h-full imgOverlayRandomMeal z-10"
      ></div>

      {/* name and tag */}
      <div className="w-full 700:w-[170px] 700:bg-lightTextCol rounded-xl absolute top-[55%] 500:top-[69.5%] 700:top-[68%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] 700:cardNameShadow z-20">
        <p
          className={`text-[20px] 700:text-[16px] text-lightTextCol 700:text-darkTextCol font-semibold whitespace-nowrap truncate`}
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
        className={`w-fit h-fit flex flex-col absolute top-[8%] left-[86%] 500:top-[8%] 500:left-[87%] 700:left-[78%] 700:top-[5%] ${styles.flexCenter}`}
      >
        <motion.div
          id="heart"
          // onClick={() => handleClick("heart")}
          onClick={() => handleHeartClick()}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 ${
            likeState ? "text-failure" : "text-iconTransCol"
          } cursor-pointer`}
        >
          <FaHeart size={width > 700 ? "22px" : "16px"} />
        </motion.div>
        <motion.div
          id="buy"
          onClick={() => handleBuy()}
          whileTap={{ scale: 0.94 }}
          className={`w-[34px] h-[34px] ${styles.flexCenter} z-20 text-iconTransCol cursor-pointer active:text-[#2B598C]`}
        >
          <FaShoppingCart size={width > 700 ? "22px" : "16px"} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardThree;
