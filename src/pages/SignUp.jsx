import React, { useState } from "react";
import { Link } from "react-router-dom";
import BgImage from "../assets/images/InImage.webp";
import Input from "../components/Input";
import SignButtons from "../components/SignButtons";
import styles from "../styles";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: {
      id: "username",
      displayName: "Username",
      placeholder: "John Doe",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      validation: "username",
      overallValidation: "userInformation",
      errorMessage: "",
      icon: "fa-solid fa-user",
    },
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
    password: {
      id: "password",
      displayName: "Password",
      placeholder: "Love01Food!",
      type: "password",
      inputValue: "",
      active: false,
      state: "default",
      validation: "password",
      overallValidation: "userInformation",
      errorMessage: "",
      icon: "fa-solid fa-lock",
    },
    userInformation: false,
  });
  const { username, email, password } = formData;
  const handleCallBack = (cb) => setFormData(cb);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="" />
      </Helmet> */}
      <div
        className={`top-[5%] sm:absolute sm:left-[5%] md:left-[10%] ${styles.flexCenter} signBg h-screen w-full flex-col gap-y-[10px] px-[40px] sm:h-[612px] sm:w-[510px] sm:rounded-[30px] sm:px-[80px]`}
      >
        {/* title */}
        <div className={`${styles.flexCenter} flex-col gap-y-[10px] p-[10px]`}>
          <p
            className={`${styles.heading24} handy:${styles.heading32} text-center text-lightTextCol`}
          >
            Create A New Account
          </p>
          <p className={`${styles.paragraph14} text-center text-lightTextCol`}>
            Everything Free Until You Say Otherwise
          </p>
        </div>

        {/* inputs and stuff */}
        <form className="flex w-full flex-col gap-[10px] p-[10px]">
          {/* inputs */}
          <div className="flex flex-col gap-y-[10px] py-[10px]">
            {/* TestSubject */}
            <Input
              callbackFct={handleCallBack}
              formData={formData}
              stateArray={[username.state, email.state, password.state]}
              condition={"all"}
              validation={username.validation}
              specificInputObject={username}
              label={true}
            />
            <Input
              callbackFct={handleCallBack}
              formData={formData}
              stateArray={[username.state, email.state, password.state]}
              condition={"all"}
              validation={email.validation}
              specificInputObject={email}
              label={true}
            />
            <Input
              callbackFct={handleCallBack}
              formData={formData}
              stateArray={[username.state, email.state, password.state]}
              condition={"all"}
              validation={password.validation}
              specificInputObject={password}
              label={true}
            />
            {/* Forget Password Text */}
            <Link
              to={"/forgot-password"}
              className={`${styles.paragraph12} w-fit text-lightTextCol underline underline-offset-2`}
            >
              Forgot Password?
            </Link>
          </div>

          <SignButtons
            formData={formData}
            stateArray={[username.state, email.state, password.state]}
          />

          <Link
            to={"/"}
            className={`${styles.paragraph12} w-fit text-lightTextCol ${styles.flexCenter}`}
          >
            <i className="fa-solid fa-house mr-1"></i>
            <p className="underline underline-offset-2">Go Back Home</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
