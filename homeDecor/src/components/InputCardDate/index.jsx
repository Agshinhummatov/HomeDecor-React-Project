import React from "react";
import InputMask from "react-input-mask";
import { useField } from "formik";

const InputCardDate = () => {
  const [field] = useField("cardDate");

  const placeholder = "MM/YY";

  return (
    <>
      <InputMask
        {...field}
        mask="99/99"
        maskChar="_"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputCardDate;
