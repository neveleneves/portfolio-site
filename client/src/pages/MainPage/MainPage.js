import React from "react";

import s from "./MainPage.module.scss";

import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Work from "../../components/Work/Work";
import Blog from "../../components/Blog/Blog";

export default function MainPage() {
  return (
    <main className="main">
      <Intro />
      <div className={s.main__wrapper}>
        <About />
        <Skills />
        <Portfolio />
        <Work />
        <Blog />
      </div>
    </main>
  );
}
