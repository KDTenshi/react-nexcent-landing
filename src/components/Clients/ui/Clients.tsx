import type { FC } from "react";

import style from "./Clients.module.css";

const Clients: FC = () => {
  return (
    <div className={style.Clients}>
      <h2 className={style.Title}>Our clients</h2>
      <p className={style.Text}>We have been working with some Fortune 500+ clients</p>
      <div className={style.Logos}>
        <img src="/client_1.png" alt="Client Logo" />
        <img src="/client_7.png" alt="Client Logo" />
        <img src="/client_2.png" alt="Client Logo" />
        <img src="/client_3.png" alt="Client Logo" />
        <img src="/client_4.png" alt="Client Logo" />
        <img src="/client_5.png" alt="Client Logo" />
        <img src="/client_6.png" alt="Client Logo" />
      </div>
    </div>
  );
};

export default Clients;
