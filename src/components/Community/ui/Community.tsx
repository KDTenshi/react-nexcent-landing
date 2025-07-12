import type { FC } from "react";

import style from "./Community.module.css";

const items = [
  {
    image: "/membership.png",
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/associations.png",
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: "/groups.png",
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Community: FC = () => {
  return (
    <div className={style.Community}>
      <h2 className={style.Title}>Manage your entire community in a single system</h2>
      <p className={style.Text}>Who is Nextcent suitable for?</p>
      <div className={style.Info}>
        {items.map((item) => (
          <div className={style.Item} key={item.title}>
            <img src={item.image} alt={item.title} />
            <h3 className={style.Item_Title}>{item.title}</h3>
            <p className={style.Item_Text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
