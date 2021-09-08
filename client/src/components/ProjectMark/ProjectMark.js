import React from "react";

import s from "./ProjectMark.module.scss";

export default function ProjectMark(props) {
  const { titleMark } = props;
  
  return (
    <li className={s.marks__item}>
      <a className={s.marks__link} onClick={null} href="/">
        {titleMark}
      </a>
    </li>
  );
}
