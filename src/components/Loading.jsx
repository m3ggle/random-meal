import React from "react";

const Loading = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative h-24 w-24 animate-spin rounded-full bg-gradient-to-r from-[#009FFF] via-[#EC2F4B] via-[#FC00FF] to-[#00DBDE]">
        <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-bgPrimaryCol"></div>
      </div>
    </div>
  );
};

export default Loading;
