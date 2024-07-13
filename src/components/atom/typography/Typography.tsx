import React from "react";
import { TypographyTextType } from "./Types";

const Typography = ({
  tag,
  text,
  className,
  style,
  children,
  role,
  ariaLabel,
  ariaLabelledBy,
}: TypographyTextType) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    text,
    children
  );
};

export default Typography;
