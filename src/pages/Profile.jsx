import { getAuth } from "firebase/auth";
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
import { useNavigate } from "react-router-dom";
import ProfilePic from "../assets/images/ProfilePic.webp";
import styles from "../styles";
import Input from "../components/Input";

const Profile = () => {
      const auth = getAuth();
      const navigate = useNavigate();

  // Todo: Save Button is only available if all the inputs are change and in a state of default 
      //  ? how about, default is going to be "def" and the change defaults going to be "defaultChange" => check: fullName.state.includes("default") && ...
  // Todo: onSubmit is missing, bundle the data to one 
  
  const [formData, setFormData] = useState({
    fullName: {
      id: "fullName",
      displayName: "Your Full Name",
      placeholder: "John Doe",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-signature'",
    },
    username: {
      id: "username",
      displayName: "Your Username",
      placeholder: "John Doe",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-user",
    },
    email: {
      id: "email",
      displayName: "Your E-Mail Address",
      placeholder: "marry.jane@gmail.com",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-at",
    },
    bio: {
      id: "bio",
      displayName: "Bio",
      placeholder: "John Doe",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-user",
    },
    pinterest: {
      id: "pinterest",
      displayName: "Link To Your Pinterest",
      placeholder: "www.pinterest.com/marry",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-brands fa-pinterest-p",
    },
    twitter: {
      id: "twitter",
      displayName: "Link To Your Twitter",
      placeholder: "www.twitter.com/marry",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-twitter",
    },
    instagram: {
      id: "instagram",
      displayName: "Link To Your Instagram",
      placeholder: "www.instagram.com/marry",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      errorMessage: "",
      icon: "fa-solid fa-instagram",
    },
    userInformaiton: false,
    social: false,
  });
  const {fullName, username, email, bio, pinterest, twitter, instagram, userInformaiton, social} = formData
  const handleCallBack = (cb) => setFormData(cb);

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     [id]: {
  //       ...prevState[id],
  //       state: checkInputCorrectness(id, value) ? "success" : "warning",
  //       inputValue: value,
  //     },
  //   }));
  //   console.log(inputState.fullName.state);
  //   console.log(inputState);
  // };

  // // weiß: blur when correct (default)
  // // orange: focus when typing (warning)
  // // green: focus when condition is fulfilled (success)
  // // red: blur when condition is not fulfilled (failure)

  // const validateEmail = (email) => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //   );
  // };

  // const checkInputCorrectness = (id, value) => {
  //   const { fullName, username, email, pinterest, twitter, instagram } =
  //     inputState;
  //   switch (id) {
  //     case "fullName":
  //       return value.length > 6;
  //     case "username":
  //       return value.length > 4;
  //     case "email":
  //       return validateEmail(value);
  //     case "pinterest":
  //       return value.includes("pinterest");
  //     case "twitter":
  //       return value.includes("twitter");
  //     case "instagram":
  //       return value.includes("instagram");
  //     case "userInformation":
  //       return (
  //         fullName.state === "defaultSuccess" &&
  //         username.state === "defaultSuccess" &&
  //         email.state === "defaultSuccess"

  //         // fullName.state.includes("default") &&
  //         // username.state.includes("default") &&
  //         // email.state.includes("default")
  //       );
  //     case "bioSocial":
  //       return (
  //         pinterest.state === "defaultSuccess" &&
  //         twitter.state === "defaultSuccess" &&
  //         instagram.state === "defaultSuccess"
  //       );
  //     default:
  //       return "";
  //   }
  // };

  // const handleInputFocus = (e) => {
  //   const { id, value } = e.target;
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     [id]: {
  //       ...prevState[id],
  //       state: checkInputCorrectness(id, value) ? "success" : "warning",
  //       active: true,
  //     },
  //   }));
  //   console.log("hallo");
  // };

  // const handleInputBlur = (e) => {
  //   const { id, value } = e.target;
  //   setInputState((prevState) => ({
  //     ...prevState,
  //     [id]: {
  //       ...prevState[id],
  //       state: checkInputCorrectness(id, value) ? "defaultSuccess" : "failure",
  //       active: false,
  //     },
  //     userInformaiton: checkInputCorrectness("userInformaiton", ""),
  //     bioSocial: checkInputCorrectness("bioSocial", ""),
  //   }));
  // };

  const handleLogOut = () => {
        auth.signOut();
    navigate("/signIn");
    
  }

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

          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[fullName.state, username.state, email.state, bio.state]}
            condition={"one"}
            specificInputObject={fullName}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[fullName.state, username.state, email.state, bio.state]}
            condition={"one"}
            specificInputObject={username}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[fullName.state, username.state, email.state, bio.state]}
            condition={"one"}
            specificInputObject={email}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[fullName.state, username.state, email.state, bio.state]}
            condition={"one"}
            specificInputObject={bio}
            label={true}
          />

          {/* save button */}


          </div>
      </form>
    </div>
  );
};

export default Profile;
