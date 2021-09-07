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

  useEffect(() => {
    let isCancelled = false;

    const usingLogo = [JS, HTML, CSS, React, Node, Mongo, GitHub, Figma];
    const learningLogo = [React, Express, SASS];

    const getSkillList = async () => {
      try {
        if (!isCancelled) {
          const response = await fetch(`/api/main/skills`, {
            method: "GET",
          });
          const skillList = await response.json();

          if (!response.ok) {
            throw new Error(
              skillList.message || "The request was executed incorrectly"
            );
          }

          if (skillList.length) {
            let usingSkillsList = skillList.filter(
              (item) => item.type === "using_stack"
            );
            let learningSkillsList = skillList.filter(
              (item) => item.type === "learning_stack"
            );

            setUsingSkills(
              usingSkillsList.map((item, index) => {
                item.svg = usingLogo[index];
                return item;
              })
            );
            setLearningSkills(
              learningSkillsList.map((item, index) => {
                item.svg = learningLogo[index];
                return item;
              })
            );
          }
        }
      } catch (e) {
        console.warn("The request was executed incorrectly: ", e.message)
      }
    };
    getSkillList();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { usingSkills, learningSkills };
};
