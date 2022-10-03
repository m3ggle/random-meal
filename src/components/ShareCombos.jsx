import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardThreeContainer from "../utilities/cards/CardThreeContainer";
import Loading from "./Loading";

const ShareCombos = ({ filteredCombos }) => {
  return (
    <div
      className={`1400:grid flex gap-2 grid-cols-2 flex-wrap w-full px-6 500:px-10 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
    >
      {filteredCombos.length > 0 ? (
        filteredCombos.map((combo) => (
          <CardThreeContainer key={uuidv4()} combo={combo} />
        ))
      ) : (
        <Loading />
      )}
      {/* puffer */}
      <div className="h-24 600:h-28 w-full"></div>
    </div>
  );
};

export default ShareCombos;
