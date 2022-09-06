import React from 'react'
import styles from '../styles'

const Buttons = ({costumeWidth}) => {
  return (
    <>
      <button
        type="Button"
        className={`${styles.flexCenter} ${
          costumeWidth ? `w-[${costumeWidth}]` : "w-full"
        } bg-slate-600 py-[10px] rounded-xl text-lightTextCol font-semibold text-[14px] btnPrimaryCol hover:bg-[#293D2B]`}
      >
        Button
      </button>
    </>
  );
}

export default Buttons