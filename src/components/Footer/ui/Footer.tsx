import type { FC } from "react";

import style from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Info}>
        <img src="/logo_white.png" alt="Logo" />
        <div className={style.Copyright}>
          <p className={style.Text}>Copyright © 2020 Nexcent ltd.</p>
          <p className={style.Text}>All rights reserved</p>
        </div>
        <div className={style.Socials}>
          <a href="/" className={style.Social}>
            <img src="/ig_icon.svg" alt="Instagram" />
          </a>
          <a href="/" className={style.Social}>
            <img src="/web_icon.svg" alt="Website" />
          </a>
          <a href="/" className={style.Social}>
            <img src="/twitter_icon.svg" alt="Twitter" />
          </a>
          <a href="/" className={style.Social}>
            <img src="/yt_icon.svg" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className={style.Links}>
        <div className={style.Column}>
          <h4 className={style.Title}>Company</h4>
          <nav className={style.List}>
            <a href="/" className={style.Link}>
              About us
            </a>
            <a href="/" className={style.Link}>
              Blog
            </a>
            <a href="/" className={style.Link}>
              Contact us
            </a>
            <a href="/" className={style.Link}>
              Pricing
            </a>
            <a href="/" className={style.Link}>
              Testimonials
            </a>
          </nav>
        </div>
        <div className={style.Column}>
          <h4 className={style.Title}>Support</h4>
          <nav className={style.List}>
            <a href="/" className={style.Link}>
              Help center
            </a>
            <a href="/" className={style.Link}>
              Terms of service
            </a>
            <a href="/" className={style.Link}>
              Legal
            </a>
            <a href="/" className={style.Link}>
              Privacy policy
            </a>
            <a href="/" className={style.Link}>
              Status
            </a>
          </nav>
        </div>
        <div className={style.Subscribe}>
          <h4 className={style.Title}>Stay up to date</h4>
          <form className={style.Form}>
            <input type="text" className={style.Input} placeholder="Your email address" />
            <button className={style.Button}>
              <img src="/send_icon.svg" alt="Send" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
