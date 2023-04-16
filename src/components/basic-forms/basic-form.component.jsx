import React, { useState } from "react";
import "./basic-form.css";
const BasicForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radio, setRadio] = useState("Male");
  const [checkbox, setCheckbox] = useState(["Red"]);
  const [errors, setErrors] = useState(null);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRadio = (event) => {
    setRadio(event.target.value);
  };
  const handleCheckboxs = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setCheckbox([...checkbox, value]);
    } else {
      setCheckbox(checkbox.filter((e) => e !== value));
    }
  };

  const validation = () => {
    let errorText = {};
    let isValid = true;
    if (username.length === 0) {
      isValid = false;
      errorText["username"] = "Username is required";
    }
    if (email.length === 0) {
      isValid = false;
      errorText["email"] = "Email is required";
    } else {
      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errorText["email"] = "Invalid Email";
      }
    }

    if (password.length === 0) {
      isValid = false;
      errorText["password"] = "Password is required";
    }

    setErrors(errorText);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      console.log("SubmitValue", {
        username,
        email,
        password,
        radio,
        checkbox,
      });
    }
  };

  console.log({ errors });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsername}
            className={errors?.username && "errorBorder"}
          />
          {errors?.username && (
            <span className="errorText">{errors?.username}</span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmail}
            className={errors?.email && "errorBorder"}
          />
          {errors?.email && <span className="errorText">{errors?.email}</span>}
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className={errors?.password && "errorBorder"}
          />
          {errors?.password && (
            <span className="errorText">{errors?.password}</span>
          )}
        </label>
      </div>
      <div>
        <label htmlFor="male">
          Male
          <input
            type="radio"
            id="male"
            value={"Male"}
            onChange={handleRadio}
            checked={radio === "Male"}
          />
        </label>
        <label htmlFor="female">
          Female
          <input
            type="radio"
            id="female"
            value={"Female"}
            onChange={handleRadio}
            checked={radio === "Female"}
          />
        </label>
        <label htmlFor="other">
          Other
          <input
            type="radio"
            id="other"
            value={"Other"}
            onChange={handleRadio}
            checked={radio === "Other"}
          />
        </label>
      </div>
      <div>
        <label htmlFor="red">
          Red
          <input
            type="checkbox"
            id="red"
            value={"Red"}
            onChange={handleCheckboxs}
            checked={checkbox.includes("Red")}
          />
        </label>
        <label htmlFor="blue">
          Blue
          <input
            type="checkbox"
            id="blue"
            value={"Blue"}
            onChange={handleCheckboxs}
            checked={checkbox.includes("Blue")}
          />
        </label>
        <label htmlFor="yellow">
          Yellow
          <input
            type="checkbox"
            id="yellow"
            value={"Yellow"}
            onChange={handleCheckboxs}
            checked={checkbox.includes("Yellow")}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
