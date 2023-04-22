import { useField } from "formik";
import React from "react";

const Checkbox = (props) => {
  const { label, name, options, type } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      {label} :&nbsp;
      {options.map((d, i) => (
        <label htmlFor={d} key={d}>
          {d}
          <input
            type="checkbox"
            id={d}
            {...field}
            value={d}
            checked={field.value.includes(d)}
          />
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
