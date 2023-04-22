import { useField } from "formik";
import React from "react";

const Radio = (props) => {
  const { name, label, options, type } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <>
      {label} :&nbsp;
      {options.map((d, i) => (
        <label htmlFor={d} key={d}>
          {d}
          <input type={type} {...field} value={d} checked={d === field.value} />
        </label>
      ))}
    </>
  );
};

export default Radio;
