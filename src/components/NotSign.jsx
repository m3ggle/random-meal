import { motion } from "framer-motion";
import React from "react";
import BgImage from "../assets/images/InImage.webp";
import styles from "../styles";

// good bg: https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80

const NotSign = () => {
  return (
    <div className="z-[100] flex h-screen w-full items-center justify-center bg-[#28293350]">
      <div
        className="buttonDiceShadow flex overflow-hidden rounded-xl bg-bgPrimaryCol bg-cover bg-center"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="bg-transparent xl:p-4">
          <div className="signBg flex h-[350px] w-[350px] flex-col items-center justify-center gap-6 rounded-xl px-6 pb-6 pt-4">
            <p className={`${styles.heading24} text-lightTextCol`}>
              You Are not Signed In
            </p>
            <ul className={`list mt-[-8px] w-full ${styles.paragraph14} px-2`}>
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
            <div className="flex w-full flex-col gap-2">
              <div className="z-0 flex w-full flex-col">
                <div className="flex w-full flex-col">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className={`btnPrimaryCol buttonShadow h-[40px] w-full rounded-xl text-[14px] font-semibold text-lightTextCol`}
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
              <div className="z-10 flex w-full flex-col">
                <div className="z-10 flex w-full flex-col">
                  <button
                    type="button"
                    className={`buttonShadow btnPrimaryCol h-[40px] w-full rounded-xl text-[14px] font-semibold text-lightTextCol`}
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <div className="z-20 flex w-full flex-col">
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    className={`buttonShadow btnPrimaryCol h-[40px] w-full rounded-xl text-[14px] font-semibold text-lightTextCol`}
                  >
                    Sign In with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-[350px] w-[350px] bg-transparent xl:flex"></div>
      </div>
    </div>
  );
};

export default NotSign;
