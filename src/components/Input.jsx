import React from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import useHandleInput from "../hooks/useHandleInput";
import styles from "../styles";

const Input = ({ ...take }) => {
  const {
    callbackFct,
    formData,
    specificInputObject,
    label,
    stateArray,
    condition,
  } = take;

  const { handleInputFocus, handleInputChange, handleInputBlur } =
    useHandleInput();

  const handleFocus = (e) => {
    console.log("hallo")
    callbackFct(handleInputFocus({ e, formData }));
  };
  const handelChange = (e) => {
    callbackFct(handleInputChange({ e, formData }));
  };
  const handleBlur = (e) => {
    callbackFct(handleInputBlur({ e, formData, stateArray, condition }));
  };

  return (
    <div className="w-full flex flex-col">
      {/* Label */}
      {label && (
        <label className={`text-inputCol ${styles.paragraph12}`}>
          {specificInputObject.displayName}
        </label>
      )}
      <div
        className={`text-inputCol w-full border-solid border-b-[1px] ${
          specificInputObject.state === "warning"
            ? "border-warning"
            : specificInputObject.state === "success"
            ? "border-success"
            : specificInputObject.state === "failure"
            ? "border-failure"
            : "border-default"
        } flex items-center px-[10px] gap-[8px] py-[12px]`}
      >
        {/* icon */}
        <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
          <i
            className={`${specificInputObject.icon} text-inputCol text-[15px]`}
          ></i>
        </div>
        {/* text */}
        <input
          id={specificInputObject.id}
          value={specificInputObject.inputValue}
          onChange={handelChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={specificInputObject.type}
          className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
          placeholder={specificInputObject.placeholder}
        />
        <div className={`h-[20px] ${styles.flexCenter} gap-2`}>
          {specificInputObject.active &&
            (specificInputObject.state === "success" ? (
              <FaCheck className="text-success" />
            ) : (
              <FaExclamationCircle className="text-warning" />
            ))}
        </div>
      </div>
      <div
        className={`${
          specificInputObject.state === "failure" ? "flex" : "hidden"
        }  items-center gap-x-[8px] px-2`}
      >
        <div className={`w-[20px] h-[20px] ${styles.flexCenter}`}>
          <FaExclamationTriangle className=" text-failure" />
        </div>
        <p className={`${styles.paragraph12} text-inputCol`}>
          {specificInputObject.errorMessage}
        </p>
      </div>
    </div>
  );
};

export default Input;

/*
// Password eye
const [viewPassword, setViewPassword] = useState(false);
<div className={`h-[20px] ${styles.flexCenter} gap-2`}>
  <div
    className={formData.password.active ? "hidden" : "flex"}
    onClick={() => setViewPassword((prevState) => !prevState)}
  >
    {viewPassword ? <FaEye /> : <FaEyeSlash />}
  </div>
  {formData.password.active &&
    (formData.password.state === "success" ? (
      <FaCheck className="text-success" />
    ) : (
      <FaExclamationCircle className="text-warning" />
    ))}
</div>;
*/
