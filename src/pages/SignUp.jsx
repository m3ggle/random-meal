import { Helmet } from "react-helmet";
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
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="" />
      </Helmet>
      <div
        className={`sm:absolute top-[5%] sm:left-[5%] md:left-[10%] ${styles.flexCenter} flex-col px-[40px] sm:px-[80px] gap-y-[10px] w-full sm:w-[510px] h-screen sm:h-[612px] signBg sm:rounded-[30px]`}
      >
        {/* title */}
        <div className={`${styles.flexCenter} flex-col p-[10px] gap-y-[10px]`}>
          <p
            className={`${styles.heading24} handy:${styles.heading32} text-lightTextCol text-center`}
          >
            Create A New Account
          </p>
          <p className={`${styles.paragraph14} text-lightTextCol text-center`}>
            Everything Free Until You Say Otherwise
          </p>
        </div>

        {/* inputs and stuff */}
        <form className="w-full flex flex-col gap-[10px] p-[10px]">
          {/* inputs */}
          <div className="flex flex-col py-[10px] gap-y-[10px]">
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
              to={"/forgotPassword"}
              className={`${styles.paragraph12} text-lightTextCol underline underline-offset-2 w-fit`}
            >
              Forgot Password?
            </Link>
          </div>

          <SignButtons
            formData={formData}
            stateArray={[username.state, email.state, password.state]}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
