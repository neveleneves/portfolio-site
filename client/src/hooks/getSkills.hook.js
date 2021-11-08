import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { getSkillsList } from "../redux/action/skillsActions";

export const useGetSkills = () => {
  const dispatch = useDispatch();
  const { usingSkills, learningSkills, loadingSkills} = useSelector((state) => state.skills);

  const [usingSkillsCards, setUsingSkillsCards] = useState([]);
  const [learningSkillsCards, setLearningSkillsCards] = useState([]);

  useEffect(() => {
    dispatch(getSkillsList());
  }, [dispatch]);

  useEffect(() => {
    if (learningSkills?.length && usingSkills?.length) {
      const usingLogo = [JS, HTML, CSS, React, Node, Mongo, GitHub, Figma];
      const learningLogo = [React, Express, SASS];

      setUsingSkillsCards(
        usingSkills.map((item, index) => {
          item.svg = usingLogo[index];
          return item;
        })
      );
      setLearningSkillsCards(
        learningSkills.map((item, index) => {
          item.svg = learningLogo[index];
          return item;
        })
      );
    }
  }, [learningSkills, usingSkills]);

  return { usingSkillsCards, learningSkillsCards, loadingSkills};
};
