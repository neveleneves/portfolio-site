import React from "react";
import { useGetProjects } from "../../hooks/getProjects.hook";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import s from "./Portfolio.module.scss";

export default function Portfolio() {
  const { portfolioList, loadingPorfolio } = useGetProjects();

  return (
    <section className={`${s.portfolio} ${s.portfolio__wrapper}`}>
      <SectionTitle title={"portfolio"} />
      <div className={s.cards}>
        {Array.isArray(portfolioList) &&
        portfolioList.length !== 0 &&
        !loadingPorfolio ? (
          portfolioList.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                description={item.description}
                marks={item.stack}
                imagePath={item.image_path}
                key={item._id}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </section>
  );
}
