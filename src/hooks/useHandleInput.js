import useValidation from "./useValidation";

export default function useHandleInput() {
  const { distributor } = useValidation();

  const handleInputFocus = ({ e, formData, validation }) => {
    const { id, value: values } = e.target;
    const { result, errorMsg } = distributor({id, values, validation});
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "success" : "warning",
        active: true,
        errorMessage: errorMsg,
      },
    };
    return formData;
  };

  const handleInputChange = ({
    e,
    formData,
    validation,
  }) => {
    const { id, value: values } = e.target;
    const { result } = distributor({ id, values, validation });
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "success" : "warning",
        inputValue: values,
      },
    };
    return formData;
  };

  const handleInputBlur = ({ e, formData, stateArray, condition, validation }) => {
    const { id, value: values } = e.target;
    const { result } = distributor({id, values, validation});
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "defaultSuccess" : "failure",
        active: false,
      },
      [formData[id].overallValidation]: distributor({
        validation: "userInformation",
        values: stateArray,
        condition,
      })
    };
    console.log(formData[id].overallValidation);
    console.log(formData)
    return formData;
  };

  return { handleInputFocus, handleInputChange, handleInputBlur };
}
