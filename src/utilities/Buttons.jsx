import React from 'react'
import styles from '../styles'

const Buttons = ({costumeWidth, text}) => {
  return (
    <>
      <button
        type="Button"
        className={`${styles.flexCenter} ${
          costumeWidth ? `w-[${costumeWidth}]` : "w-full"
        }  bg-slate-600 py-[10px] h-[46px] rounded-xl text-lightTextCol font-semibold text-[14px] btnPrimaryCol hover:bg-[#293D2B]`}
      >
        {text}
      </button>
    </>
  );
}

export default Buttons