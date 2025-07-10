import type { FC } from "react";
import style from "./Button.module.css";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonSize = "normal" | "medium" | "small";

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  text: string;
}

const buttonTypeStyles: { [key in ButtonType]: string } = {
  primary: style.Primary,
  secondary: style.Secondary,
  tertiary: style.Tertiary,
};

const buttonSizeStyles: { [key in ButtonSize]: string } = {
  normal: style.Normal,
  medium: style.Medium,
  small: style.Small,
};

const Button: FC<ButtonProps> = ({ type = "primary", size = "normal", disabled = false, text }) => {
  const buttonClassName = [buttonTypeStyles[type], buttonSizeStyles[size]].join(" ");

  return (
    <button className={buttonClassName} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
