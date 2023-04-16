import React, { useState } from "react";
import "./basic-form.css";
const BasicFormOptimization = () => {
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    radio: "Male",
    checkbox: ["Red"],
  });
  const [errors, setErrors] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleCheckboxs = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setState({
        ...state,
        checkbox: [...state.checkbox, value],
      });
    } else {
      setState({
        ...state,
        checkbox: state.checkbox.filter((e) => e !== value),
      });
    }
  };

  const validation = () => {
    let errorText = {};
    let isValid = true;
    if (state.username.length === 0) {
      isValid = false;
      errorText["username"] = "Username is required";
    }
    if (state.email.length === 0) {
      isValid = false;
      errorText["email"] = "Email is required";
    } else {
      if (!state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errorText["email"] = "Invalid Email";
      }
    }

    if (state.password.length === 0) {
      isValid = false;
      errorText["password"] = "Password is required";
    }

    setErrors(errorText);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      console.log(
        "SubmitValue",
        state.username,
        state.email,
        state.password,
        state.radio,
        state.checkbox
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">
          Username
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={handleInputChange}
            className={errors?.username && "errorBorder"}
            name="username"
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
            value={state.email}
            onChange={handleInputChange}
            className={errors?.email && "errorBorder"}
            name="email"
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
            value={state.password}
            onChange={handleInputChange}
            className={errors?.password && "errorBorder"}
            name="password"
          />
          {errors?.password && (
            <span className="errorText">{errors?.password}</span>
          )}
        </label>
      </div>
      <div>
        {["Male", "Female", "Other"].map((e) => (
          <label htmlFor={e}>
            {e}
            <input
              type="radio"
              id={e}
              value={e}
              onChange={handleInputChange}
              checked={state.radio === e}
              name="radio"
            />
          </label>
        ))}
      </div>
      <div>
        {["Red", "Blue", "Yellow"].map((e) => (
          <label htmlFor={e}>
            {e}
            <input
              type="checkbox"
              id={e}
              value={e}
              onChange={handleCheckboxs}
              checked={state.checkbox.includes(e)}
            />
          </label>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicFormOptimization;
