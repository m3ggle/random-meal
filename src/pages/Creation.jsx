import { uuidv4 } from "@firebase/util";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCheck, FaChevronLeft, FaTimes } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Catalog from "../components/Catalog";
import Input from "../components/Input";
import SearchFilter from "../components/SearchFilter";
import { useComboContext } from "../context/combos/ComboContext";
import { useMealContext } from "../context/meals/MealContext";
import { useUserContext } from "../context/user/UserContext";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";
import { useGetMeals } from "../hooks/useGetMeals";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardThreeContainer from "../utilities/cards/CardThreeContainer";

const Creation = () => {
  //* context
  const { user, creation, dispatchUser } = useUserContext();
  const { meals, dispatchMeal } = useMealContext();
  const { combos, dispatchCombo } = useComboContext();

  //* states
  const [currentIteration, setCurrentIteration] = useState("mealtitle");
  const [direction] = useState([
    "mealtitle",
    "breakfast",
    "lunch",
    "dinner",
    "preview",
  ]);
  const [formData, setFormData] = useState({
    title: {
      id: "title",
      displayName: "",
      placeholder: "Early Autumn Sunday",
      type: "text",
      inputValue: "",
      active: false,
      state: "default",
      validation: "maxWords",
      overallValidation: "userInformation",
      errorMessage: "Keep it under 20 Characters",
      icon: "fa-solid fa-bowl-food",
    },
    userInformation: false,
  });
  const [createdCombo, setCreatedCombo] = useState({});
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [internalMeals, setInternalMeals] = useState([]);
  const [twoChoice] = useState("first");

  //* import fct/hooks
  const { uploadFavCombos, uploadCombo } = useUploadToFirestore();
  const { width } = useWindowDimensions();
  const { handleGetMealsCombos } = useGetMeals();

  //* destructuring
  const { breakfast, lunch, dinner } = creation;
  const { title, userInformation } = formData;

  //* variables
  const navigate = useNavigate();
  const params = useParams();

  //* on you go
  const handleCallBack = (cb) => setFormData(cb);
  // set currentIteration or redirect to notFound
  useEffect(() => {
    if (direction.includes(params.stepName)) {
      if (params.stepName === "preview") {
        createCombo();
      }
      setCurrentIteration(params.stepName);
    } else {
      navigate("/not-found");
    }
  }, [params.stepName, direction, navigate]);

  // only for mealtitle
  const handleAdd = () => {
    if (userInformation) {
      let creationCopy = { ...creation };
      creationCopy.mealtitle.text = title.inputValue;
      dispatchUser({ type: "UPDATE_CREATION", payload: creationCopy });
      goForward();
    }
  };

  const goForward = () => {
    const stepForward = direction[direction.indexOf(currentIteration) + 1];
    navigate(`/creation/${stepForward}`);
  };

  const goBack = () => {
    const stepBack = direction[direction.indexOf(currentIteration) - 1];
    currentIteration === "mealtitle"
      ? navigate("/favorites")
      : navigate(`/creation/${stepBack}`);
  };

  // context
  useEffect(() => {
    const updateContext = async () => {
      const { formattedCollectedMeals, formattedCombos } =
        await handleGetMealsCombos(
          meals,
          combos,
          user.favMeals,
          user.favCombos,
          "collection"
        );
      if (Object.keys(formattedCollectedMeals).length > 0) {
        dispatchMeal({
          type: "UPDATE_MEALS",
          payload: formattedCollectedMeals,
        });
      }
      if (Object.keys(formattedCombos).length > 0) {
        dispatchCombo({
          type: "UPDATE_COMBOS",
          payload: formattedCombos,
        });
      }
    };

    updateContext();
  }, []);

  // set/updatefavorite Meals (internal)
  useEffect(() => {
    let internalMealsMeals = [];
    Object.keys(meals).map((mealId) => {
      internalMealsMeals.push({ ...meals[mealId] });
    });
    setInternalMeals(internalMealsMeals);
  }, [user, meals]);

  const handleCallbackFilteredMeals = (newlyFiltered) => {
    setFilteredMeals(newlyFiltered);
  };
  const handleCallbackFilteredCombos = () => {};

  // callback for breakfast, lunch, dinner
  const callBackId = (mealId) => {
    let creationCopy = { ...creation };
    creationCopy[currentIteration].id = mealId;
    dispatchUser({ type: "UPDATE_CREATION", payload: creationCopy });

    goForward();
  };

  const createCombo = () => {
    const auth = getAuth();
    const breakfastInfo = { ...meals[breakfast.id] };
    const lunchInfo = { ...meals[lunch.id] };
    const dinnerInfo = { ...meals[dinner.id] };
    let allMeals = [{ ...breakfastInfo }, { ...lunchInfo }, { ...dinnerInfo }];
    // allMeals = singleMeals(allMeals, user.favMeals)

    const getAmount = (nutrientName) => {
      let amount = 0;
      allMeals.map((meal) => {
        meal.nutrients.nutrients.map((nut) => {
          if (nut.name === nutrientName) {
            amount += nut.amount;
          }
        });
      });
      return amount.toFixed(0);
    };

    const newCombo = {
      allIds: [breakfast.id, lunch.id, dinner.id],
      breakfast: breakfast.id,
      lunch: lunch.id,
      dinner: dinner.id,
      likeCount: 1,
      liked: true,
      nutrients: [
        {
          amount: parseInt(getAmount("Calories")),
          name: "Calories",
          unit: "kcal",
        },
        {
          amount: parseInt(getAmount("Fat")),
          name: "Fat",
          unit: "g",
        },
        {
          amount: parseInt(getAmount("Sugar")),
          name: "Sugar",
          unit: "g",
        },
        {
          amount: parseInt(getAmount("Protein")),
          name: "Protein",
          unit: "g",
        },
      ],
      title: creation.mealtitle.text,
      comboId: uuidv4(),
      userId: auth.currentUser.uid,
    };

    setCreatedCombo({ ...newCombo });
  };

  const cleanCreationUserInputs = () => {
    const creationCopy = creation;
    creationCopy.mealtitle.text = "";
    creationCopy.breakfast.id = 0;
    creationCopy.lunch.id = 0;
    creationCopy.dinner.id = 0;
    creationCopy.preview.combo = {};

    dispatchUser({ type: "UPDATE_CREATION", payload: creationCopy });
  };

  const checkValidation = () => {
    if (createdCombo.title < 2 || createdCombo.title > 20) {
      toast.error("🧐 Your Title is too long ");
    } else if (
      !(createdCombo.breakfast && createdCombo.lunch && createdCombo.dinner)
    ) {
      toast.error("🤨 A Meal is missing");
    } else if (creation.allMealIds.length !== 3) {
      toast.error("😩 Something is wrong, please restart the Process");
    } else {
      return true;
    }
  };

  const addComboIdToComboContext = () => {
    const combosCopy = combos;
    combosCopy[createdCombo.comboId] = { ...createdCombo };
    dispatchCombo({
      type: "UPDATE_COMBO",
      payload: {
        id: createdCombo.comboId,
        combo: createdCombo,
      },
    });
  };

  const addComboIdToFavCombos = () => {
    const favCombosCopy = user.favCombos;
    favCombosCopy.push(createdCombo.comboId);
    dispatchUser({ type: "UPDATE_FAVCOMBOS", payload: [...favCombosCopy] });
    uploadFavCombos(favCombosCopy);
  };

  const handleSubmit = async () => {
    if (checkValidation) {
      addComboIdToComboContext();
      addComboIdToFavCombos();
      uploadCombo(createdCombo);
      cleanCreationUserInputs();
      navigate(-5);
    }
  };

  return (
    <div className="fixed top-0 left-0 z-[100] h-screen w-full bg-bgPrimaryCol">
      {/* <Helmet>
        <title>Creation</title>
        <meta name="description" content="" />
      </Helmet> */}
      <div className="relative flex h-screen w-full justify-center overflow-auto ">
        {/* beginning of the actual modal */}
        <div
          className={`modalShadow absolute top-[6%] flex min-h-[94%] w-full flex-col rounded-t-[30px] bg-bgPrimaryCol py-10 px-6 900:top-[13%] 900:min-h-[87%] 900:w-10/12 sm:px-10`}
        >
          {/* top back and leave */}
          <div className="flex h-10 w-full justify-between">
            {/* go back */}
            <motion.div
              onClick={goBack}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`h-11 w-11 rounded-full ${styles.flexCenter}`}
            >
              <FaChevronLeft size="30px" className="text-lightTextCol" />
            </motion.div>
            {/* go leave */}
            <motion.div
              onClick={() => navigate("/favorites")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`h-11 w-11 rounded-full ${styles.flexCenter} cursor-pointer`}
            >
              <FaTimes size="30px" className="text-lightTextCol" />
            </motion.div>
          </div>

          {/* top titel and search + filter */}
          <div className="flex w-full flex-col gap-4 py-4">
            {/* title */}
            <p className={`${styles.heading24} text-lightTextCol`}>
              {creation[currentIteration].title}
            </p>
            <p className={`${styles.heading20} text-lightTextCol`}>
              {creation[currentIteration].subTitle}
            </p>
          </div>

          {/* meals */}
          <div className={`flex w-full flex-1 flex-row pb-3 `}>
            <div className="flex h-fit w-full max-w-[1350px] flex-wrap justify-center gap-2 py-6 600:gap-6">
              {currentIteration === "mealtitle" ? (
                <div className="flex w-[420px] gap-x-4">
                  <Input
                    callbackFct={handleCallBack}
                    formData={formData}
                    stateArray={[title.state]}
                    condition={"all"}
                    validation={title.validation}
                    specificInputObject={title}
                    label={false}
                  />
                  <motion.button
                    whileHover={
                      userInformation ? { scale: 1.02 } : { scale: 1 }
                    }
                    whileTap={userInformation ? { scale: 0.98 } : { scale: 1 }}
                    type="button"
                    onClick={handleAdd}
                    className={`max-h-[46px] min-h-[46px] min-w-[50px] rounded-xl ${
                      styles.flexCenter
                    } text-lightTextCol ${
                      userInformation
                        ? "btnPrimaryCol cursor-pointer"
                        : "cursor-default border-[1px]"
                    }`}
                  >
                    <i className="fa-solid fa-chevron-right text-[15px] text-inputCol"></i>
                  </motion.button>
                </div>
              ) : (
                <>
                  {currentIteration === "preview" ? (
                    <CardThreeContainer combo={createdCombo} />
                  ) : (
                    <>
                      <SearchFilter
                        callbackFilteredMeals={handleCallbackFilteredMeals}
                        callbackFilteredCombos={handleCallbackFilteredCombos}
                        meals={internalMeals}
                        combos={[]}
                        twoChoice={twoChoice}
                        // reversed because combos are first and then meals
                        first="first"
                        second="first"
                      />
                      <Catalog
                        filteredMeals={filteredMeals}
                        navigationOn={false}
                        callBackId={callBackId}
                      />
                    </>
                  )}
                </>
              )}
            </div>
            {/* check btn */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className={`${
                currentIteration === "preview" ? "flex" : "hidden"
              } } btnPrimaryCol
              buttonShadow fixed top-[88%] left-[74%] z-30 h-14 w-14 rounded-full hover:bg-[#293D2B] 600:left-[84%] 600:h-20 600:w-20 ${
                styles.flexCenter
              }`}
            >
              <FaCheck
                size={width > 600 ? "25px" : "20px"}
                className="text-lightTextCol"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;
