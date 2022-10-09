import React from "react";
import Loading from "../../../components/Loading";
import MealdetailsTop from "./MealdetailsTop"
import MealdetailsHeader from "./MealdetailsHeader"
import MealdetailsInstructions from "./MealdetailsInstructions"
import MealdetailsIngredients from "./MealdetailsIngredients"

const MealdetailsView = ({
  meal,
  specificBuyinglist,
  onIngredientClick,
  navigationBack,
}) => {
  return (
    <div className="relative w-full h-screen overflow-auto flex justify-center">
      {/* beginning of the actual modal */}
      <div
        className={`absolute top-[50px] 900:top-[120px] w-full 900:w-10/12 rounded-t-[30px] modalShadow max-w-[1200px]`}
      >
        {meal ? (
          <>
            <MealdetailsTop
              meal={meal}
              navigationBack={navigationBack}
            />

            <div className="w-full modalGradient flex flex-col px-[30px] 900:px-10 pb-20 gap-y-8 900:gap-y-4">
              <MealdetailsHeader meal={meal} />

              <div className="w-full flex flex-col-reverse gap-y-8 900:gap-x-10 900:py-4">
                <MealdetailsInstructions instructions={meal.instructions} />

                <MealdetailsIngredients
                  specificBuyinglist={specificBuyinglist}
                  onIngredientClick={onIngredientClick}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="h-screen w-full flex justify-center items-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default MealdetailsView;
