import { useField } from "formik";
import React from "react";
import ErrorMassages from "./ErrorMassage";

const Select = (props) => {
  const { label, name, options } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <label htmlFor={name}>
        {label}
        <select id={name} name={name} {...field}>
          <option value="">Select Option</option>

          {options.map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
        <ErrorMassages error={meta.touched && meta.error} />
      </label>
    </div>
  );
};

export default Select;
