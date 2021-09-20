import React from "react";

import s from "./Footer.module.scss";
import { ReactComponent as ScrollUp } from "../../img/scroll-up.svg";
import { ReactComponent as Logo } from "../../img/logo.svg";

import { ReactComponent as Inst } from "../../img/inst.svg";
import { ReactComponent as Facebook } from "../../img/facebook.svg";
import { ReactComponent as LinkedIn } from "../../img/linkedin.svg";
import { ReactComponent as Twitter } from "../../img/twitter.svg";
import { ReactComponent as GitHub } from "../../img/github.svg";

export default function Footer(props) {
  return (
    <footer className={s.footer}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__scroll}>
          <a className={s.scroll} onClick={null} href="/">
            <ScrollUp />
            <span className={s.scroll__text}>back to top</span>
          </a>
        </div>
        <nav className={s.navbar}>
          <div className={s.navbar__wrapper}>
            <div className={s.info}>
              <Logo />
              <p className={s.info__text}>© Copyright 2021 | Maxim Nikonov</p>
            </div>
            <ul className={s.links}>
              <li className={s.links__item}>
                <a className={s.links__link} onClick={null} href="/">
                  <Inst />
                </a>
              </li>
              <li className={s.links__item}>
                <a className={s.links__link} onClick={null} href="/">
                  <Twitter />
                </a>
              </li>
              <li className={s.links__item}>
                <a className={s.links__link} onClick={null} href="/">
                  <LinkedIn />
                </a>
              </li>
              <li className={s.links__item}>
                <a className={s.links__link} onClick={null} href="/">
                  <Facebook />
                </a>
              </li>
              <li className={s.links__item}>
                <a className={s.links__link} onClick={null} href="/">
                  <GitHub />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}
