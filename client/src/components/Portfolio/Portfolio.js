import React from "react";
import { useGetProjects } from "../../hooks/getProjects.hook";

import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./Portfolio.module.scss";

export default function Portfolio() {
  const profileProjects = useGetProjects();

  return (
    <section className={`${s.portfolio} ${s.portfolio__wrapper}`}>
      <SectionTitle title={"portfolio"} />
      <div className={s.cards}>
        <ProjectCard 
        
        />
        <ProjectCard 
        
        />
        <ProjectCard 

        />
      </div>
    </section> 
  );
}
