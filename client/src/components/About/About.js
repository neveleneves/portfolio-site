import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./About.module.scss";

export default function AboutMe() {
  return (
    <section className={`${s.about} ${s.about__wrapper}`}>
      <SectionTitle title={"about me"} />
      <div className={s.content}>
        <p className={s.content__text}>
          I’m 23 years old and I am from Russia. Currently improving my Front
          End (ReactJS) and Back End (NodeJS, ExpressJS) skills, also I'm
          learning English. In the future, I plan to develop in the field of web
          development and become a Full Stack developer. Also, In my free time,
          I play sports and create a marketplace for Raite branded items. For
          more information about my experience, check out my CV.
        </p>
      </div>
    </section>
  );
}
