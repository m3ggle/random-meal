import React from "react";
import {
  FaAt,
  FaCircleNotch,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaGoogle,
  // FaCheck,
  // FaTimes,
  FaLock,
} from "react-icons/fa";
import BgImage from "../assets/images/InImage.webp";
import styles from "../styles";

const SignIn = () => {
  // FaCircleNotch default
  // FaCheck if input is correct
  // FaTimes if input is incorrect

  return (
    <div
      className="fixed w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div
        className={`sm:absolute top-[5%] sm:left-[5%] md:left-[10%] ${styles.flexCenter} flex-col px-[40px] sm:px-[80px] gap-y-[40px] w-full sm:w-[510px] h-screen sm:h-[612px] signBg sm:rounded-[30px]`}
      >
        {/* title */}
        <div className={`${styles.flexCenter} flex-col p-[10px] gap-y-[10px]`}>
          <p
            className={`${styles.heading24} handy:${styles.heading32} text-lightTextCol text-center`}
          >
            Welcome Back
          </p>
          <p className={`${styles.paragraph14} text-lightTextCol text-center`}>
            Your favorite Meals are wating for You
          </p>
        </div>

        {/* inputs and stuff */}
        <div className="w-full flex flex-col gap-[10px] p-[10px]">
          {/* inputs */}
          <div className="flex flex-col py-[10px] gap-y-[10px]">
            {/* Email Input */}
            <div className="w-full flex flex-col gap-y-[8px] ">
              {/* Label */}
              <label className={`text-inputCol ${styles.paragraph14} hidden`}>
                Search
              </label>
              <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                {/* icon */}
                <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                  <FaAt className="text-inputCol" size="15px" />
                </div>
                {/* text */}
                <input
                  type="text"
                  className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                  placeholder="Enter Your Email-Address"
                />
                {/* icon */}
                <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                  <FaCircleNotch className="text-inputCol" size="15px" />
                </div>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
              >
                <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
                <FaExclamationCircle className="pb-[2px] text-warning hidden" />
                Please Enter The Correct Password
              </div>
            </div>

            {/* Password Input */}
            <div className="w-full flex flex-col gap-y-[8px] ">
              {/* Label */}
              <label className={`text-inputCol ${styles.paragraph14} hidden`}>
                Search
              </label>
              <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                {/* icon */}
                <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                  <FaLock className="text-inputCol" size="15px" />
                </div>
                {/* text */}
                <input
                  type="password"
                  className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                  placeholder="Enter Your Password"
                />
                {/* icon */}
                <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                  <FaCircleNotch className="text-inputCol" size="15px" />
                </div>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
              >
                <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
                <FaExclamationCircle className="pb-[2px] text-warning hidden" />
                Please Enter The Correct Password
              </div>
            </div>

            {/* Forget Password Text */}
            <p
              className={`${styles.paragraph12} text-lightTextCol underline underline-offset-2 `}
            >
              Forgot Password?
            </p>
          </div>

          {/* buttons */}
          <div className="flex flex-col py-[10px] gap-y-[10px]">
            {/* Login */}
            <div
              className={`${styles.flexCenter} w-full py-[10px] rounded-xl text-lightTextCol font-semibold text-[14px] btnPrimaryCol hover:bg-[#293D2B]`}
            >
              Login
            </div>
            {/* Google */}
            <div
              className={`${styles.flexCenter} w-full py-[10px] rounded-xl text-lightTextCol font-semibold text-[14px] border-solid border-[1px] gap-x-1`}
            >
              <div className={`${styles.flexCenter} w-5 h-5 pb-[2px]`}>
                <FaGoogle size="15px" />
              </div>
              Sign In with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
