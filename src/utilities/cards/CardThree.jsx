import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DinnerImg from "../../assets/images/dinnerExample.jpg";
import styles from "../../styles";

const CardThree = (
  id,
  title,
  image,
  fullMealInfo,
  callbackAddFavMeal,
  callbackRemoveFavMeal,
  callbackBuylist
) => {
  const navigate = useNavigate();

  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    setLikeState(fullMealInfo?.liked);
  }, [fullMealInfo?.liked]);

  const handleClick = (msg) => {
    if (msg === "card") {
      navigate(`/mealdetails/${id}`);
    } else if (msg === "heart") {
      const auth = getAuth();
      if (auth.currentUser) {
        likeState
          ? callbackRemoveFavMeal(id)
          : callbackAddFavMeal(id, fullMealInfo);
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/mealdetails/123`)}
      className="w-[122px] h-[167px] 700:w-[193px] 700:h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
      style={{ backgroundImage: `url(${DinnerImg})` }}
    >
      {/* name and tag */}
      <div className="w-[109px] 700:w-[170px] bg-lightTextCol rounded-xl absolute top-[72%] 700:top-[69.5%] flex flex-start px-2 py-3 flex-col gap-y-[2px] cardNameShadow">
        <p
          className={`text-[10px] 700:text-[16px] font-semibold whitespace-nowrap truncate`}
        >
          Egestas nec commodo...
        </p>
      </div>

      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[6%] left-[80%] 700:left-[83%]">
        {/* <FaHeart
          size="15px 700:18px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaShoppingCart
          size="15px 700:18px"
          className="text-iconTransCol drop-shadow-cardIcon"
        /> */}
        <i className="fa-solid fa-heart text-iconTransCol drop-shadow-cardIcon text-[15px] 700:text-[18px]"></i>
        <i className="fa-solid fa-cart-shopping text-iconTransCol drop-shadow-cardIcon text-[15px] 700:text-[18px]"></i>
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

export default CardThree;
