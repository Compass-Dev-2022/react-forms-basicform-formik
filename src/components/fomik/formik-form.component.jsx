import React from "react";
import { useFormik } from "formik";
import "./formik-form.css";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
  radios: "Male",
  checkboxs: ["Red"],
  select: "",
};

const onSubmit = (values, { resetForm }) => {
  alert(JSON.stringify(values, null, 2));

  resetForm({
    values: {
      username: "",
      email: "",
      password: "",
      radios: "Male",
      checkboxs: ["Red"],
      select: "",
    },
  });
};

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  select: Yup.string().required("Number is required"),
});
const FormikForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,

    // validate: (values) => {
    //   let errors = {};
    //   if (!values.username) {
    //     errors.username = "Username is required.";
    //   }
    //   if (!values.email) {
    //     errors.email = "Email is required.";
    //   } else if (
    //     !values.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    //   ) {
    //     errors.email = "Invalid Email";
    //   }
    //   if (!values.password) {
    //     errors.password = "Password is required.";
    //   }
    //   if (!values.select) {
    //     errors.select = "Number is required.";
    //   }
    //   return errors;
    // },
    validationSchema,
  });

  console.log("Formik", formik);

  // initialValue
  // onSubmit
  // validation

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={formik.values.username}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}

            {...formik.getFieldProps("username")}
            className={
              formik.touched.username && formik.errors.username && "errorBorder"
            }
          />
          {formik.touched.username && formik.errors.username && (
            <span className="errorText">{formik.errors.username}</span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("email")}
            className={
              formik.touched.email && formik.errors.email && "errorBorder"
            }
          />
          {formik.touched.email && formik.errors.email && (
            <span className="errorText">{formik.errors.email}</span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("password")}
            className={formik.errors.password && "errorBorder"}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="errorText">{formik.errors.password}</span>
          )}
        </label>
      </div>
      <div>
        {["Male", "Female", "Other"].map((d, i) => (
          <label htmlFor={d} key={d}>
            {d}
            <input
              type="radio"
              id={d}
              name="radios"
              value={d}
              onChange={formik.handleChange}
              checked={formik.values.radios === d}
            />
          </label>
        ))}
      </div>
      <div>
        {["Red", "Blue", "Yellow"].map((d, i) => (
          <label htmlFor={d} key={d}>
            {d}
            <input
              type="checkbox"
              id={d}
              name="checkboxs"
              value={d}
              onChange={formik.handleChange}
              checked={formik.values.checkboxs.includes(d)}
            />
          </label>
        ))}
      </div>
      <div>
        <label htmlFor="select">
          Number
          <select
            id="select"
            name="select"
            value={formik.values.select}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Option</option>

            {[
              {
                label: 1,
                value: 1,
              },
              {
                label: 2,
                value: 2,
              },
              {
                label: 3,
                value: 3,
              },
            ].map((e) => (
              <option value={e.value} key={e.value}>
                {e.label}
              </option>
            ))}
          </select>
          {formik.touched.select && formik.errors.select && (
            <span className="errorText">{formik.errors.select}</span>
          )}
        </label>
      </div>
      <button type="submit" disabled={formik.isSubmitting || !formik.isValid}>
        Submit
      </button>
    </form>
  );
};

export default FormikForm;
