import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ODonutLogo from "../assets/images/ODonut.webp";
import Input from "../components/Input";
import { db } from "../firebase.config";
import { useUpdateNavbar } from "../hooks/useUpdateNavbar";
import styles from "../styles";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const { updateShowNavbar } = useUpdateNavbar();

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
      validation: "fullName",
      overallValidation: "userInformation",
      errorMessage: "",
      icon: "fa-solid fa-signature",
    },
    username: {
      id: "username",
      displayName: "Your Username",
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
      displayName: "Your E-Mail Address",
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
    bio: {
      id: "bio",
      displayName: "Bio",
      placeholder: "John Doe",
      type: "textarea",
      inputValue: "",
      active: false,
      state: "default",
      validation: "symbols400",
      overallValidation: "userInformation",
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
      validation: "wordInIt",
      overallValidation: "social",
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
      validation: "wordInIt",
      overallValidation: "social",
      errorMessage: "",
      icon: "fa-brands fa-twitter",
    },
    instagram: {
      id: "instagram",
      displayName: "Link To Your Instagram",
      placeholder: "www.instagram.com/marry",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      validation: "wordInIt",
      overallValidation: "social",
      errorMessage: "",
      icon: "fa-brands fa-instagram",
    },
    userInformation: false,
    social: false,
  });
  const {
    fullName,
    username,
    email,
    bio,
    pinterest,
    twitter,
    instagram,
    userInformation,
    social,
  } = formData;
  const handleCallBack = (cb) => setFormData(cb);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        handleCompletion(user);
      } else {
        // if not logged in, modal that will give him the option to sign in or up or go back
        navigate("/sign-in");
        toast.error("You Have To Be Logged In");
      }
    });
  }, []);

  const handleCompletion = async (user) => {
    let formDataCopy = formData;
    formDataCopy.username.inputValue = user.displayName;
    formDataCopy.email.inputValue = user.email;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const propertiesArray = [
        "fullName",
        "bio",
        "pinterest",
        "twitter",
        "instagram",
      ];
      propertiesArray.map((item) => {
        formDataCopy[item].inputValue =
          docSnap.data()?.[item] === undefined ? "" : docSnap.data()[item];
        // if (formDataCopy[item].inputValue !== "") {
        //   formDataCopy[item].state = "defaultSuccess";
        // }
      });
      setFormData({ ...formDataCopy });
    }
  };

  const handleSubmit = async (decision) => {
    if (userInformation || social) {
      try {
        const auth = getAuth();
        if (decision === "userInformation") {
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              await updateEmail(auth.currentUser, email.inputValue)
                .then()
                .catch((error) => {
                  console.log(error);
                  navigate("/sign-in");
                });
              await setDoc(
                doc(db, "users", user.uid),
                {
                  fullName: fullName.inputValue,
                  username: username.inputValue,
                  email: email.inputValue,
                  bio: bio.inputValue,
                },
                { merge: true }
              );
              const formDataCopy = { ...formData };
              formDataCopy.fullName.state = "default";
              formDataCopy.username.state = "default";
              formDataCopy.email.state = "default";
              formDataCopy.bio.state = "default";
              setFormData(formDataCopy);
              toast.success("Successfully Updated User Information");
            } else {
              toast.error("Please Log In Before Changing Information");
            }
          });
        } else if (decision === "social") {
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              await setDoc(
                doc(db, "users", user.uid),
                {
                  pinterest: pinterest.inputValue,
                  twitter: twitter.inputValue,
                  instagram: instagram.inputValue,
                },
                { merge: true }
              );
              const formDataCopy = { ...formData };
              formDataCopy.pinterest.state = "default";
              formDataCopy.twitter.state = "default";
              formDataCopy.instagram.state = "default";
              setFormData(formDataCopy);
              toast.success("Successfully Updated Social Media Information");
            } else {
              toast.error("Please Log In Before Changing Information");
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Something went wrong");
    }
  };

  // Todo: make it work
  const handleProfilePicClick = () => {
    // Create a root reference
    const storage = getStorage();
    const auth = getAuth();
    try {
      const path = "profilePictures/" + auth.currentUser.uid;
      const currentPictuePath = ref(storage, path);

      // const storageRef = ref(storage, "some-child");
      // 'file' comes from the Blob or File API
      // uploadBytes(storageRef, file).then((snapshot) => {
      //   console.log("Uploaded a blob or file!");
      // });
    } catch (error) {
      console.log("not ready");
    }
  };

  const handleLogOut = () => {
    auth.signOut();
    navigate("/sign-in");
  };

  const handleToastMsg = () => {
    toast.info("🤨 Currently not available");
  };

  return (
    <div
      onScroll={updateShowNavbar}
      className="flex h-screen w-full flex-col overflow-scroll bg-bgPrimaryCol pt-8 md:pt-0"
    >
      {/* <Helmet>
        <title>Profile</title>
        <meta name="description" content="" />
      </Helmet> */}
      {/* top */}
      <div className={`${styles.flexCenter} h-[300px] w-full`}>
        <div
          className="h-[180px] w-[180px] bg-cover bg-center"
          style={{ backgroundImage: `url(${ODonutLogo})` }}
          onClick={handleProfilePicClick}
        >
          {/* <div
            className={`w-full h-full bg-[#28293380] opacity-0 hover:opacity-100 ${styles.flexCenter}`}
          >
            <FaCamera size="20%" className="text-inputCol" />
            <input
              type="file"
              name="uploadProfilePic"
              id="uploadProfilePic"
              className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
              accept="image/*"
            />
          </div> */}
        </div>
      </div>

      {/* bottom */}
      <form
        className={`flex w-full flex-col items-center justify-center gap-[10px] px-[22px] pb-[120px] md:px-[0px] md:pb-[40px] xl:flex-row xl:items-start`}
      >
        {/* first Column */}
        <div className="flex w-full flex-col gap-y-[16px] p-[10px] sm:w-[400px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            User Information
          </p>
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[
              fullName.state,
              username.state,
              email.state,
              bio.state,
            ]}
            condition={"one"}
            validation={fullName.validation}
            specificInputObject={fullName}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[
              fullName.state,
              username.state,
              email.state,
              bio.state,
            ]}
            condition={"one"}
            validation={username.validation}
            specificInputObject={username}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[
              fullName.state,
              username.state,
              email.state,
              bio.state,
            ]}
            condition={"one"}
            validation={email.validation}
            specificInputObject={email}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[
              fullName.state,
              username.state,
              email.state,
              bio.state,
            ]}
            condition={"one"}
            validation={bio.validation}
            specificInputObject={bio}
            label={true}
          />
          <motion.div
            whileHover={userInformation ? { scale: 1.02 } : { scale: 1 }}
            whileTap={userInformation ? { scale: 0.98 } : { scale: 1 }}
            className={`${
              styles.flexCenter
            } w-full rounded-xl py-[10px] text-[14px] font-semibold text-lightTextCol ${
              userInformation
                ? "btnPrimaryCol buttonShadow cursor-pointer hover:bg-btnHover"
                : "cursor-default border-[1px] border-solid bg-transparent"
            } `}
            onClick={() => handleSubmit("userInformation")}
          >
            Save Changes
          </motion.div>
        </div>

        {/* Second Column */}
        <div className="flex w-full flex-col gap-y-[16px] p-[10px] sm:w-[400px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            Social Media
          </p>
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[pinterest.state, twitter.state, instagram.state]}
            condition={"one"}
            validation={pinterest.validation}
            specificInputObject={pinterest}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[pinterest.state, twitter.state, instagram.state]}
            condition={"one"}
            validation={twitter.validation}
            specificInputObject={twitter}
            label={true}
          />
          <Input
            callbackFct={handleCallBack}
            formData={formData}
            stateArray={[pinterest.state, twitter.state, instagram.state]}
            condition={"one"}
            validation={instagram.validation}
            specificInputObject={instagram}
            label={true}
          />
          <motion.div
            whileHover={social ? { scale: 1.02 } : { scale: 1 }}
            whileTap={social ? { scale: 0.98 } : { scale: 1 }}
            className={`${
              styles.flexCenter
            } w-full rounded-xl py-[10px] text-[14px] font-semibold text-lightTextCol ${
              social
                ? "btnPrimaryCol buttonShadow cursor-pointer hover:bg-btnHover"
                : "cursor-default border-[1px] border-solid bg-transparent"
            } `}
            onClick={() => handleSubmit("social")}
          >
            Save Changes
          </motion.div>
        </div>
        <div className="flex w-full flex-col gap-y-[16px] p-[10px] sm:w-[400px]">
          <p className={`w-full ${styles.paragraph14} text-lightTextCol`}>
            Legal Information and Logout
          </p>
          {/* Buttons */}
          {/* Button */}
          <div onClick={handleToastMsg} className="flex w-full flex-col">
            <div className="flex w-full flex-col">
              <button
                type="button"
                className={`h-[40px] w-full rounded-xl border-[1px] border-solid text-[14px] font-semibold text-lightTextCol`}
              >
                Terms of Service
              </button>
            </div>
          </div>

          {/* Button */}
          <div onClick={handleToastMsg} className="flex w-full flex-col">
            <div className="flex w-full flex-col">
              <button
                type="button"
                className={`h-[40px] w-full rounded-xl border-[1px] border-solid text-[14px] font-semibold text-lightTextCol`}
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Button */}
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogOut}
                type="button"
                className={`btnPrimaryCol buyinglistBtnHover buttonShadow h-[40px] w-full rounded-xl text-[14px] font-semibold text-lightTextCol hover:bg-btnHover`}
              >
                Logout
              </motion.button>
            </div>
          </div>

          {/* input open (txt) */}
          <div className="flex w-full flex-col">
            <div className="flex w-full items-center gap-[8px] border-b-[1px] border-solid  px-[10px] py-[12px] text-inputCol">
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
