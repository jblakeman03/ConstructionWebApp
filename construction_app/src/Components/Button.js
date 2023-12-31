import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  to,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0];

  return (
    <Link to={to} className="btn-mobile">
      <button className="{btn ${checkButtonStyle} ${checkButtonSize}">
        {" "}
        {children}
      </button>
    </Link>
  );
};
