import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaCheck, FaChevronLeft, FaTimes } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SpoonacularContext from "../context/SpoonacularContext";
import Input from "../components/Input";

const Creation = () => {
  const { creation } = useContext(SpoonacularContext);
  const { width } = useWindowDimensions();
  const [selected] = useState("Preview");
  const [currentIteration, setCurrentIteration] = useState("mealTitle");
  const [direction] = useState([
    "mealTitle",
    "breakfast",
    "lunch",
    "dinner",
    "preview",
  ]);
  const navigate = useNavigate();
  const params = useParams();

  // set currentIteration
  useEffect(() => {
    if (direction.includes(params.stepName)) {
      setCurrentIteration(params.stepName);
    } else {
      navigate("/notFound");
    }
  }, [params.stepName, direction, navigate]);

  useEffect(() => {
    // if (storage[currentIteration].title) {
    //   console.log(storage[currentIteration].title);
    // }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-bgPrimaryCol">
      <Helmet>
        <title>Creation</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="relative w-full h-screen overflow-auto flex justify-center ">
        {/* beginning of the actual modal */}
        <div
          className={`absolute top-[6%] 900:top-[13%] w-full min-h-[94%] 900:min-h-[87%] 900:w-10/12 rounded-t-[30px] modalShadow flex flex-col py-10 bg-bgPrimaryCol px-6 sm:px-10`}
        >
          {/* top back and leave */}
          <div className="w-full h-10 flex justify-between">
            {/* go back */}
            <div className={`w-11 h-11 rounded-full ${styles.flexCenter}`}>
              <FaChevronLeft size="30px" className="text-lightTextCol" />
            </div>
            {/* go leave */}
            <div
              onClick={() => navigate(-1)}
              className={`w-11 h-11 rounded-full ${styles.flexCenter} cursor-pointer`}
            >
              <FaTimes size="30px" className="text-lightTextCol" />
            </div>
          </div>

          {/* top titel and search + filter */}
          <div className="w-full flex flex-col gap-4 py-4">
            {/* title */}
            <p className={`${styles.heading24} text-lightTextCol`}>
              {creation[currentIteration].title}
            </p>
            <p className={`${styles.heading20} text-lightTextCol`}>
              {creation[currentIteration].subTitle}
            </p>
            {/* search + filter */}
            {/* //Todo: search and filter component  */}
          </div>

          {/* meals */}
          <div className={`w-full flex flex-row flex-1 pb-3 `}>
            {/* 1. choose titel */}
            <div className={`${currentIteration === "mealTitle" ? "flex" : "hidden"}`}>
              {/* <Input /> */}
            </div>
            {/* 2. Breakfast */}
            <div
              className={`${
                selected === "Breakfast" ? "flex" : "flex"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
            >
              {/* //Todo: catalog Component */}
            </div>
            {/* 2. Lunch */}
            <div
              className={`${
                selected === "Lunch" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
            >
              {/* {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )} */}
            </div>

            {/* 2. Dinner */}
            <div
              className={`${
                selected === "Dinner" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
            >
              {/* {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )} */}
            </div>

            {/* 4. Preview */}
            <div
              className={`${
                selected === "Preview" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
            >
              {/* <CardsSamples type="three" /> */}
            </div>

            {/* check btn */}
            <div
              className={`${
                currentIteration === "preview" ? "flex" : "hidden"
              } fixed top-[88%]
              } left-[74%] 600:left-[84%] btnPrimaryCol buttonShadow hover:bg-[#293D2B] w-14 h-14 600:w-20 600:h-20 z-30 rounded-full ${
                styles.flexCenter
              }`}
            >
              <FaCheck
                size={width > 600 ? "25px" : "20px"}
                className="text-lightTextCol"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;
