import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import LunchImg from "../../assets/images/lunchExample.jpg";
import styles from "../../styles";

const CardLittle = ({ lock }) => {
  return (
    <Link
      to={"/mealdetails/123"}
      className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
      style={{ backgroundImage: `url(${LunchImg})` }}
    >
      {/* name and tag */}
      <div className="w-[170px] bg-lightTextCol rounded-xl absolute top-[69.5%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
        <p className={`text-[16px] font-semibold whitespace-nowrap truncate`}>
          Egestas nec commodo...
        </p>
        <div className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag8}`}>
          Lunch
        </div>
      </div>

      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[6%] left-[83%] ">
        <FaHeart
          size="18px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaShoppingCart
          size="18px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        {lock !== undefined && (
          <FaLock
            size="18px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
        )}
      </div>
    </Link>
  );
};

export default CardLittle;
