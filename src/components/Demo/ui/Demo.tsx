import type { FC } from "react";

import style from "./Demo.module.css";
import Button from "../../../shared/ui/Button/Button";

const Demo: FC = () => {
  return (
    <div className={style.Demo}>
      <h1 className={style.Title}>Pellentesque suscipit fringilla libero eu.</h1>
      <Button text="Get a Demo" />
    </div>
  );
};

export default Demo;
