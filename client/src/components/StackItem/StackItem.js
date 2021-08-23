import React from "react";

import s from "./StackItem.module.scss";

export default function StackItem(props) {
  const { SkillLogo, skillTitle } = props;

  return (
    <li className={s.item}>
      <div className={s.item__logo}>
        <SkillLogo />
      </div>
      <span className={s.item__title}>{skillTitle}</span>
    </li>
  );
}
