import { useField } from "formik";
import React from "react";

const Input = (props) => {
  const { label, name, placeholder, type } = props;
  const [field, meta, helpers] = useField(name);

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
        />
      </label>
    </div>
  );
};

export default Input;
