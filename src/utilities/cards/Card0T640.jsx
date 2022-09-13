import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../../styles";

const Card0T640 = ({ id, title, image }) => {
  return (
    <Link
      to={`/mealdetails/${id}`}
      className="relative mt-[-10px] 500:mt-0 w-full 500:w-[90%] h-[25%] md:h-[30%] rounded-t-[20px] 500:rounded-[20px] bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-20"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full imgOverlayRandomMeal"></div>
      <p
        className={`absolute bottom-[5%] left-[5%] ${styles.heading24} text-lightTextCol`}
      >
        {title}
      </p>
      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
        <FaHeart
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaShoppingCart
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaLock
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
      </div>
    </Link>
  );
};

export default Card0T640;
