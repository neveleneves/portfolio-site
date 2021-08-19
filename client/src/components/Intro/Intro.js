import React from "react";

import s from "./Intro.module.scss";

import photo from "../../img/intro-photo.png";

export default function Intro() {
  return (
    <section className={s.intro}>
      <div className={s.intro__wrapper}>
        <div className={s.intro__background} />
        <div className={s.intro__content}>
          <div className={s.content}>
            <div className={s.content__wrapper}>
              <div className={s.text}>
                <div className={s.text__wrapper}>
                  <h1 className={s.text__title}>
                    <span className={s.text__start}>I’m Max Nikonov</span>
                    <br />
                    <span className={s.text__segregate}>
                      Front End Developer
                    </span>
                  </h1>
                  <p className={s.text__body}>
                    I'm a Front End Developer of Web. I have a passion for
                    learning and sharing my knowledge with others. If you found
                    value in something I have created, please feel free to give
                    me a shout out!
                  </p>
                </div>
                {/* <a className={s.cv}>download cv</a> */}
              </div>
              <div className={s.photo}>
                <img
                  className={s.photo__img}
                  src={photo}
                  alt="Profile Photo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
