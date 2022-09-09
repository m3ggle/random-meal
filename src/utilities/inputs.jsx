import {
  FaEdit,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import styles from "../styles";

// samples

function inputs() {
  return (
    <div className="flex justify-center items-center h-screen  w-full">
      <div className="bg-slate-800 w-[512px] h-[512px] rounded-xl flex justify-center items-center flex-col gap-y-8 p-6">
        {/* input closed (icon txt) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt + filter) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="w-full flex gap-x-[10px]">
            <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaSearch className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Search For Combinations..."
              />
            </div>
            <div
              className={`w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol`}
            >
              <FaFilter size="14px" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt icon) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaEdit className="text-inputCol" size="15px" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt) */}
        <div className="w-full flex flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt icon) */}
        <div className="w-full flex flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            <div
              className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
            >
              <FaEdit className="text-inputCol w-[15px]" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>
      </div>
    </div>
  );
}

export default inputs;
