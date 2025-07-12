import type { FC } from "react";

import style from "./Achievments.module.css";

const counts = [
  { image: "/members.svg", title: "Members", number: "2,245,341" },
  { image: "/clubs.svg", title: "Clubs", number: "46,328" },
  { image: "/bookings.svg", title: "Event Bookings", number: "828,867" },
  { image: "/payments.svg", title: "Payments", number: "1,926,436" },
];

const Achievments: FC = () => {
  return (
    <div className={style.Achievments}>
      <div className={style.Info}>
        <h2 className={style.Title}>
          Helping a local
          <br />
          <span>business reinvent itself</span>
        </h2>
        <p className={style.Text}>We reached here with our hard work and dedication</p>
      </div>
      <div className={style.Counts}>
        {counts.map((count) => (
          <div className={style.Count} key={count.title}>
            <div className={style.Count_Icon}>
              <img src={count.image} alt={count.title} />
            </div>
            <div className={style.Count_Info}>
              <h3 className={style.Count_Number}>{count.number}</h3>
              <p className={style.Count_Title}>{count.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievments;
