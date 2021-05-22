import React from "react";
import "./style.scss";

export default function BaseButton(props) {
  const { type = "button", variant = "primary", children, ...rest } = props;

  return (
    <button className={`base-button ${variant}`} type={type} {...rest}>
      {children}
    </button>
  );
}
