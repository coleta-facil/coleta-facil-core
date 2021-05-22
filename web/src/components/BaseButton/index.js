import React from "react";
import "./style.scss";

export default function BaseButton(props) {
  const { type = "button", style, children } = props;

  return (
    <button
      className="base-button"
      type={type}
      style={style}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
}