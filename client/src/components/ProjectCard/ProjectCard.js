import React from "react";

import s from "./ProjectCard.module.scss";

export default function ProjectCard(props) {
  const { title, description, stack, imagePath } = props;

  return (
    <div className={`${s.card} ${s.card__wrapper}`}>
      <div className={s.card__image}>
        <img className={s.image} src={imagePath} alt={title}></img>
      </div>
      <div className={s.card__content}></div>
    </div>
  );
}
