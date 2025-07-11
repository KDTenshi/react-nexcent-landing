import type { FC } from "react";

import style from "./Banner.module.css";
import Button from "../../../shared/ui/Button/Button";

const Banner: FC = () => {
  return (
    <div className={style.Banner}>
      <div className={style.Text}>
        <h1 className={style.Title}>
          Lessons and insight
          <br />
          <span>from 8 years</span>
        </h1>
        <p className={style.Subtitle}>Where to grow your business as a photographer: site or social media?</p>
        <Button text="Register" size={"normal"} />
      </div>
      <div className={style.Image}>
        <img src="/banner.png" alt="Banner" />
      </div>
      <div className={style.Dots}>
        <div className={[style.Dot, style.Dot_Active].join(" ")}></div>
        <div className={style.Dot}></div>
        <div className={style.Dot}></div>
      </div>
    </div>
  );
};

export default Banner;
