import React from "react";

import s from "./StackItem.module.scss";

export default function StackItem(props) {
  const { Logo, title } = props;

  return (
    <li className={s.item}>
      <div className={s.item__logo}>
        <Logo/>
      </div>
      <span className={s.item__title}>{title}</span>
    </li>
  );
}
