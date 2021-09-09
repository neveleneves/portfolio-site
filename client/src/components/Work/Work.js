import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./Work.module.scss";

export default function Work() {
  return (
    <section className={`${s.work} ${s.work__wrapper}`}>
      <SectionTitle title={"work"} />
      <h2 className={s.work__message}>No work experience yet</h2>
    </section>
  );
}
