import type { FC } from "react";
import style from "./Header.module.css";
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
        <button className={style.Login}>Login</button>
        <button className={style.Signup}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
