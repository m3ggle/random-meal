import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      validation: "email",
      overallValidation: "userInformation",
      errorMessage: "",
      icon: "fa-solid fa-at",
    },
    userInformation: false,
  });
  const { email } = formData;
  const handleCallBack = (cb) => setFormData(cb);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="" />
      </Helmet> */}
      <div
        className={`top-[5%] sm:absolute sm:left-[5%] md:left-[10%] ${styles.flexCenter} signBg h-screen w-full flex-col gap-y-[40px] px-[40px] sm:h-[612px] sm:w-[510px] sm:rounded-[30px] sm:px-[80px]`}
      >
        {/* title */}
        <div className={`${styles.flexCenter} flex-col gap-y-[10px] p-[10px]`}>
          <p
            className={`${styles.heading24} handy:${styles.heading32} text-center text-lightTextCol`}
          >
            Forgot Your Password?
          </p>
          <p className={`${styles.paragraph14} text-center text-lightTextCol`}>
            Let's Fix That!
          </p>
        </div>

        {/* inputs and stuff */}
        <div className="flex w-full flex-col gap-[10px] p-[10px]">
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[email.state]}
            condition={"all"}
            validation={email.validation}
            specificInputObject={email}
            label={true}
          />
          <SignButtons
            formData={formData}
            stateArray={[formData.email.state]}
          />

          <Link
            to={"/"}
            className={`${styles.paragraph12} w-fit text-lightTextCol ${styles.flexCenter}`}
          >
            <i className="fa-solid fa-house mr-1"></i>
            <p className="underline underline-offset-2">Go Back Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
