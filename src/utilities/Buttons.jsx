import React from "react";
import styles from "../styles";

const Buttons = ({ text }) => {
  return (
    <button
      type="Button"
      className={`${styles.flexCenter} btnPrimaryCol h-[46px] w-full rounded-xl bg-slate-600 py-[10px] text-[14px] font-semibold text-lightTextCol hover:bg-[#293D2B]`}
    >
      {text}
    </button>
  );
};

export default Buttons;
