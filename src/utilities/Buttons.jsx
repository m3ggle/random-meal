import React from 'react'
import styles from '../styles'

const Buttons = ({text}) => {
  return (
    <button
      type="Button"
      className={`${styles.flexCenter} w-full bg-slate-600 py-[10px] h-[46px] rounded-xl text-lightTextCol font-semibold text-[14px] btnPrimaryCol hover:bg-[#293D2B]`}
    >
      {text}
    </button>
  );
}

export default Buttons