import React from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MealdetailsTop = ({ image, navigationBack }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigationBack ? navigate(-1) : navigate("/")
  };

  return (
    <div
      className="relative w-full h-[385px] rounded-t-[30px] bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`w-full h-full imgOverlayMealdetails`}></div>
      {/* close icon */}
      <div
        className="absolute top-12 right-12 w-fit h-fit"
        onClick={handleNavigate}
      >
        <FaTimes size="30px" className="text-lightTextCol cursor-pointer" />
      </div>
    </div>
  );
};

export default MealdetailsTop;
