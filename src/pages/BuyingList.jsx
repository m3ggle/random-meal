import React from "react";
import {
  FaChevronRight,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import styles from "../styles";
import Button from "../utilities/Buttons";

const BuyingList = () => {
  return (
    <div
      className={`absolute top-0 w-screen overflow-hidden left-0 md:left-20 h-screen z-50 bg-[#00000030]`}
    >
      {/* top with the content */}
      <div className="relative w-full md:max-w-[534px] h-screen overflow-scroll bg-bgPrimaryCol pt-10 pb-28 md:pb-32 flex flex-col">
        <div className="flex flex-col">
          {/* titel */}
          <div className="w-full text-center">
            <p className={`${styles.heading32} text-lightTextCol`}>
              Your Buyinglist
            </p>
          </div>
          {/* cards */}
          <div className="flex flex-col gap-y-4 p-5 overflow-auto">
            <div className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol buyinglistMealShadow rounded-[20px]">
              {/* mealname */}
              <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol cursor-pointer">
                <p className={`${styles.paragraph16}`}>
                  Sit at neque, mattis nunc, ut bibendum
                </p>
                <FaTimes size="14px" />
              </div>
              {/* meals */}
              <div className="flex flex-col pl-6 gap-[5px]">
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>Semper mi praesent</p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Lacus sed pulvinar curabitur ut pulvinar massa
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Scelerisque mollis fringilla
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Id massa cursus adipiscing
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Vitae condimentum tortor posuere amet
                  </p>
                  <FaTimes size="12px" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol buyinglistMealShadow rounded-[20px]">
              {/* mealname */}
              <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol cursor-pointer">
                <p className={`${styles.paragraph16}`}>
                  Sit at neque, mattis nunc, ut bibendum
                </p>
                <FaTimes size="14px" />
              </div>
              {/* meals */}
              <div className="flex flex-col pl-6 gap-[5px]">
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>Semper mi praesent</p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Lacus sed pulvinar curabitur ut pulvinar massa
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Scelerisque mollis fringilla
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Id massa cursus adipiscing
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Vitae condimentum tortor posuere amet
                  </p>
                  <FaTimes size="12px" />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol buyinglistMealShadow rounded-[20px]">
              {/* mealname */}
              <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol cursor-pointer">
                <p className={`${styles.paragraph16}`}>Others</p>
                <FaTimes size="14px" />
              </div>
              {/* meals */}
              <div className="flex flex-col pl-6 gap-[5px]">
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>Semper mi praesent</p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Lacus sed pulvinar curabitur ut pulvinar massa
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Scelerisque mollis fringilla
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Id massa cursus adipiscing
                  </p>
                  <FaTimes size="12px" />
                </div>
                <div className="flex items-center justify-between text-lightTextCol cursor-pointer">
                  <p className={`${styles.paragraph14}`}>
                    Vitae condimentum tortor posuere amet
                  </p>
                  <FaTimes size="12px" />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-[8px] mt-3">
              {/* Label */}
              <label className={`text-inputCol ${styles.paragraph14} hidden`}>
                Search
              </label>
              <div className="w-full flex gap-x-[10px]">
                <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                  {/* icon */}
                  <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                    <FaPlus className="text-inputCol" size="15px" />
                  </div>
                  {/* text */}
                  <input
                    type="text"
                    className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                    placeholder="Add a new Ingredient..."
                  />
                </div>
                <div
                  className={`w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol cursor-pointer hover:border-none buyinglistBtnHover`}
                >
                  <FaChevronRight size="14px" />
                </div>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
              >
                <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
                <FaExclamationCircle className="pb-[2px] text-warning hidden" />
                Please Enter The Correct Password
              </div>
              <Button text="Export your Shopping List" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingList;
