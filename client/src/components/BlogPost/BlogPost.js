import React from "react";

import s from "./BlogPost.module.scss";

export default function BlogPost(props) {
  const {title, subtitle, body_text, date_creation, image_path} = props
  console.log(title)

  return (
    <li className={`${s.post} ${s.post__wrapper}`}>
      <h2 className={s.post__title}>{title}</h2>
    </li>
  );
}
