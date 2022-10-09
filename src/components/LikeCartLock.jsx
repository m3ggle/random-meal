import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";

const LikeCartLock = () => {
  return (
    <div className="absolute top-[8%] left-[90%] z-10 flex h-fit w-fit flex-col gap-y-[10px] bg-black 500:top-[12%] 500:left-[92%]">
      <FaHeart size="24px" className="text-iconTransCol drop-shadow-cardIcon" />
      <FaShoppingCart
        size="24px"
        className="text-iconTransCol drop-shadow-cardIcon"
      />
      <FaLock size="24px" className="text-iconTransCol drop-shadow-cardIcon" />
    </div>
  );
};

export default LikeCartLock;
