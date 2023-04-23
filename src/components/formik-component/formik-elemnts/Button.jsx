import { useField } from "formik";
import React from "react";

const Button = (props) => {
  const { label, type, disabled } = props;
  console.log("props", props);
  return (
    <button type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
