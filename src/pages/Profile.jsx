import React from "react";
import {
  FaAt,
  FaEdit,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInstagram,
  FaLock,
  FaPinterestP,
  FaSignature,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import ProfilePic from "../assets/images/ProfilePic.webp";
import styles from "../styles";

const Profile = () => {
    // if the user has stm typed in in the social media the the icon will display their "true" color
    // if the user has typed in stm in the other inputs, the underline will become green if correct, red if incorrect, the orange when their is a warning

  return (
    <div className="w-full h-full xl:h-screen bg-bgPrimaryCol flex flex-col ">
      {/* top */}
      <div className={`${styles.flexCenter} w-full h-[300px]`}>
        <img src={ProfilePic} alt="" className="w-[207px]" />
      </div>

      {/* bottom */}
      <div
        className={`w-full flex items-center xl:items-start justify-center flex-col xl:flex-row gap-[10px] pb-[120px] md:pb-[40px] px-[22px] md:px-[0px]`}
      >
        {/* first Column */}
        <div className="w-full sm:w-[400px] flex flex-col p-[10px] gap-y-[16px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            User Information
          </p>
          {/* inputs */}
          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your Full Name
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaSignature className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Full Name"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your Username
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaUserAlt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Username"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your E-Mail Address
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaAt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="E-Mail Address"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your Password
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaLock className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="password"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Password"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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
        </div>

        {/* second Column */}
        <div className="w-full sm:w-[400px] flex flex-col p-[10px] gap-y-[16px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            Bio And Social Media
          </p>
          {/* inputs */}
          {/* input closed (textarea) */}
          <div className="w-full flex flex-col gap-y-[10px]">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>Bio</label>
            {/* textarea */}
            <textarea
              id=""
              rows="4"
              className={`bg-transparent border-solid border-[1px] rounded-xl p-[10px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Tempus nunc, arcu dignissim enim, id sit ipsum. Sem dui tincidunt turpis scelerisque habitant. Dui porttitor consequat varius sed. Dignissim in nibh dignissim viverra. "
            ></textarea>
            <div
              className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
            >
              <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
              <FaExclamationCircle className="pb-[2px] text-warning hidden" />
              Please Enter The Correct Password
            </div>
          </div>

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Pinterest
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaPinterestP className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="www.pinterest.com/marry"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Instagram
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaInstagram className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="www.instagram.com/marry"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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

          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Twitter
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaTwitter className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="www.twitter.com/marry"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                <FaEdit className="text-inputCol w-[15px]" />
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
        </div>

        {/* third Column */}
        <div className="w-full sm:w-[400px] flex flex-col p-[10px] gap-y-[16px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            Legal Information and Logout
          </p>
          {/* Buttons */}
          {/* Button */}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <button
                type="button"
                className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold border-solid border-[1px] rounded-xl`}
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <button
                type="button"
                className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold border-solid border-[1px] rounded-xl`}
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* input open (icon txt icon) */}
          {/* Button */}
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <button
                type="button"
                className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold border-solid border-[1px] rounded-xl`}
              >
                Logout
              </button>
            </div>
          </div>

          {/* input open (txt) */}
          <div className="w-full flex flex-col">
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              <p className={`${styles.paragraph14}`}>
                RF Inc © 2022. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
