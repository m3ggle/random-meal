import React, { useState } from "react";
import BgImage from "../assets/images/InImage.webp";
import Input from "../components/Input";
import SignButtons from "../components/SignButtons";
import styles from "../styles";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: {
      id: "email",
      displayName: "E-Mail Address",
      placeholder: "marry.jane@gmail.com",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-at",
    },
    userInformaiton: false,
  });
  const { email } = formData;
  const handleCallBack = (cb) => setFormData(cb);

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
            Forgot Your Password?
          </p>
          <p className={`${styles.paragraph14} text-lightTextCol text-center`}>
            Let's Fix That!
          </p>
        </div>

        {/* inputs and stuff */}
        <div className="w-full flex flex-col gap-[10px] p-[10px]">
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[email.state]}
            specificInputObject={email}
            label={true}
          />
          <SignButtons
            formData={formData}
            stateArray={[formData.email.state]}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
