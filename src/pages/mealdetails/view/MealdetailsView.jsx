import React from "react";
import Loading from "../../../components/Loading";
import MealdetailsHeader from "./MealdetailsHeader";
import MealdetailsIngredients from "./MealdetailsIngredients";
import MealdetailsInstructions from "./MealdetailsInstructions";
import MealdetailsTop from "./MealdetailsTop";

const MealdetailsView = ({
  meal,
  specificBuyinglist,
  onIngredientClick,
  navigationBack,
}) => {
  return (
    <div className="relative flex h-screen w-full justify-center overflow-auto">
      {/* beginning of the actual modal */}
      <div
        className={`modalShadow absolute top-[50px] w-full max-w-[1200px] rounded-t-[30px] 900:top-[120px] 900:w-10/12`}
      >
        {meal ? (
          <>
            <MealdetailsTop meal={meal} navigationBack={navigationBack} />

            <div className="modalGradient flex w-full flex-col gap-y-8 px-[30px] pb-20 900:gap-y-4 900:px-10">
              <MealdetailsHeader meal={meal} />

              <div className="flex w-full flex-col-reverse gap-y-8 900:gap-x-10 900:py-4">
                <MealdetailsInstructions instructions={meal.instructions} />

                <MealdetailsIngredients
                  specificBuyinglist={specificBuyinglist}
                  onIngredientClick={onIngredientClick}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-screen w-full items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default MealdetailsView;
