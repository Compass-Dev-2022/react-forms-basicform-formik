import { useField, ErrorMessage } from "formik";
import React from "react";
import ErrorMassages from "./ErrorMassage";

const Input = (props) => {
  const { label, name, placeholder, type } = props;
  const [field, meta, helpers] = useField(name);

  console.log("Meta", meta);

  return (
    <div>
      <label htmlFor={label}>
        {label}
        <input
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          //   onChange={field.onChange}
          //   onBlur={field.onBlur}
          //   value={field.value}
          {...field}
          className={`${meta.touched && meta?.error && "error_border"}`}
        />

        <ErrorMassages error={meta.touched && meta?.error} />
        {/* <ErrorMessage name={name} />{" "} */}
      </label>
    </div>
  );
};

export default Input;
