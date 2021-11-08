import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";
import StackItem from "../StackItem/StackItem";

import s from "./Skills.module.scss";

import { useGetSkills } from "../../hooks/getSkills.hook";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export default function Skills() {
  const { usingSkillsCards, learningSkillsCards, loadingSkills } =
    useGetSkills();

  return (
    <section className={`${s.skills} ${s.skills__wrapper}`}>
      <SectionTitle title={"skills"} />
      <div className={s.skills__content}>
        <div className={s.skills__body}>
          <div className={`${s.stack} ${s.stack__wrapper}`}>
            <h3 className={s.stack__title}>USING NOW:</h3>
            <div className={s.stack__skills}>
              <ul className={s.stack__grid}>
                {Array.isArray(usingSkillsCards) &&
                usingSkillsCards.length !== 0 &&
                !loadingSkills ? (
                  usingSkillsCards.map((item) => {
                    return (
                      <StackItem
                        Logo={item.svg}
                        title={item.name}
                        key={item._id}
                      />
                    );
                  })
                ) : (
                  <LoadingSpinner />
                )}
              </ul>
            </div>
          </div>
          <div className={s.stack}>
            <h3 className={s.stack__title}>LEARNING:</h3>
            <div className={s.stack__skills}>
              <ul className={s.stack__grid}>
                {Array.isArray(learningSkillsCards) &&
                learningSkillsCards.length !== 0 &&
                !loadingSkills ? (
                  learningSkillsCards.map((item) => {
                    return (
                      <StackItem
                        Logo={item.svg}
                        title={item.name}
                        key={item._id}
                      />
                    );
                  })
                ) : (
                  <LoadingSpinner />
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
