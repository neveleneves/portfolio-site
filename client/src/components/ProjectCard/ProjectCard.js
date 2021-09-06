import React from "react";

import s from "./ProjectCard.module.scss";

export default function ProjectCard() {
  return (
    <div className={`${s.card} ${s.card__wrapper}`}>
      <div className={s.card__image}>
        <img className={s.image} src={null} alt="Project-1"></img>
      </div>
      <div className={s.card__content}></div>
    </div>
  );
}
