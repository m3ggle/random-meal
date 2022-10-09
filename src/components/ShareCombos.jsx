import React from "react";
import { v4 as uuidv4 } from "uuid";
import CardThreeContainer from "../utilities/cards/CardThreeContainer";
import Loading from "./Loading";

const ShareCombos = ({ filteredCombos }) => {
  return (
    <div
      className={`flex w-full max-w-[1350px] grid-cols-2 flex-wrap justify-center gap-2 px-6 300:gap-5 500:px-10 600:gap-6 1400:grid`}
    >
      {filteredCombos.length > 0 ? (
        filteredCombos.map((combo) => (
          <CardThreeContainer key={uuidv4()} combo={combo} />
        ))
      ) : (
        <Loading />
      )}
      {/* puffer */}
      <div className="h-24 w-full 600:h-28"></div>
    </div>
  );
};

export default ShareCombos;
