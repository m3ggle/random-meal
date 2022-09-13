import React, { useState } from "react";
import {
  FaAt,
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaInstagram,
  FaPinterestP,
  FaSignature,
  FaTimes,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import ProfilePic from "../assets/images/ProfilePic.webp";
import styles from "../styles";

const Profile = () => {

  // Todo: Save Button is only available if all the inputs are change and in a state of default 
      //  ? how about, default is going to be "def" and the change defaults going to be "defaultChange" => check: fullName.state.includes("default") && ...
  // Todo: onSubmit is missing, bundle the data to one 
  
  const [inputState, setInputState] = useState({
    fullName: {
      inputValue: "",
      active: false,
      state: "default",
    },
    username: {
      inputValue: "",
      active: false,
      state: "default",
    },
    email: {
      inputValue: "",
      active: false,
      state: "default",
    },
    bio: {
      inputValue: "",
      active: false,
      state: "default",
    },
    pinterest: {
      inputValue: "",
      active: false,
      state: "default",
    },
    twitter: {
      inputValue: "",
      active: false,
      state: "default",
    },
    instagram: {
      inputValue: "",
      active: false,
      state: "default",
    },
    userInformaiton: false,
    BioSocial: false,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        state: checkInputCorrectness(id, value) ? "success" : "warning",
        inputValue: value,
      },
    }));
    console.log(inputState.fullName.state);
    console.log(inputState);
  };

  // weiß: blur when correct (default)
  // orange: focus when typing (warning)
  // green: focus when condition is fulfilled (success)
  // red: blur when condition is not fulfilled (failure)

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const checkInputCorrectness = (id, value) => {
    const { fullName, username, email, pinterest, twitter, instagram } =
      inputState;
    switch (id) {
      case "fullName":
        return value.length > 6;
      case "username":
        return value.length > 4;
      case "email":
        return validateEmail(value);
      case "pinterest":
        return value.includes("pinterest");
      case "twitter":
        return value.includes("twitter");
      case "instagram":
        return value.includes("instagram");
      case "userInformation":
        return (
          fullName.state === "defaultSuccess" &&
          username.state === "defaultSuccess" &&
          email.state === "defaultSuccess"

          // fullName.state.includes("default") &&
          // username.state.includes("default") &&
          // email.state.includes("default")
        );
      case "bioSocial":
        return (
          pinterest.state === "defaultSuccess" &&
          twitter.state === "defaultSuccess" &&
          instagram.state === "defaultSuccess"
        );
      default:
        return "";
    }
  };

  const handleInputFocus = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        state: checkInputCorrectness(id, value) ? "success" : "warning",
        active: true,
      },
    }));
    console.log("hallo");
  };

  const handleInputBlur = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        state: checkInputCorrectness(id, value) ? "defaultSuccess" : "failure",
        active: false,
      },
      userInformaiton: checkInputCorrectness("userInformaiton", ""),
      bioSocial: checkInputCorrectness("bioSocial", ""),
    }));
  };

  return (
    <div className="w-full h-screen xl:h-screen bg-bgPrimaryCol flex flex-col overflow-auto pt-8 md:pt-0">
      {/* top */}
      <div className={`${styles.flexCenter} w-full h-[300px]`}>
        <img src={ProfilePic} alt="" className="w-[207px]" />
      </div>

      {/* bottom */}
      <form
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
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.fullName.state === "warning"
                  ? "border-warning"
                  : inputState.fullName.state === "success"
                  ? "border-success"
                  : inputState.fullName.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaSignature className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="fullName"
                value={inputState.fullName.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="John Doe"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.fullName.active &&
                  (inputState.fullName.inputValue.length > 6 ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.fullName.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                Please Enter Your Full Name With At Least 6 Characters
              </p>
            </div>
          </div>
          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your Username
            </label>
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.username.state === "warning"
                  ? "border-warning"
                  : inputState.username.state === "success"
                  ? "border-success"
                  : inputState.username.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaUserAlt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="username"
                value={inputState.username.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="JohnDoe321"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.username.active &&
                  (inputState.username.inputValue.length > 6 ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.username.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                This Username Is Already Taken
              </p>
            </div>
          </div>
          {/* input open (icon txt icon) */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your E-Mail Address
            </label>
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.email.state === "warning"
                  ? "border-warning"
                  : inputState.email.state === "success"
                  ? "border-success"
                  : inputState.email.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaAt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="email"
                value={inputState.email.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="john.doe@gmail.com"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.email.active &&
                  (inputState.email.inputValue.length > 6 ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.email.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                Please Enter A Valid E-Mail Address
              </p>
            </div>
          </div>

          {/* input closed (textarea) */}
          <div className="w-full flex flex-col gap-y-[10px]">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>Bio</label>
            {/* textarea */}
            <textarea
              id="bio"
              value={inputState.bio.inputValue}
              onChange={handleInputChange}
              rows="4"
              className={`bg-transparent border-solid border-[1px] rounded-xl p-[10px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
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

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <button
                type="button"
                className={`w-full h-[40px] text-lightTextCol text-[14px] ${
                  checkInputCorrectness("userInformation", "")
                    ? "btnPrimaryCol buttonShadow"
                    : "bg-transparent border-[1px]"
                } font-semibold border-solid  rounded-xl`}
              >
                Save Changes
              </button>
            </div>
          </div>

          {/* password */}
          {/* <div className="w-full flex flex-col">
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Your Password
            </label>
            <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaLock className="text-inputCol" size="15px" />
              </div>
              <input
                type="password"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Password"
              />
              <div
                className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
              >
                {inputState.fullName.active &&
                  (inputState.fullName.inputValue.length > 6 ? (
                    <FaCheck />
                  ) : (
                    <FaTimes />
                  ))}
              </div>
            </div>
            <div
              className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
            >
              <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
              <FaExclamationCircle className="pb-[2px] text-warning hidden" />
              Please Enter The Correct Password
            </div>
                  </div> */}
        </div>

        {/* second Column */}
        <div className="w-full sm:w-[400px] flex flex-col p-[10px] gap-y-[16px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            Social Media
          </p>
          {/* inputs */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Link To Your Pinterest
            </label>
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.pinterest.state === "warning"
                  ? "border-warning"
                  : inputState.pinterest.state === "success"
                  ? "border-success"
                  : inputState.pinterest.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaAt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="pinterest"
                value={inputState.pinterest.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="www.pinterest.com/marry"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.pinterest.active &&
                  (inputState.pinterest.inputValue.includes("pinterest") ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.pinterest.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                Word Pinterest Has To Be Included
              </p>
            </div>
          </div>
          {/* twitter */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Link To Your Twitter
            </label>
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.twitter.state === "warning"
                  ? "border-warning"
                  : inputState.twitter.state === "success"
                  ? "border-success"
                  : inputState.twitter.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaAt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="twitter"
                value={inputState.twitter.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="www.twitter.com/marry"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.twitter.active &&
                  (inputState.twitter.inputValue.includes("twitter") ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.twitter.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                Word Twitter Has To Be Included
              </p>
            </div>
          </div>
          {/* instagram */}
          <div className="w-full flex flex-col">
            {/* Label */}
            <label className={`text-inputCol ${styles.paragraph12}`}>
              Link To Your Instagram
            </label>
            <div
              className={`text-inputCol w-full border-solid border-b-[1px] ${
                inputState.instagram.state === "warning"
                  ? "border-warning"
                  : inputState.instagram.state === "success"
                  ? "border-success"
                  : inputState.instagram.state === "failure"
                  ? "border-failure"
                  : "border-default"
              } flex items-center  px-[10px] gap-[8px] py-[12px]`}
            >
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaAt className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                id="instagram"
                value={inputState.instagram.inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                placeholder="www.instagram.com/marry"
              />
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                {inputState.instagram.active &&
                  (inputState.instagram.inputValue.includes("instagram") ? (
                    <FaCheck className="text-success" />
                  ) : (
                    <FaExclamationCircle className="text-warning" />
                  ))}
              </div>
            </div>
            <div
              className={`${
                inputState.instagram.state === "failure" ? "flex" : "hidden"
              }  items-center gap-x-[8px] px-2`}
            >
              <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
                <FaExclamationTriangle className=" text-failure" />
              </div>
              <p className={`${styles.paragraph12} text-inputCol`}>
                Word Instagram Has To Be Included
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col">
              <button
                type="button"
                className={`w-full h-[40px] text-lightTextCol text-[14px] ${
                  checkInputCorrectness("bioSocial", "")
                    ? "btnPrimaryCol buttonShadow"
                    : "bg-transparent border-[1px]"
                } font-semibold border-solid  rounded-xl`}
              >
                Save Changes
              </button>
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
                className={`w-full h-[40px] text-lightTextCol text-[14px] font-semibold btnPrimaryCol buttonShadow rounded-xl`}
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
      </form>
    </div>
  );
};

export default Profile;
