import React from "react";
import { Form, Formik } from "formik";
import FormikController from "./formik-controller";
import * as Yup from "yup";

const FormikFormComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          radio: "Male",
          checkboxs: ["Red"],
          selector: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),
          email: Yup.string()
            .email("Invalid Email")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
          selector: Yup.string().required("Number is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({
            values: {
              username: "",
              email: "",
              password: "",

              radio: "Male",
              checkboxs: ["Red"],
              selector: "",
            },
          });
        }}

        //   initialValues={

        //     username:""
        //   }
        //   validate={ }
        //   onSubmit={}
      >
        {(props) => {
          console.log("PropsValues", props);
          return (
            <Form>
              <FormikController
                control="input"
                type="text"
                name="username"
                label="Username"
                placeholder="Enter a username"
              />
              <FormikController
                control="input"
                name="email"
                label="Email"
                placeholder="Enter a email"
                type="text"
              />
              <FormikController
                type="password"
                control="input"
                placeholder="Enter password"
                name="password"
                label="Password"
              />
              <FormikController
                type="radio"
                control="radio-button"
                name="radio"
                label="Human"
                options={["Male", "Female", "Other"]}
              />
              <FormikController
                type="checkbox"
                control="checkbox-button"
                name="checkboxs"
                label="Colors"
                options={["Red", "Blue", "Yellow"]}
              />
              <FormikController
                control="select"
                name="selector"
                label="Number"
                options={["1", "2", "3"]}
              />
              <FormikController
                type="submit"
                label="Submit"
                control="button"
                disabled={!(props.dirty && props.isValid)}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikFormComponent;
