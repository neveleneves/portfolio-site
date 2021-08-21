import React from "react";

import s from "./SectionTitle.module.scss";

export default function SectionTitle(props) {
  const { title } = props;

  return (
    <div className={`${s.title} ${s.title__wrapper}`}>
      <h2 className={s.title__text}>{title}</h2>
      <span className={s.title__line}></span>
    </div>
  );
}
