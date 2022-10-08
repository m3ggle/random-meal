import React from "react";
import { Else, If, Then } from "react-if";
import Loading from "../../../components/Loading";
import MealdetailsHeader from "./MealdetailsHeader";
import MealdetailsIngredients from "./MealdetailsIngredients";
import MealdetailsInstructions from "./MealdetailsInstructions";
import MealdetailsTop from "./MealdetailsTop";

function MealdetailsView({ meal, specificBuyinglist, onIngredientClick }) {
  return (
    <div className="relative w-full h-screen overflow-auto flex justify-center">
      {/* beginning of the actual modal */}
      <div
        className={`absolute top-[50px] 900:top-[120px] w-full 900:w-10/12 rounded-t-[30px] modalShadow max-w-[1200px]`}
      >
        <If condition={meal}>
          <Then>
            {/* top pic */}
            <MealdetailsTop image={meal.mealinformation.image} />

            {/* bottom information */}
            <div className="w-full modalGradient flex flex-col px-[30px] 900:px-10 pb-20 gap-y-8 900:gap-y-4">
              <MealdetailsHeader meal={meal} />

              {/* instructions + ingredients */}
              <div className="w-full flex flex-col-reverse gap-y-8 900:gap-x-10 900:py-4">
                {/* instructions */}
                <MealdetailsInstructions instructions={meal.instructions} />

                {/* ingredients */}
                <MealdetailsIngredients
                  specificBuyinglist={specificBuyinglist}
                  onIngredientClick={onIngredientClick}
                />
              </div>
            </div>
          </Then>
          <Else>
            <div className="h-screen w-full flex justify-center items-center">
              <Loading />
            </div>
          </Else>
        </If>
      </div>
    </div>
  );
}

export default MealdetailsView;
