import type { FC, ReactElement } from "react";
import style from "./Icon.module.css";

type IconType = "arrow" | "arrow_small";
type IconColor = "green" | "white";

interface IconProps {
  type: IconType;
  color?: IconColor;
}

const iconsSVG: { [key in IconType]: ReactElement } = {
  arrow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  arrow_small: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2502 11.0002L13.7199 8.53045C14.0129 8.23755 14.0129 7.76266 13.7199 7.46976L11.2502 5.00003M13.5003 8.00011L2.5 8.00011"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const iconColorStyles: { [key in IconColor]: string } = {
  green: style.Green,
  white: style.White,
};

const Icon: FC<IconProps> = ({ type, color = "green" }) => {
  return <span className={iconColorStyles[color]}>{iconsSVG[type]}</span>;
};

export default Icon;
