import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase.config";
import useHandleGoogleSubmit from "../hooks/useHandleGoogleSubmit";
import useValidation from "../hooks/useValidation";
import styles from "../styles";

const SignButtons = ({ formData, stateArray }) => {
  const { distributor } = useValidation();
  const navigate = useNavigate();
  const location = useLocation();
  const [text] = useState({
    signUp: {
      btn: "Sign Up",
      googleBtn: "Sign Up with Google",
      littleText1: "Already have an Account?",
      littleText2: "Sign In instead!",
      redirect: "/signIn",
    },
    signIn: {
      btn: "Sign In",
      googleBtn: "Sign In with Google",
      littleText1: "Don't have a Account?",
      littleText2: "Sign Up instead!",
      redirect: "/signUp",
    },
    forgotPassword: {
      btn: "Send E-Mail",
      googleBtn: "Sign In with Google",
      littleText1: "Don't have a Account?",
      littleText2: "Sign Up instead!",
      redirect: "/signUp",
    },
  });
  const { handleGoogle } = useHandleGoogleSubmit();
  const { username, email, password, userInformation } = formData;

  const handleSubmit = async () => {
    console.log(
      distributor({
        validation: "userInformation",
        values: stateArray,
        condition: "all",
      })
    );
    console.log(stateArray)
    if (distributor({validation: "userInformation", values: stateArray, condition: "all"})) {
      const auth = getAuth();
      if (location.pathname === "/signUp") {
        handleSignUp(auth);
      }
      if (location.pathname === "/signIn") {
        handleSignIn(auth);
      }
      if (location.pathname === "/forgotPassword") {
        handleForgotPassword(auth);
      }
      navigate("/");
    } else {
      console.log("not ready");
    }
  };

  const handleSignIn = (auth) => {
    signInWithEmailAndPassword(auth, email.inputValue, password.inputValue)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const handleSignUp = async (auth) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email.inputValue,
      password.inputValue
    );

    const user = userCredentials.user;

    updateProfile(auth.currentUser, {
      displayName: username.inputValue,
    });

    const formDataCopy = {
      username: username.inputValue,
      email: email.inputValue,
      fullName: "",
      bio: "",
      pinterest: "",
      twitter: "",
      instagram: "",
      photoUrl: "",
      buyinglist: [],
      favMeals: [],
      favCombos: [],
      favoriteMeals: [],
      favoriteCombos: [],
      timestamp: serverTimestamp(),
    };

    await setDoc(doc(db, "users", user.uid), formDataCopy);
  };

  const handleForgotPassword = (auth) => {
    sendPasswordResetEmail(auth, email.inputValue)
      .then(() => {
        // Todo: toast email was send
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex flex-col py-[10px] gap-y-[10px]">
      <div
        className={`${
          styles.flexCenter
        } w-full py-[10px] rounded-xl text-lightTextCol font-semibold text-[14px] ${
          userInformation
            ? "btnPrimaryCol buttonShadow hover:bg-[#293D2B] cursor-pointer"
            : "bg-transparent border-[1px] border-solid cursor-default"
        } `}
        onClick={handleSubmit}
      >
        {location.pathname === "/signIn"
          ? text.signIn.btn
          : location.pathname === "/signUp"
          ? text.signUp.btn
          : text.forgotPassword.btn}
      </div>
      {/* Google */}
      <div
        onClick={() => handleGoogle()}
        className={`${styles.flexCenter} w-full py-[10px] rounded-xl text-lightTextCol font-semibold text-[14px] border-solid border-[1px] gap-x-1 cursor-pointer`}
      >
        <div className={`${styles.flexCenter} w-5 h-5 pb-[2px]`}>
          <FaGoogle size="15px" />
        </div>
        {location.pathname === "/signIn"
          ? text.signIn.googleBtn
          : location.pathname === "/signUp"
          ? text.signUp.googleBtn
          : text.forgotPassword.googleBtn}
      </div>
      <Link
        to={
          location.pathname === "/signIn"
            ? text.signIn.redirect
            : location.pathname === "/signUp"
            ? text.signUp.redirect
            : text.forgotPassword.redirect
        }
        className="flex gap-x-1 text-inputCol"
      >
        <p className={`${styles.paragraph12}`}>
          {location.pathname === "/signIn"
            ? text.signIn.littleText1
            : location.pathname === "/signUp"
            ? text.signUp.littleText1
            : text.forgotPassword.littleText1}
        </p>
        <p className={`${styles.paragraph12} underline underline-offset-1`}>
          {location.pathname === "/signIn"
            ? text.signIn.littleText2
            : location.pathname === "/signUp"
            ? text.signUp.littleText2
            : text.forgotPassword.littleText2}
        </p>
      </Link>
    </div>
  );
};

export default SignButtons;
