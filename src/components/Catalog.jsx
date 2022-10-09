import React from "react";
import { v4 as uuidv4 } from "uuid";
import SingleCard from "../utilities/cards/SingleCard";
import Loading from "./Loading";

const Catalog = ({ filteredMeals, navigationOn, callBackId }) => {
  return (
    <div
      className={`flex w-full max-w-[1350px] flex-col justify-center gap-2 px-10 md:flex-row md:flex-wrap md:gap-6`}
    >
      {filteredMeals ? (
        <>
          {filteredMeals.map((meal) => (
            <SingleCard
              key={uuidv4()}
              meal={meal}
              navigationOn={navigationOn}
              callBackId={callBackId}
            />
          ))}
        </>
      ) : (
        <Loading />
      )}

      {/* puffer */}
      <div className="h-24 w-full 600:h-28"></div>
    </div>
  );
};

export default Catalog;
