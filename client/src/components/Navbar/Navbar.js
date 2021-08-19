import React from "react";

import s from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <svg
          width="44"
          height="24"
          viewBox="0 0 44 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5947 0V24H21.6593V9.60684L16.2097 24H11.4197L5.93547 9.57265V24H0V0H7.01149L13.8494 16.6154L20.618 0H27.5947ZM43.4563 24H37.5208L27.5937 9.19658L27.5947 24H21.6593L21.6582 0H27.5947L37.5208 14.8718V0H43.4563V24Z"
            fill="white"
          />
        </svg>
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
