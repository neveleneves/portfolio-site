import React from "react";
import { ReactSVG } from 'react-svg'

import s from "./StackItem.module.scss";

export default function StackItem(props) {
  const { logoPath, title } = props;

  return (
    <li className={s.item}>
      <div className={s.item__logo}>
        <ReactSVG src={logoPath}/>
      </div>
      <span className={s.item__title}>{title}</span>
    </li>
  );
}
