import React from "react";
import styles from "../styles";
import BgImage from "../assets/images/InImage.webp";
import {motion} from "framer-motion"

// good bg: https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80

const NotSign = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#28293350] z-[100]">
      <div
        className="flex rounded-xl bg-bgPrimaryCol overflow-hidden bg-center bg-cover buttonDiceShadow"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="bg-transparent p-4">
          <div className="flex h-[350px] w-[350px] flex-col items-center justify-center gap-6 pb-6 px-6 pt-4 rounded-xl signBg">
            <p className={`${styles.heading24} text-lightTextCol`}>
              You Are not Signed In
            </p>
            <ul className={`w-full list mt-[-8px] ${styles.paragraph14} px-2`}>
              <li className="flex text-lightTextCol">
                <div className="w-6">
                  <i className="fa-solid fa-heart"></i>
                </div>
                Store your favorite Meals
              </li>
              <li className="flex text-lightTextCol">
                <div className="w-6">
                  <i className="fa-solid fa-bowl-food"></i>
                </div>
                Create Combinations
              </li>
              <li className="flex text-lightTextCol">
                <div className="w-6">
                  <i className="fa-solid fa-user"></i>
                </div>
                Personalize the Experience
              </li>
            </ul>
            <div className="flex flex-col w-full gap-2">
              <div className="w-full flex flex-col z-0">
                <div className="w-full flex flex-col">
                  <motion.button
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    type="button"
                    className={`w-full h-[40px] text-lightTextCol btnPrimaryCol text-[14px] font-semibold buttonShadow rounded-xl`}
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
              <div className="w-full flex flex-col z-10">
                <div className="w-full flex flex-col z-10">
                  <button
                    type="button"
                    className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold buttonShadow rounded-xl btnPrimaryCol`}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col z-20">
                <div className="w-full flex flex-col">
                  <button
                    type="button"
                    className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold buttonShadow rounded-xl btnPrimaryCol`}
                  >
                    Sign In with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-[350px] bg-transparent"></div>
      </div>
    </div>
  );
};

export default NotSign;
