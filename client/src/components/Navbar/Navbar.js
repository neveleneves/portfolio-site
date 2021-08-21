import React from "react";

import s from "./Navbar.module.scss";

import { ReactComponent as Logo } from "../../img/logo.svg";

export default function Navbar() {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <Logo/>
        <nav className={s.menu}>
          <div className={s.menu__wrapper}>
            <li className={s.menu__item}>
              <a className={s.menu__link} onClick={null} href="#about-me">
                About me
              </a>
            </li>
            <li className={s.menu__item}>
              <a className={s.menu__link} onClick={null} href="#skills">
                Skills
              </a>
            </li>
            <li className={s.menu__item}>
              <a className={s.menu__link} onClick={null} href="#portfolio">
                Porfolio
              </a>
            </li>
            <li className={s.menu__item}>
              <a className={s.menu__link} onClick={null} href="#work">
                Work
              </a>
            </li>
            <li className={s.menu__item}>
              <a className={s.menu__link} onClick={null} href="#blog">
                Blog
              </a>
            </li>
          </div>
        </nav>
      </div>
    </header>
  );
}
