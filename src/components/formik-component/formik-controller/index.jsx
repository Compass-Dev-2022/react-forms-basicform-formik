import React from "react";
import Input from "../formik-elemnts/Input";
import Radio from "../formik-elemnts/Radio";
import Checkbox from "../formik-elemnts/Checkbox";
import Select from "../formik-elemnts/Select";
import Button from "../formik-elemnts/Button";

const FormikContoller = (props) => {
  const { control, ...rest } = props;
  //   console.log("Props", { ...rest });

  // input
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio-button":
      return <Radio {...rest} />;
    case "checkbox-button":
      return <Checkbox {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "button":
      return <Button {...rest} />;
    default:
      null;
  }
};

export default FormikContoller;
