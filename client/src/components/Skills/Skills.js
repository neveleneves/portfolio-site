import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={`${s.skills} ${s.skills__wrapper}`}>
      <SectionTitle title={"skills"} />
      <div className={s.skills__content}>
        <div className={s.content}>
          <div className={s.content__using}></div>
          <div className={s.content__learning}></div>
        </div>
      </div>
    </section>
  );
}
