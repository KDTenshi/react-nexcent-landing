import type { FC } from "react";

import style from "./Calender.module.css";
import Button from "../../../shared/ui/Button/Button";

const Calender: FC = () => {
  return (
    <div className={style.Calender}>
      <div className={style.Image}>
        <img src="/calender.png" alt="Calender" />
      </div>
      <div className={style.Info}>
        <h2 className={style.Title}>How to design your site footer like we did</h2>
        <p className={style.Text}>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc
          varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
          platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
          ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
          Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
          gravida.
        </p>
        <Button text="Learn more" />
      </div>
    </div>
  );
};

export default Calender;
