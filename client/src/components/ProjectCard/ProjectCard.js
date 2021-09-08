import React from "react";

import s from "./ProjectCard.module.scss";
import ProjectMark from "../ProjectMark/ProjectMark";

export default function ProjectCard(props) {
  const { title, description, marks, imagePath } = props;
  const image = require('../../img/project-1.png');

  return (
    <div className={`${s.card} ${s.card__wrapper}`}>
      <div className={s.card__image}>
        <img className={s.image} src={image.default} alt={title}></img>
      </div>
      <div className={s.card__content}>
        <div className={s.content}>
          <h2 className={s.content__title}>{title}</h2>
          <div className={s.content__marks}>
            <ul className={s.marks}>
              {marks.length !== 0
                ? marks.map((item, index) => {
                    return <ProjectMark titleMark={item} key={index} />;
                  })
                : null}
            </ul>
          </div>
          <div className={s.description}>
            <p className={s.description__text}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
