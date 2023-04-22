import React from "react";
import { Form, Formik } from "formik";
import FormikContoller from "./formik-controller";

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
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm({
            values: {
              username: "",
              email: "",
              password: "",

              radio: "",
              checkboxs: [],
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
              <FormikContoller
                control="input"
                type="text"
                name="username"
                label="Username"
                placeholder="Enter a username"
              />
              <FormikContoller
                control="input"
                name="email"
                label="Email"
                placeholder="Enter a email"
                type="email"
              />
              <FormikContoller
                type="password"
                control="input"
                name="password"
                label="Password"
              />
              <FormikContoller
                type="radio"
                control="radio-button"
                name="radio"
                label="Human"
                options={["Male", "Female", "Other"]}
              />
              <FormikContoller
                type="checkbox"
                control="checkbox-button"
                name="checkboxs"
                label="Colors"
                options={["Red", "Blue", "Yellow"]}
              />
              <FormikContoller
                control="select"
                name="selector"
                label="Number"
                options={["1", "2", "3"]}
              />
              <FormikContoller type="submit" label="Submit" control="button" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikFormComponent;
