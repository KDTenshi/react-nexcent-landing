import type { FC } from "react";

import style from "./Unlock.module.css";
import Button from "../../../shared/ui/Button/Button";

const Unlock: FC = () => {
  return (
    <div className={style.Unlock}>
      <div className={style.Image}>
        <img src="/unlock.png" alt="Unlock" />
      </div>
      <div className={style.Info}>
        <h2 className={style.Title}>The unseen of spending three years at Pixelgrade</h2>
        <p className={style.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est
          varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam
          pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button text="Learn more" />
      </div>
    </div>
  );
};

export default Unlock;
