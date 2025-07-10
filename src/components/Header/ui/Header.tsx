import type { FC } from "react";
import style from "./Header.module.css";
import Button from "../../../shared/ui/Button/Button";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <img src="/Logo.png" alt="" />
      <nav className={style.Links}>
        <a href="/" className={style.Link}>
          Home
        </a>
        <a href="/" className={style.Link}>
          Service
        </a>
        <a href="/" className={style.Link}>
          Feature
        </a>
        <a href="/" className={style.Link}>
          Product
        </a>
        <a href="/" className={style.Link}>
          Testimonial
        </a>
        <a href="/" className={style.Link}>
          FAQ
        </a>
      </nav>
      <div className={style.User}>
        <Button type={"tertiary"} size={"medium"} text="Login" />
        <Button type={"primary"} size={"medium"} text="Sign up" />
      </div>
    </header>
  );
};

export default Header;
