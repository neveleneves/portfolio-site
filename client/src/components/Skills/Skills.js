import React from "react";
import { useSetSkills } from "../../hooks/setSkills.hook";

import SectionTitle from "../SectionTitle/SectionTitle";
import StackItem from "../StackItem/StackItem";

import s from "./Skills.module.scss";

export default function Skills() {
  const { usingSkills, learningSkills } = useSetSkills();

  return (
    <section className={`${s.skills} ${s.skills__wrapper}`}>
      <SectionTitle title={"skills"} />
      <div className={s.skills__content}>
        <div className={s.skills__body}>
          <div className={`${s.stack} ${s.stack__wrapper}`}>
            <h3 className={s.stack__title}>USING NOW:</h3>
            <div className={s.stack__skills}>
              <ul className={s.stack__grid}>
                {usingSkills.map((item, index) => {
                  return (
                    <StackItem
                      SkillLogo={item.skillLogo}
                      skillTitle={item.skillTitle}
                      key={index}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={s.stack}>
            <h3 className={s.stack__title}>LEARNING:</h3>
            <div className={s.stack__skills}>
              <ul className={s.stack__grid}>
                {learningSkills.map((item, index) => {
                  return (
                    <StackItem
                      SkillLogo={item.skillLogo}
                      skillTitle={item.skillTitle}
                      key={index}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
