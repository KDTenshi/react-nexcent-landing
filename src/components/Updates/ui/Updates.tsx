import type { FC } from "react";

import style from "./Updates.module.css";

const cards = [
  { image: "/card_1.png", title: "Creating Streamlined Safeguarding Processes with OneRen" },
  { image: "/card_2.png", title: "What are your safeguarding responsibilities and how can you manage them?" },
  { image: "/card_3.png", title: "Revamping the Membership Model with Triathlon Australia" },
];

const Updates: FC = () => {
  return (
    <div className={style.Updates}>
      <div className={style.Info}>
        <h2 className={style.Title}>Caring is the new marketing</h2>
        <p className={style.Text}>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's
          joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </div>
      <div className={style.Cards}>
        {cards.map((card) => (
          <div className={style.Card} key={card.title}>
            <img src={card.image} alt={card.title} />
            <div className={style.Card_Info}>
              <h4 className={style.Card_Title}>{card.title}</h4>
              <a href="/" className={style.Card_Link}>
                Readmore <img src="/arrow.svg" alt="Arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
