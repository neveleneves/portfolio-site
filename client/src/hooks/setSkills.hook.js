import { useState, useEffect } from "react";

//Using Now
import { ReactComponent as JS } from "../img/js.svg";
import { ReactComponent as HTML } from "../img/html.svg";
import { ReactComponent as CSS } from "../img/css.svg";
import { ReactComponent as React } from "../img/react.svg";
import { ReactComponent as Node } from "../img/node.svg";
import { ReactComponent as Mongo } from "../img/mongo.svg";
import { ReactComponent as GitHub } from "../img/git.svg";
import { ReactComponent as Figma } from "../img/figma.svg";

//Learning
import { ReactComponent as Express } from "../img/express.svg";
import { ReactComponent as SASS } from "../img/sass.svg";

export const useSetSkills = () => {
  const [usingSkills, setUsingSkills] = useState([]);
  const [learningSkills, setLearningSkills] = useState([]);

  const usingLogo = [JS, HTML, CSS, React, Node, Mongo, GitHub, Figma];
  const usingTitle = [
    "JS",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "MongoDB",
    "GitHub",
    "Figma",
  ];

  const learningLogo = [React, Express, SASS];
  const learningTitle = ["React.js", "Express.js", "SASS"];

  useEffect(() => {
    setUsingSkills(
      usingLogo.map((skill, index) => {
        return {
          skillLogo: skill,
          skillTitle: usingTitle[index],
        };
      })
    );

    setLearningSkills(
      learningLogo.map((skill, index) => {
        return {
          skillLogo: skill,
          skillTitle: learningTitle[index],
        };
      })
    );
  }, []);

  return { usingSkills, learningSkills };
};
