import React from "react";

const Button = (props) => {
    const { label, type } = props;
    console.log("props", props);
    return <button type={type}>{label}</button>;
};

export default Button;
