import React from "react";
import { useGetProjects } from "../../hooks/getProjects.hook";

import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./Portfolio.module.scss";

export default function Portfolio() {
  const { projects } = useGetProjects();

  return (
    <section className={`${s.portfolio} ${s.portfolio__wrapper}`}>
      <SectionTitle title={"portfolio"} />
      <div className={s.cards}>
        {projects.length !== 0
          ? projects.map((item) => {
              return (
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  stack={item.stack}
                  imagePath={item.image_path}
                  key={item._id}
                />
              );
            })
          : null}
      </div>
    </section>
  );
}
