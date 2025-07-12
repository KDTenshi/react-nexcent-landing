import type { FC } from "react";

import style from "./Customers.module.css";

const Customers: FC = () => {
  return (
    <div className={style.Customers}>
      <div className={style.Image}>
        <img src="/customer.png" alt="Customer" />
      </div>
      <div className={style.Info}>
        <p className={style.Text}>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
          ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
          cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum
          pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque
          vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
          amet magna.
        </p>
        <h4 className={style.Name}>Tim Smith</h4>
        <p className={style.Organization}>British Dragon Boat Racing Association</p>
        <div className={style.List}>
          <div className={style.Container}>
            <img src="/client_1.png" alt="Client" />
            <img src="/client_7.png" alt="Client" />
            <img src="/client_6.png" alt="Client" />
            <img src="/client_3.png" alt="Client" />
            <img src="/client_4.png" alt="Client" />
            <img src="/client_5.png" alt="Client" />
          </div>
          <a href="/" className={style.Link}>
            Meet all customers <img src="/arrow.svg" alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Customers;
