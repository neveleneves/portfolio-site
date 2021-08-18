import React from "react";

import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <img src="" alt="" className={s.logo} />
        <nav className={headerMenu}>
          <li className={menuItem}>
            <a className={menuLink}>About me</a>
          </li>
          <li className={menuItem}>
            <a className={menuLink}>Skills</a>
          </li>
          <li className={menuItem}>
            <a className={menuLink}>Porfolio</a>
          </li>
          <li className={menuItem}>
            <a className={menuLink}>Work</a>
          </li>
          <li className={menuItem}>
            <a className={menuLink}>Blog</a>
          </li>
        </nav>
      </div>
    </header>
  );
}
