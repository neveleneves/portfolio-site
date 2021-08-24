import React from "react";

import s from "./MainPage.module.scss";

import Intro from "../../components/Intro/Intro";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";

export default function MainPage() {
  return (
    <main className="main">
      <Intro />
      <div className={s.main__wrapper}>
        <About />
        <Skills />
        <Portfolio />
      </div>
    </main>
  );
}
